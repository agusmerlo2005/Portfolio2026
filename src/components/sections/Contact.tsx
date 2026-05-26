"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, Check, AlertCircle, Mail, MapPin } from "lucide-react";
import { WhatsappIcon, LinkedinIcon, GithubIcon } from "@/components/ui/Icons";

const schema = z.object({
  name: z.string().min(2, "Demasiado corto").max(80, "Demasiado largo"),
  email: z.string().email("Email inválido"),
  budget: z.string().optional(),
  message: z.string().min(10, "Contame un poco más (mín. 10 caracteres)").max(2000),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const budgets = ["< USD 500", "USD 500 - 1500", "USD 1500 - 4000", "USD 4000+", "A discutir"];

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", budget: "", honeypot: "" },
  });

  const selectedBudget = watch("budget");

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contacto"
      className="relative px-6 sm:px-10 max-w-7xl mx-auto"
    >
      <div className="relative rounded-[2.5rem] sm:rounded-[3rem] border border-white/10 bg-[var(--color-bg-elevated)] p-8 sm:p-14 lg:p-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,255,0.4) 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[380px] h-[380px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 60%)",
          }}
        />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-accent-hi)] mb-5">
              <span className="h-px w-8 bg-[var(--color-accent-hi)]/40" />
              Hablemos
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.04em] leading-[0.95] mb-6 text-gradient">
              ¿Tenés una idea? <br />
              <span className="text-accent-gradient italic font-light">La construimos.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
              Contame en qué estás pensando. Respondo personalmente todos los mensajes
              en menos de 24hs hábiles.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.04] border border-white/5 text-[var(--color-accent-hi)]">
                  <Mail size={16} />
                </span>
                <a
                  href="mailto:agusmerlo2005@icloud.com"
                  className="text-sm font-medium hover:text-white transition-colors"
                >
                  agusmerlo2005@icloud.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.04] border border-white/5 text-[var(--color-accent-hi)]">
                  <MapPin size={16} />
                </span>
                <span className="text-sm font-medium">Rosario / Armstrong · Santa Fe, AR</span>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/5493471681690"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 text-zinc-300 hover:border-emerald-400/40 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all"
                aria-label="WhatsApp"
                data-cursor-hover
              >
                <WhatsappIcon size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/agustinmerlolinkdin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
                aria-label="LinkedIn"
                data-cursor-hover
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="https://github.com/agusmerlo2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all"
                aria-label="GitHub"
                data-cursor-hover
              >
                <GithubIcon size={17} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            noValidate
          >
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
              {...register("honeypot")}
            />

            <Field label="Nombre" error={errors.name?.message}>
              <input
                {...register("name")}
                placeholder="Cómo te llamás"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.05] transition-all"
              />
            </Field>

            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                placeholder="tu@correo.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.05] transition-all"
              />
            </Field>

            <Field label="Presupuesto" error={errors.budget?.message} optional>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <label
                    key={b}
                    className={`cursor-pointer text-xs font-medium px-3.5 py-2 rounded-full border transition-all ${
                      selectedBudget === b
                        ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <input
                      type="radio"
                      value={b}
                      {...register("budget")}
                      className="sr-only"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Tu mensaje" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Contame en qué estás pensando..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-white/[0.05] transition-all resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-white text-black text-sm font-bold uppercase tracking-[0.18em] hover:bg-[var(--color-accent-hi)] disabled:opacity-60 disabled:cursor-not-allowed transition-all overflow-hidden"
              data-cursor-hover
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Enviando…
                </>
              ) : status === "success" ? (
                <>
                  <Check size={16} strokeWidth={2.5} />
                  ¡Mensaje enviado!
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle size={16} strokeWidth={2.5} />
                  Hubo un error
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send size={15} strokeWidth={2.5} />
                </>
              )}
            </button>

            <p className="text-[11px] text-zinc-500 text-center mt-1">
              Tus datos son privados y sólo se usan para responderte.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] font-bold text-zinc-500">
      <span>{label}</span>
      {optional && <span className="text-zinc-700">opcional</span>}
      {error && <span className="text-rose-400 normal-case tracking-normal text-[11px] font-medium">{error}</span>}
    </span>
    {children}
  </label>
);
