"use client";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center relative overflow-hidden">
      {/* Fondo con un toque de luz sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-bold mb-6 block">
          Full Stack Developer — Coderhouse
        </span>
        
        <h1 className="text-5xl sm:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          Creamos software <br />
          <span className="text-gray-500">que escala.</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Hola, soy Agustín Merlo. Me especializo en construir aplicaciones modernas, 
          limpias y optimizadas para la mejor experiencia de usuario.
        </p>

        <div className="flex justify-center items-center">
          {/* Único botón: Descargar CV */}
          <motion.a
            href="/cv-agustin-merlo.pdf" // Ruta exacta del archivo en la carpeta public
            download="CV_Agustin_Merlo.pdf" // Nombre con el que se bajará el archivo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all shadow-xl hover:shadow-indigo-500/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Descargar CV
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" height="18" 
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};