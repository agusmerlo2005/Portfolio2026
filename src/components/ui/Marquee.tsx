"use client";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
};

const speedMap = {
  slow: "60s",
  normal: "40s",
  fast: "22s",
};

export const Marquee = ({
  children,
  reverse = false,
  speed = "normal",
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden mask-fade-x",
        className
      )}
    >
      <div
        className="flex w-max gap-12 will-change-transform"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speedMap[speed]} linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
};
