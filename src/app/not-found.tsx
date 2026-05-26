import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-50 -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.6) 0%, transparent 60%)",
        }}
      />
      <div className="font-display text-[20vw] sm:text-[14rem] font-bold tracking-tighter leading-none text-gradient">
        404
      </div>
      <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mt-4 mb-3">
        Esta página se fue de viaje.
      </h1>
      <p className="text-zinc-400 max-w-md mb-10">
        El enlace que seguiste no existe o se mudó. Volvé al inicio y seguimos.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-accent-hi)] transition-colors"
      >
        <ArrowLeft size={15} strokeWidth={2.5} />
        Volver al inicio
      </Link>
    </main>
  );
}
