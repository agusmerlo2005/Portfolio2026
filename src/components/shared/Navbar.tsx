"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" }, // Subimos Proyectos
    { name: "Formación", href: "#formacion" },
    { name: "Tecnologías", href: "#tecnologias" },
  ];

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-bold tracking-tighter uppercase"
        >
          Agustín<span className="text-gray-500">Merlo.dev</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5493471681690" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors"
          >
            Contacto
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full bg-[#0a0a0a] z-[99] md:hidden px-6 pt-10 h-screen"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold tracking-tighter hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <div className="flex flex-col gap-4 pb-10">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Conectemos</span>
                <div className="flex gap-6">
                  <a href="https://instagram.com/tu-usuario" target="_blank" className="text-sm font-medium">Instagram</a>
                  <a href="https://linkedin.com/in/tu-usuario" target="_blank" className="text-sm font-medium">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};