import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <StackMarquee />
        <div className="space-y-28 md:space-y-40 pb-28 md:pb-40 pt-24 md:pt-32">
          <About />
          <Projects />
          <Services />
          <Process />
          <Education />
          <TechStack />
          <FAQ />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
