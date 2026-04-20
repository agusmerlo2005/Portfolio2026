export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  status: 'production' | 'upcoming';
}

export const PROJECTS: Project[] = [
  {
    title: "Muska - Home & Deco",
    description: "E-commerce minimalista de decoración con sistema de carrito y gestión de productos.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/agusmerlo2005/muska2026.git",
    demo: "https://muska2026.vercel.app",
    image: "/muska.png",
    status: 'production'
  },
  {
    title: "REVA Agro",
    description: "Plataforma digital para el sector agropecuario, optimizada para gestión de datos y visibilidad corporativa.",
    tech: ["React", "Node.js", "Tailwind CSS", "Lucide"],
    github: "https://github.com/agusmerlo2005/reva-agro.git",
    demo: "https://revaagro.vercel.app",
    image: "/reva.png",
    status: 'production'
  },
  {
    title: "Sistema SaaS Inteligente",
    description: "Próximo gran lanzamiento: Una herramienta avanzada de gestión automatizada con IA.",
    tech: ["TypeScript", "Next.js 15", "Prisma", "PostgreSQL"],
    github: "https://github.com/agusmerlo2005", // Link a tu perfil general mientras tanto
    demo: "#",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop", 
    status: 'upcoming'
  }
];