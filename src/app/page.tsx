import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Sección de bienvenida */}
      <Hero />

      {/* Contenedor de secciones con espaciado consistente */}
      <div className="space-y-24 md:space-y-32 pb-24 md:pb-32">
        
        {/* 1. Presentación Personal */}
        <About />

        {/* 2. Portfolio de Trabajos (Ahora justo debajo de Sobre mí) */}
        <Projects />

        {/* 3. Respaldo Académico */}
        <Education />

        {/* 4. Habilidades Técnicas */}
        <TechStack />
        
      </div>

      {/* Cierre y Contacto */}
      <Footer />
    </main>
  );
}