"use client";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export const Education = () => {
  const milestones = [
    {
      title: "Desarrollo Full Stack",
      institution: "Coderhouse",
      period: "Etapa Final",
      description: "Arquitectura avanzada de software y aplicaciones de alto rendimiento.",
      skills: ["Clean Architecture", "Next.js 15", "Optimization"]
    },
    {
      title: "Backend & Cloud",
      institution: "Coderhouse",
      period: "Completado",
      description: "Gestión de servidores, bases de datos y seguridad en la nube.",
      skills: ["Node.js", "Express", "PostgreSQL", "Supabase"]
    },
    {
      title: "Desarrollo Frontend",
      institution: "Coderhouse",
      period: "Completado",
      description: "Interfaces de usuario reactivas con foco en la experiencia del usuario.",
      skills: ["React.js", "Tailwind CSS", "Framer Motion"]
    }
  ];

  return (
    <section id="formacion" className="py-20 px-6 sm:px-10 max-w-7xl mx-auto border-t border-white/5">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
      >
        <GraduationCap className="text-indigo-400" /> Formación Profesional
      </motion.h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {milestones.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">{item.period}</span>
            <h4 className="text-xl font-bold text-white mt-1 mb-3">{item.title}</h4>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.skills.map(skill => (
                <span key={skill} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-300">
                  <CheckCircle2 size={10} className="text-emerald-500" /> {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};