"use client";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-white">
          Proyectos Destacados
        </h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-lg leading-relaxed text-pretty">
          Una selección de mis trabajos recientes como <span className="text-white">Muska-Home & Deco</span> y <span className="text-white">ReVaagro</span>, enfocados en la escalabilidad y el diseño minimalista.
        </p>
      </div>

      {/* Grilla dinámica: 1 col móvil, 2 col tablet (md), 3 col desktop (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};