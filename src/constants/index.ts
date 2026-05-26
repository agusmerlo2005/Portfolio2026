export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
  status: "production" | "upcoming";
  featured?: boolean;
  year: string;
  role: string;
  metrics?: ProjectMetric[];
  accent?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Muska — Home & Deco",
    tagline: "E-commerce minimalista",
    description:
      "Tienda online de decoración construida sobre Next.js App Router y Supabase. Catálogo, carrito persistente, checkout, gestión de stock y un sistema de animaciones cuidado pensado para mobile-first.",
    tech: ["Next.js 15", "Supabase", "Tailwind v4", "Framer Motion", "Server Actions"],
    github: "https://github.com/agusmerlo2005/muska2026.git",
    demo: "https://muska2026.vercel.app",
    image: "/muska.png",
    status: "production",
    featured: true,
    year: "2025",
    role: "Diseño & Desarrollo",
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Productos", value: "120+" },
      { label: "Tiempo de carga", value: "<1.2s" },
    ],
    accent: "#7c5cff",
  },
  {
    title: "REVA Agro",
    tagline: "Plataforma agropecuaria",
    description:
      "Sitio corporativo y herramienta interna para visibilidad y gestión de datos en el sector agropecuario, con foco en performance y UX clara.",
    tech: ["React", "Node.js", "Tailwind CSS", "Lucide"],
    github: "https://github.com/agusmerlo2005/reva-agro.git",
    demo: "https://revaagro.vercel.app",
    image: "/reva.png",
    status: "production",
    year: "2025",
    role: "Full Stack",
    metrics: [
      { label: "Secciones", value: "8" },
      { label: "Responsive", value: "100%" },
    ],
    accent: "#34d399",
  },
  {
    title: "AGM System",
    tagline: "SaaS multi-tenant para negocios",
    description:
      "Sistema de gestión multi-tenant con Supabase RLS, panel administrativo, módulos de inventario, ventas y reportes. En desarrollo activo.",
    tech: ["TypeScript", "Next.js 16", "Supabase", "Postgres RLS", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    status: "upcoming",
    year: "2026",
    role: "Solo Founder",
    metrics: [
      { label: "Módulos", value: "6" },
      { label: "Stack", value: "TS 100%" },
    ],
    accent: "#fbbf24",
  },
];
