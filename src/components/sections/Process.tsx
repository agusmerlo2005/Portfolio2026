"use client";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Descubrimiento",
    description:
      "Charla inicial para entender tu negocio, objetivos y limitaciones. Salimos con un plan claro y un alcance acordado.",
  },
  {
    n: "02",
    title: "Diseño & arquitectura",
    description:
      "Defino la estructura técnica, paleta y referencias visuales. Te muestro mockups antes de tocar una sola línea de código.",
  },
  {
    n: "03",
    title: "Desarrollo iterativo",
    description:
      "Construyo el producto en sprints cortos. Vas viendo el progreso en un entorno preview real, no en capturas.",
  },
  {
    n: "04",
    title: "Lanzamiento & soporte",
    description:
      "Deploy en Vercel, optimización final, métricas, y acompañamiento post-lanzamiento para que no quedes a la deriva.",
  },
];

export const Process = () => {
  return (
    <section
      aria-label="Cómo trabajo"
      className="relative px-6 sm:px-10 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 lg:sticky lg:top-32 self-start"
        >
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)] mb-5">
            <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
            Cómo trabajo
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] leading-[1.05] mb-6 text-gradient">
            Un proceso <br />
            <span className="text-accent-gradient italic font-light">simple y claro.</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed">
            Sin enredos ni promesas vagas. Desde el primer mensaje hasta el deploy,
            sabés exactamente en qué etapa estamos.
          </p>
        </motion.div>

        <div className="lg:col-span-8 flex flex-col">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-[auto_1fr] gap-6 sm:gap-8 py-8 border-b border-white/5 last:border-b-0"
            >
              <span className="font-display text-3xl sm:text-4xl font-bold text-zinc-700 group-hover:text-[var(--color-accent-hi)] transition-colors tracking-tighter">
                {s.n}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight font-display">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
