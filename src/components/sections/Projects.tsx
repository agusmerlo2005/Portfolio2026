"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Projects = () => {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p !== featured);

  return (
    <section
      id="proyectos"
      className="relative py-20 px-6 sm:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)] mb-5">
            <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
            Trabajo seleccionado
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.04em] leading-[1.05] text-gradient">
            Proyectos que <br />
            <span className="text-accent-gradient italic font-light">cuentan historias.</span>
          </h2>
        </div>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md sm:text-right">
          Una selección de productos digitales que diseñé y construí de punta a punta —
          desde el concepto hasta el deploy en producción.
        </p>
      </motion.div>

      {/* Grid bento: featured grande arriba, dos cards debajo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        <ProjectCard project={featured} index={0} variant="featured" />
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i + 1} />
        ))}
      </div>
    </section>
  );
};
