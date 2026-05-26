"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance. Una landing simple puede estar online en 3-5 días. Un e-commerce o SaaS lleva entre 2 y 6 semanas, dependiendo de cuántos módulos e integraciones tenga.",
  },
  {
    q: "¿Trabajás con clientes fuera de Argentina?",
    a: "Sí. Trabajo de forma 100% remota con clientes en todo LATAM, España y Estados Unidos. Coordinamos por WhatsApp, email o videollamada según prefieras.",
  },
  {
    q: "¿Qué stack usás y por qué?",
    a: "Mi base son Next.js + TypeScript + Tailwind para frontend, y Supabase o Node.js para backend. Es un stack moderno, performante, con escalabilidad real y un ecosistema enorme.",
  },
  {
    q: "¿Cómo se cotiza un proyecto?",
    a: "Tras una llamada inicial gratuita armo una propuesta concreta con alcance, plazos y precio cerrado. No cobro por hora: cobro por entregable, así no hay sorpresas.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "Te dejo todo documentado, el código en tu GitHub y el deploy en tu cuenta de Vercel. Si lo necesitás, ofrezco planes mensuales de mantenimiento y mejoras.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      aria-label="Preguntas frecuentes"
      className="relative px-6 sm:px-10 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)] mb-5">
          <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
          Dudas frecuentes
          <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.04em] leading-[1.05] text-gradient">
          ¿Tenés alguna pregunta?
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-2xl border transition-colors ${
                isOpen
                  ? "border-white/15 bg-[var(--color-bg-elevated)]"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                data-cursor-hover
              >
                <span className="text-base sm:text-lg font-semibold text-white">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-white/5 text-zinc-300"
                >
                  <Plus size={16} strokeWidth={2.5} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
