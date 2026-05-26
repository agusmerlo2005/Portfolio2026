"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="sobre-mi" className="relative px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex flex-col items-center lg:items-start group"
        >
          <div className="relative aspect-[4/5] w-full max-w-[420px] rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-[var(--color-accent)]/30 transition-all duration-700">
            <Image
              src="/agustin-merlo.jpeg"
              alt="Agustín Merlo — Full Stack Developer"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover group-hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-70" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(124,92,255,0.3), transparent 60%)",
              }}
            />
          </div>

          {/* Borde flotante decorativo */}
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 border-b-2 border-r-2 border-[var(--color-accent)]/30 rounded-br-[2rem] -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-700"
          />

          {/* Tag de ubicación */}
          <div className="flex items-center gap-2.5 mt-6 text-zinc-500 text-[10px] uppercase tracking-[0.25em] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Rosario · Santa Fe · AR
          </div>
        </motion.div>

        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)]">
            <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
            Sobre mí
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.04em] leading-[1.02] text-gradient">
            Código con criterio. <br />
            <span className="text-accent-gradient italic font-light">
              Diseño con intención.
            </span>
          </h2>

          <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            <p>
              Soy <span className="text-white font-semibold">Agustín Merlo</span>,
              desarrollador Full Stack basado en Argentina. Empecé escribiendo HTML
              por curiosidad y terminé enamorándome del oficio de transformar ideas
              en productos digitales reales.
            </p>
            <p className="border-l-2 border-[var(--color-accent)]/30 pl-6">
              Hoy combino mi formación en <span className="text-white font-semibold">Coderhouse</span>{" "}
              con proyectos en producción como <span className="text-white font-semibold">Muska</span>{" "}
              y <span className="text-white font-semibold">REVA Agro</span> para construir
              soluciones que no sólo se ven bien, sino que <em className="text-white not-italic">funcionan</em> bien.
            </p>
            <p>
              Mi obsesión: la prolijidad. Cada componente, cada animación y cada
              línea de código tiene una razón de ser. Trabajo con{" "}
              <span className="text-white font-semibold">Next.js, TypeScript, Supabase y Tailwind</span>,
              y disfruto cuidando los detalles que el cliente nunca pidió pero siempre nota.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            <Highlight title="Producto real" body="Proyectos en producción, no demos de tutorial." />
            <Highlight title="Diseño + código" body="No necesitás contratar diseñador y dev por separado." />
            <Highlight title="Comunicación clara" body="Cero tecnicismos innecesarios. Te explico todo." />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Highlight = ({ title, body }: { title: string; body: string }) => (
  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
    <h3 className="text-white font-semibold text-sm mb-1.5">{title}</h3>
    <p className="text-zinc-500 text-xs leading-relaxed">{body}</p>
  </div>
);
