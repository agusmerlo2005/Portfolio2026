"use client";
import { motion } from "framer-motion";
import { Layout, Server, Database, Terminal } from "lucide-react";
import type { ReactNode } from "react";

interface Category {
  title: string;
  icon: ReactNode;
  accent: string;
  skills: string[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    icon: <Layout size={22} strokeWidth={1.75} />,
    accent: "#7c5cff",
    skills: ["React", "Next.js 16", "TypeScript", "Tailwind v4", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server size={22} strokeWidth={1.75} />,
    accent: "#34d399",
    skills: ["Node.js", "Express", "REST APIs", "Server Actions", "JWT Auth"],
  },
  {
    title: "Database",
    icon: <Database size={22} strokeWidth={1.75} />,
    accent: "#fbbf24",
    skills: ["PostgreSQL", "Supabase", "Prisma ORM", "Firebase", "RLS"],
  },
  {
    title: "Tooling",
    icon: <Terminal size={22} strokeWidth={1.75} />,
    accent: "#f472b6",
    skills: ["Git / GitHub", "Vercel", "SEO técnico", "Lighthouse", "Figma"],
  },
];

export const TechStack = () => {
  return (
    <section
      id="tecnologias"
      className="relative px-6 sm:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 max-w-2xl"
      >
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)] mb-5">
          <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
          Ecosistema técnico
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] leading-[1.05] text-gradient">
          Herramientas que <br />
          <span className="text-accent-gradient italic font-light">domino.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-7 rounded-2xl bg-[var(--color-bg-elevated)] border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: cat.accent }}
            />
            <div
              className="relative flex items-center justify-center h-12 w-12 rounded-xl bg-white/[0.04] border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-500"
              style={{ color: cat.accent }}
            >
              {cat.icon}
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-5 tracking-tight">
              {cat.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {cat.skills.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2.5 text-sm text-zinc-300"
                >
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ background: cat.accent }}
                  />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
