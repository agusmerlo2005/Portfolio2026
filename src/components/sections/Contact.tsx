"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Check, Mail, MapPin } from "lucide-react";
import { WhatsappIcon, LinkedinIcon, GithubIcon } from "@/components/ui/Icons";

const EMAIL = "agusmerlo2005@icloud.com";
const WHATSAPP = "5493471681690";

const schema = z.object({
  name: z.string().min(2, "Demasiado corto").max(80, "Demasiado largo"),
  email: z.string().email("Email inválido"),
  budget: z.string().optional(),
  message: z.string().min(10, "Contame un poco más (mín. 10 caracteres)").max(2000),
  honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const budgets = ["< USD 500", "USD 500 - 1500", "USD 1500 - 4000", "USD 4000+", "A discutir"];

const buildBody = (data: FormValues) => {
  return [
    `Hola Agustín,`,
    ``,
    `Soy ${data.name}.`,
    `Email: ${data.email}`,
    data.budget ? `Presupuesto: ${data.budget}` : null,
    ``,
    `Mensaje:`,
    data.message,
    ``,
    `— Enviado desde agustinmerlo.dev`,
  ]
    .filter(Boolean)
    .join("\n");
};

export const Contact = () => {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", budget: "", honeypot: "" },
  });

  const selectedBudget = watch("budget");

  const onSubmitMail = (data: FormValues) => {
    if (data.honeypot) return;
    const subject = `Nuevo contacto desde el portfolio · ${data.name}`;
    const body = buildBody(data);
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  const onWhatsapp = () => {
    const data = getValues();
    const result = schema.safeParse(data);
    if (!result.success) {
      handleSubmit(() => {})();
      return;
    }
    const text = buildBody(result.data);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
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
              Llená el formulario y elegí cómo querés mandarme el mensaje — abre tu
              cliente de mail o WhatsApp con todo pre-cargado. Respondo en menos de 24hs hábiles.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/[0.04] border border-white/5 text-[var(--color-accent-hi)]">
                  <Mail size={16} />
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm font-medium hover:text-white transition-colors"
                >
                  {EMAIL}
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
                href={`https://wa.me/${WHATSAPP}`}
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
            onSubmit={handleSubmit(onSubmitMail)}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-[var(--color-accent-hi)] transition-all"
                data-cursor-hover
              >
                {sent ? (
                  <>
                    <Check size={16} strokeWidth={2.5} />
                    ¡Listo!
                  </>
                ) : (
                  <>
                    <Mail size={15} strokeWidth={2.5} />
                    Enviar por email
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onWhatsapp}
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
                data-cursor-hover
              >
                <WhatsappIcon size={15} />
                WhatsApp
              </button>
            </div>

            <p className="text-[11px] text-zinc-500 text-center mt-2 leading-relaxed">
              Al enviar, se abre tu cliente de mail o WhatsApp con el mensaje pre-cargado.
              <br />
              Tus datos quedan sólo entre vos y yo.
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
