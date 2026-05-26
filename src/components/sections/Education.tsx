"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    title: "Desarrollo Full Stack",
    institution: "Coderhouse",
    period: "Etapa final · 2026",
    description:
      "Arquitectura avanzada, optimización y aplicaciones de alto rendimiento con Next.js 15.",
    skills: ["Clean Architecture", "Next.js 15", "Optimization", "Testing"],
  },
  {
    title: "Backend & Cloud",
    institution: "Coderhouse",
    period: "Completado · 2025",
    description:
      "Servidores, bases de datos relacionales, autenticación y seguridad en la nube.",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase"],
  },
  {
    title: "Desarrollo Frontend",
    institution: "Coderhouse",
    period: "Completado · 2024",
    description:
      "Interfaces reactivas, animaciones cuidadas y foco en experiencia de usuario.",
    skills: ["React", "Tailwind CSS", "Framer Motion"],
  },
];

export const Education = () => {
  return (
    <section
      id="formacion"
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
          Formación
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] leading-[1.05] text-gradient">
          Aprendizaje <br />
          <span className="text-accent-gradient italic font-light">continuo.</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)]/40 via-white/10 to-transparent"
        />
        <div className="flex flex-col gap-8">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-12 sm:pl-16"
            >
              <span
                aria-hidden
                className="absolute left-0 sm:left-1 top-3 flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)]/40 ring-4 ring-[var(--color-bg)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-hi)]" />
              </span>

              <div className="rounded-2xl bg-[var(--color-bg-elevated)] border border-white/5 p-6 sm:p-7 hover:border-white/15 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {m.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[var(--color-accent-hi)]">
                    {m.period}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
                  {m.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium text-zinc-300 bg-white/[0.04] border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
