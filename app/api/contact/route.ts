import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  needs?: string[];
  businessType?: string;
  hasWebsite?: string;
  websiteUrl?: string;
  timing?: string;
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
  website_hp?: string; // honeypot
};

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .slice(0, 2000);

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Spam: honeypot ingevuld → doen alsof het gelukt is
  if (data.website_hp) return NextResponse.json({ ok: true });

  const email = (data.email ?? "").trim();
  if (!data.name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !data.phone?.trim()) {
    return NextResponse.json({ error: "Vul je naam, e-mailadres en telefoonnummer in." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "GroeiKoning website <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY of CONTACT_TO_EMAIL ontbreekt");
    return NextResponse.json({ error: "Versturen lukt nu niet. Mail ons direct." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Naam", data.name ?? ""],
    ["Bedrijf", data.company ?? ""],
    ["Telefoon", data.phone ?? ""],
    ["E-mail", email],
    ["Type bedrijf", data.businessType ?? ""],
    ["Hulp bij", (data.needs ?? []).join(", ")],
    ["Heeft website", data.hasWebsite ?? ""],
    ["Huidige website", data.websiteUrl ?? ""],
    ["Wanneer starten", data.timing ?? ""],
    ["Opmerking", data.message ?? ""],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#1F272F">
      <h2 style="margin:0 0 16px">Nieuwe aanvraag via groeikoning.nl</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([k, v]) =>
              `<tr><td style="border-bottom:1px solid #E2E6EA;font-weight:bold;vertical-align:top">${esc(k)}</td><td style="border-bottom:1px solid #E2E6EA">${esc(v).replace(/\n/g, "<br>")}</td></tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()),
      replyTo: email,
      subject: `Nieuwe aanvraag: ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html,
      text,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Resend fout:", e);
    return NextResponse.json({ error: "Versturen mislukt. Probeer het opnieuw of mail ons direct." }, { status: 500 });
  }
}
