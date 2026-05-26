"use client";
import { Marquee } from "@/components/ui/Marquee";

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Framer Motion",
  "Prisma",
  "Vercel",
  "Server Actions",
  "Lenis",
];

export const StackMarquee = () => {
  return (
    <section
      aria-label="Tecnologías que uso"
      className="py-10 border-y border-white/5 bg-[var(--color-bg-elevated)]/40"
    >
      <Marquee speed="slow">
        {STACK.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 text-zinc-500 hover:text-white transition-colors"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              {item}
            </span>
            <span className="text-[var(--color-accent)] text-xl">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
