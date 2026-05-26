"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
  strength?: number;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export const MagneticButton = ({
  children,
  href,
  download,
  onClick,
  className,
  variant = "primary",
  strength = 0.3,
  target,
  rel,
  ariaLabel,
}: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(relX * strength);
    mouseY.set(relY * strength);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-[0.18em] overflow-hidden transition-colors duration-300 will-change-transform";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-[var(--color-accent-hi)] shadow-[0_10px_40px_-10px_rgba(124,92,255,0.6)]"
      : "border border-white/15 text-white hover:border-white/40 hover:bg-white/5";

  const content = (
    <motion.span
      style={{ x, y }}
      className="relative z-10 flex items-center gap-3"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x, y }}
        className={clsx(base, styles, className)}
        data-cursor-hover
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      className={clsx(base, styles, className)}
      data-cursor-hover
    >
      {content}
    </motion.button>
  );
};
