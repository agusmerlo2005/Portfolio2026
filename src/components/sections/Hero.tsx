"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Aurora } from "@/components/ui/Aurora";
import { MagneticButton } from "@/components/ui/MagneticButton";

const headline = ["Construyo", "productos", "que", "escalan."];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 pt-32 pb-16 overflow-hidden"
    >
      <Aurora />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid mask-radial opacity-60 -z-10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-noise opacity-[0.035] -z-10 mix-blend-overlay"
      />

      <div className="relative max-w-7xl w-full mx-auto">
        {/* Badge "disponible" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-zinc-300">
            Disponible para nuevos proyectos · 2026
          </span>
        </motion.div>

        {/* Headline con reveal por palabra */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(2.75rem,9vw,9rem)] font-bold tracking-[-0.045em] leading-[0.92] mb-10"
        >
          {headline.map((w, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom mr-[0.18em]"
            >
              <motion.span
                variants={word}
                className={`inline-block ${
                  i === headline.length - 1
                    ? "text-accent-gradient italic font-light"
                    : "text-gradient"
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* Subtítulo + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              Soy <span className="text-white font-semibold">Agustín Merlo</span>,
              desarrollador <span className="text-white font-semibold">Full Stack</span>{" "}
              con foco en <span className="text-white font-semibold">Next.js</span>,
              <span className="text-white font-semibold"> Supabase</span> y diseño de producto.
              Diseño, construyo y desplie­go aplicaciones web rápidas y con identidad propia.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/cv-agustin-merlo.pdf"
                download="CV_Agustin_Merlo.pdf"
                ariaLabel="Descargar CV en PDF"
              >
                <Download size={16} strokeWidth={2.5} />
                Descargar CV
              </MagneticButton>

              <MagneticButton
                href="#contacto"
                variant="ghost"
                ariaLabel="Ir a la sección de contacto"
              >
                <Mail size={16} strokeWidth={2.5} />
                Hablemos
              </MagneticButton>
            </div>
          </motion.div>

          {/* Mini-stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="lg:col-span-5 grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          >
            <Stat value="3+" label="Años de práctica" />
            <Stat value="10+" label="Proyectos enviados" />
            <Stat
              value="100%"
              label="Foco en performance"
              accent
            />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.a
          href="#sobre-mi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
          aria-label="Scroll para ver más"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} strokeWidth={2} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

const Stat = ({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) => (
  <div className="bg-[var(--color-bg)] p-5 sm:p-6 flex flex-col gap-1.5">
    <span
      className={`text-3xl sm:text-4xl font-bold tracking-tight font-display ${
        accent ? "text-accent-gradient" : "text-white"
      }`}
    >
      {value}
    </span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
      {label}
    </span>
  </div>
);
