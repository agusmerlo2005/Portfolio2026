import { NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  budget: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Datos inválidos." },
        { status: 400 }
      );
    }

    if (parsed.data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    console.log("[contact] new message:", {
      name: parsed.data.name,
      email: parsed.data.email,
      budget: parsed.data.budget,
      messagePreview: parsed.data.message.slice(0, 80),
    });

    // TODO: integrar con Resend / Nodemailer / Supabase para persistir o enviar email.
    // Por ahora la API valida y responde 200 — la integración real va sin tocar el form.

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Error procesando la solicitud." },
      { status: 500 }
    );
  }
}
