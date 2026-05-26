"use client";

export const Aurora = ({ className = "" }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}
    >
      <div
        className="absolute top-[-20%] left-[-10%] h-[60vh] w-[60vw] rounded-full blur-[120px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,255,0.55) 0%, transparent 60%)",
          animation: "aurora 18s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute top-[10%] right-[-20%] h-[55vh] w-[55vw] rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 60%)",
          animation: "aurora 22s ease-in-out infinite alternate-reverse",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] h-[45vh] w-[45vw] rounded-full blur-[120px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 60%)",
          animation: "aurora 26s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
};
