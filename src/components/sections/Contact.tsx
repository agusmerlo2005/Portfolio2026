"use client";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export const Contact = () => {
  // Forzamos a TypeScript a ignorar la estructura interna para este acceso
const LinkedinIcon = ((LucideIcons as any)["Linkedin"] || (LucideIcons as any)["Linkedin"] || (LucideIcons as any)["User"]) as any;
const SendIcon = ((LucideIcons as any)["Send"] || (LucideIcons as any)["Mail"]) as any;

  return (
    <section id="contacto" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="bg-secondary/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 tracking-tighter">Hablemos.</h2>
            <p className="text-gray-400 text-lg mb-8">
              ¿Viste algo que te gustó en REVA o Muska? <br />
              Estoy disponible para nuevas oportunidades y desafíos técnicos.
            </p>
            
            <a 
              href="https://linkedin.com/in/tu-usuario" 
              target="_blank"
              className="flex items-center gap-3 text-accent font-semibold hover:underline"
            >
              <LinkedinIcon size={20} /> Conectemos en LinkedIn
            </a>
          </div>

          <form 
            action="https://formspree.io/f/tu-id-aqui" // Reemplaza esto con tu ID de Formspree después
            method="POST"
            className="grid gap-4"
          >
            <input 
              type="text" name="name" placeholder="Tu nombre" required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <input 
              type="email" name="email" placeholder="Tu email" required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <textarea 
              name="message" placeholder="¿En qué puedo ayudarte?" rows={4} required
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />
            <button 
              type="submit"
              className="bg-foreground text-background font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95"
            >
              Enviar Mensaje <SendIcon size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};