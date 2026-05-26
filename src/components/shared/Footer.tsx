"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
} from "@/components/ui/Icons";

const social = [
  {
    name: "WhatsApp",
    href: "https://wa.me/5493471681690",
    icon: <WhatsappIcon size={18} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/agustinmerlolinkdin/",
    icon: <LinkedinIcon size={18} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/agusmerlo2005",
    icon: <GithubIcon size={18} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/digitall_forge",
    icon: <InstagramIcon size={18} />,
  },
];

const internal = [
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[var(--color-bg)] pt-28 pb-10 px-6 sm:px-10 overflow-hidden">
      {/* Mega-typography decorativa */}
      <div
        aria-hidden
        className="absolute -bottom-20 sm:-bottom-32 left-1/2 -translate-x-1/2 font-display font-black text-[28vw] sm:text-[18vw] leading-none tracking-tighter text-white/[0.02] select-none whitespace-nowrap"
      >
        agustinmerlo
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-5xl sm:text-7xl font-bold tracking-[-0.04em] leading-[0.95] mb-8 text-gradient">
              ¿Listo para <br />
              <span className="text-accent-gradient italic font-light">
                construir algo grande?
              </span>
            </h2>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 text-lg sm:text-xl font-semibold text-white"
              data-cursor-hover
            >
              <span className="border-b border-white/30 group-hover:border-white pb-1 transition-colors">
                Escribime y arrancamos
              </span>
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--color-accent)] text-white group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </a>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
                Navegación
              </h4>
              <ul className="space-y-3.5">
                {internal.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
                Redes
              </h4>
              <ul className="space-y-3.5">
                {social.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      <span className="text-zinc-500 group-hover:text-white transition-colors">
                        {s.icon}
                      </span>
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.22em] uppercase font-bold text-zinc-500">
              © {currentYear} Agustín Merlo · Full Stack Developer
            </p>
            <p className="text-[11px] text-zinc-600">
              Armstrong / Rosario · Santa Fe, Argentina
            </p>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 text-[10px] uppercase tracking-[0.22em] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)] animate-pulse" />
            Disponible para nuevos proyectos
          </div>
        </div>
      </div>
    </footer>
  );
};
