"use client";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  LayoutDashboard,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  bullets: string[];
  price?: string;
}

const services: Service[] = [
  {
    icon: <ShoppingBag size={22} strokeWidth={1.75} />,
    title: "E-commerce a medida",
    description:
      "Tiendas online rápidas, con carrito, pagos y panel de administración. Pensadas para vender desde el día uno.",
    bullets: ["Next.js + Supabase", "MercadoPago / Stripe", "Panel admin incluido"],
    price: "Desde 7 días",
  },
  {
    icon: <LayoutDashboard size={22} strokeWidth={1.75} />,
    title: "Landing pages que convierten",
    description:
      "Sitios de alto impacto para presentar tu marca o producto, optimizados para SEO y velocidad.",
    bullets: ["Diseño + copy", "Lighthouse 95+", "Listas para Ads"],
    price: "Desde 3 días",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.75} />,
    title: "SaaS & Apps a medida",
    description:
      "Aplicaciones web internas, dashboards y herramientas que automatizan procesos de tu negocio.",
    bullets: ["Auth + roles", "Multi-tenant con RLS", "Integraciones API"],
    price: "Por proyecto",
  },
  {
    icon: <Wrench size={22} strokeWidth={1.75} />,
    title: "Mantenimiento & evolución",
    description:
      "¿Ya tenés un sitio? Lo optimizo, lo actualizo y le sumo funcionalidades sin frenar tu operación.",
    bullets: ["Auditoría técnica", "Mejoras de UX/SEO", "Soporte mensual"],
    price: "Plan mensual",
  },
];

export const Services = () => {
  return (
    <section
      id="servicios"
      className="relative px-6 sm:px-10 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)] mb-5">
          <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
          Qué ofrezco
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.04em] leading-[1.05] mb-6 text-gradient">
          Servicios pensados <br />
          <span className="text-accent-gradient italic font-light">
            para crecer.
          </span>
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
          Acompaño a marcas y emprendedores a construir su presencia digital con productos
          web modernos, rápidos y diseñados con criterio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-7 sm:p-9 rounded-3xl bg-[var(--color-bg-elevated)] border border-white/5 hover:border-white/15 hover:bg-[var(--color-surface)] transition-all duration-500 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[var(--color-accent)]/0 group-hover:bg-[var(--color-accent)]/10 blur-3xl transition-all duration-700"
            />
            <div className="relative flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/[0.04] border border-white/5 text-[var(--color-accent-hi)] group-hover:scale-110 group-hover:border-[var(--color-accent)]/30 transition-all duration-500">
                {s.icon}
              </div>
              {s.price && (
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-zinc-500 pt-2">
                  {s.price}
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3 tracking-tight">
              {s.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {s.description}
            </p>
            <ul className="flex flex-col gap-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-[13px] text-zinc-300"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--color-accent-hi)]" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
