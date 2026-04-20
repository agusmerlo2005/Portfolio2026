"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { Project } from "@/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const GithubIcon = (LucideIcons as any).Github;
  const ExternalIcon = (LucideIcons as any).ExternalLink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
    >
      {/* Contenedor de Imagen */}
      <div className="relative aspect-video overflow-hidden">
        {project.status === 'upcoming' && (
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-indigo-600/90 backdrop-blur-md text-[10px] font-bold rounded-full text-white uppercase tracking-widest border border-white/10 shadow-2xl">
            En Desarrollo
          </div>
        )}
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((skill: string) => (
            <span 
              key={skill} 
              className="px-2.5 py-1 bg-white/5 rounded-lg text-[10px] text-gray-300 border border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Sección de Links con lógica condicional */}
        <div className="flex gap-5 mt-auto pt-4 border-t border-white/5">
          {/* Solo mostramos GitHub si NO es un proyecto futuro */}
          {project.status !== 'upcoming' && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all transform hover:scale-105"
            >
              {GithubIcon && <GithubIcon size={20} />}
              <span className="text-xs font-medium">Code</span>
            </a>
          )}

          {/* Solo mostramos Demo si NO es un proyecto futuro */}
          {project.status !== 'upcoming' && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-all transform hover:scale-105"
            >
              {ExternalIcon && <ExternalIcon size={20} />}
              <span className="text-xs font-medium">Live Demo</span>
            </a>
          )}

          {/* Mensaje opcional si está en desarrollo (para que no quede el hueco vacío) */}
          {project.status === 'upcoming' && (
            <span className="text-xs text-gray-600 italic">
              Links disponibles próximamente
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};