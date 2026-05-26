"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Project } from "@/constants";

interface Props {
  project: Project;
  index: number;
  variant?: "featured" | "regular";
}

export const ProjectCard = ({ project, index, variant = "regular" }: Props) => {
  const isFeatured = variant === "featured";
  const isUpcoming = project.status === "upcoming";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[var(--color-bg-elevated)] hover:border-white/10 transition-all duration-500 ${
        isFeatured ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      {/* Glow del color de marca del proyecto al hover */}
      {project.accent && (
        <div
          aria-hidden
          className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-2xl"
          style={{
            background: `radial-gradient(ellipse at top, ${project.accent}33, transparent 60%)`,
          }}
        />
      )}

      <div className={`flex flex-col ${isFeatured ? "lg:flex-row lg:h-full" : ""}`}>
        {/* Media */}
        <div
          className={`relative overflow-hidden ${
            isFeatured
              ? "aspect-[16/10] lg:aspect-auto lg:w-[58%] lg:flex-shrink-0"
              : "aspect-[16/10]"
          }`}
        >
          {/* Badge de status */}
          <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-md border ${
                isUpcoming
                  ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                  : "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isUpcoming ? "bg-amber-400" : "bg-emerald-400"
                }`}
              />
              {isUpcoming ? "En desarrollo" : "En producción"}
            </span>
          </div>

          <div className="absolute top-5 right-5 z-10 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-300">
            {project.year}
          </div>

          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={isFeatured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] via-[var(--color-bg-elevated)]/40 to-transparent" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"
            style={{
              background: project.accent
                ? `radial-gradient(circle at 50% 50%, ${project.accent}40, transparent 60%)`
                : undefined,
            }}
          />
        </div>

        {/* Body */}
        <div className={`relative flex flex-col p-7 sm:p-9 ${isFeatured ? "lg:flex-1 lg:p-12" : ""}`}>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] font-bold text-zinc-500 mb-4">
            <span style={{ color: project.accent }}>●</span>
            <span>{project.tagline}</span>
            <span className="text-zinc-700">·</span>
            <span>{project.role}</span>
          </div>

          <h3
            className={`font-display font-bold tracking-tight text-white mb-4 ${
              isFeatured ? "text-3xl sm:text-5xl leading-[1.05]" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`text-zinc-400 leading-relaxed mb-6 ${
              isFeatured ? "text-base sm:text-lg max-w-xl" : "text-sm line-clamp-3"
            }`}
          >
            {project.description}
          </p>

          {/* Métricas — sólo en featured */}
          {isFeatured && project.metrics && (
            <div className="grid grid-cols-3 gap-3 mb-7">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-7">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[10px] font-medium text-zinc-400 bg-white/[0.04] border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/5">
            {!isUpcoming && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-[var(--color-accent-hi)] transition-colors"
                data-cursor-hover
              >
                Ver demo
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
            )}
            {!isUpcoming && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-zinc-300 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white/5 hover:text-white transition-colors"
                data-cursor-hover
              >
                <GithubIcon size={14} />
                Código
              </a>
            )}
            {isUpcoming && (
              <span className="text-[11px] text-zinc-500 italic">
                Próximamente — links disponibles al lanzamiento
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
