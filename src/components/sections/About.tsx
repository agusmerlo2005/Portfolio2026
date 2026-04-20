"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
      
      {/* Grilla Principal con efecto de profundidad */}
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 items-start">
        
        {/* Lado Izquierdo: Tu Foto con Diseño Innovador */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }} // Se activa cuando el 50% es visible
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 relative flex flex-col items-center lg:items-start group"
        >
          {/* Contenedor Flotante de la Foto */}
          <div className="relative aspect-[1/1.2] w-[280px] sm:w-[340px] rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-indigo-500/40 transition-all duration-700 shadow-2xl">
            
            {/* Foto Real - IMPORTANTE: Usamos .jpeg */}
            <Image
              src="/agustin-merlo.jpeg" // Nombre exacto de tu archivo en public/
              alt="Agustín Merlo - Full Stack Developer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority // Carga la imagen con prioridad por ser parte del "fold"
            />
            
            {/* Superposición sutil de color para integrarla al modo oscuro */}
            <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-700" />
            
            {/* Gradiente inferior para un "fade" suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
          </div>
          
          {/* Detalle minimalista: Borde flotante decorativo */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-indigo-500/30 rounded-br-3xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
          
          {/* Texto de ubicación integrado */}
          <div className="flex items-center gap-2 mt-5 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
            Rosario, Santa Fe, AR.
          </div>
        </motion.div>

        {/* Lado Derecho: Tu Historia (Extensa) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="lg:col-span-3 space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter leading-[1.1]">
              El arte de transformar <br />
              <span className="text-gray-500">código en herramientas.</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            <p className="border-l-2 border-indigo-500/20 pl-6">
              Hola, soy Agustín. Mi viaje en el desarrollo comenzó con una curiosidad insaciable por entender cómo funcionan las cosas detrás de la pantalla. Hoy, como desarrollador <span className="text-white font-medium">Full Stack en la etapa final de mi formación en Coderhouse</span>, esa curiosidad se ha transformado en una metodología de trabajo sólida y profesional.
            </p>
            <p>
              No solo escribo código; construyo herramientas. Mi experiencia desarrollando proyectos como <span className="text-white font-medium">Muska</span> y <span className="text-white font-medium">REVA Agro</span> me ha permitido dominar el equilibrio entre un diseño estético y una arquitectura técnica escalable.
            </p>
            <p>
              Me especializo en el ecosistema de <span className="text-white font-medium">JavaScript</span>, con un enfoque profundo en <span className="text-white font-medium">Next.js y Tailwind CSS</span> para el frontend, y soluciones eficientes en el backend con <span className="text-white font-medium">Node.js y Supabase</span>. Mi objetivo es claro: ayudar a las empresas a escalar sus productos digitales optimizando cada línea de código para el SEO y la performance.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};