"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Tecnologías", href: "#tecnologias" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/75 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        <motion.a
          href="#inicio"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2.5 group"
          aria-label="Inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black font-display font-black text-sm tracking-tighter transition-transform group-hover:rotate-12">
            AM
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-bold tracking-tight">
              Agustín Merlo
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 font-bold">
              Full Stack Dev
            </span>
          </span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="px-4 py-2 inline-flex text-xs uppercase tracking-[0.18em] font-bold text-zinc-400 hover:text-white rounded-full transition-colors hover:bg-white/5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.18em] rounded-full hover:bg-[var(--color-accent-hi)] transition-colors"
            data-cursor-hover
          >
            Contacto
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 bg-[var(--color-bg)]/95 backdrop-blur-2xl md:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col gap-1 p-6 pt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-4xl font-bold tracking-tighter py-3 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-600 text-base">0{i + 1}</span>
                </motion.a>
              ))}
            </div>
            <div className="p-6 border-t border-white/5 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                Conectemos
              </span>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/digitall_forge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/agustinmerlolinkdin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/agusmerlo2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
