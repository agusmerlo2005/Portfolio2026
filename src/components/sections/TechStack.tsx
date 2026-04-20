"use client";
import { motion } from "framer-motion";
import { Layout, Server, Database, Terminal } from "lucide-react";

export const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-indigo-400" size={24} />,
      skills: ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-400" size={24} />,
      skills: ["Node.js", "Express", "REST APIs", "Server Actions", "JWT"]
    },
    {
      title: "Database",
      icon: <Database className="text-amber-400" size={24} />,
      skills: ["PostgreSQL", "Supabase", "Prisma ORM", "Firebase"]
    },
    {
      title: "Tooling",
      icon: <Terminal className="text-rose-400" size={24} />,
      skills: ["Git/GitHub", "Vercel", "SEO", "Responsive Design"]
    }
  ];

  return (
    <section id="tecnologias" className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mb-4">
          Ecosistema <span className="text-gray-500">Tecnológico.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Herramientas y tecnologías que domino para llevar una idea desde el concepto hasta la producción.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 group"
          >
            <div className="p-3 bg-white/5 w-fit rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.skills.map(skill => (
                <li key={skill} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-indigo-500/50" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};