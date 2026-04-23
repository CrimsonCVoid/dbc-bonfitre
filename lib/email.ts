import { Resend } from "resend";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  details?: string;
  message: string;
};

export type EmailMode = "resend" | "log_only" | "fallback_sender";

export function getEmailMode(): EmailMode {
  const raw = (process.env.CONTACT_EMAIL_MODE || "resend").toLowerCase();
  if (raw === "log_only" || raw === "fallback_sender") return raw;
  return "resend";
}

function getSenderConfig(mode: EmailMode) {
  if (mode === "fallback_sender") {
    return {
      apiKey: process.env.RESEND_API_KEY_FALLBACK,
      from:
        process.env.CONTACT_EMAIL_FROM_FALLBACK ||
        "Destin Bonfire Company <bookings@30aflame.com>",
    };
  }
  return {
    apiKey: process.env.RESEND_API_KEY,
    from:
      process.env.CONTACT_EMAIL_FROM ||
      "Destin Bonfire Company <bookings@destinbonfirecompany.com>",
  };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtmlBody(p: ContactPayload): string {
  const rows: [string, string][] = [
    ["Name", p.name],
    ["Email", p.email],
    ["Phone", p.phone],
    ["Group size & date", p.details || "—"],
    ["Message", p.message],
  ];
  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;background:#f7f3ec;font-weight:600;color:#1b1b1b;width:180px;vertical-align:top;">${escapeHtml(
          label,
        )}</td><td style="padding:8px 12px;color:#222;vertical-align:top;white-space:pre-wrap;">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#fff;color:#1b1b1b;margin:0;padding:24px;">
<div style="max-width:640px;margin:0 auto;">
<h2 style="margin:0 0 16px 0;color:#c25a2e;">New booking inquiry</h2>
<p style="margin:0 0 20px 0;color:#555;font-size:14px;">From the contact form at destinbonfirecompany.com.</p>
<table cellspacing="0" cellpadding="0" style="border:1px solid #e5dcd0;border-radius:8px;overflow:hidden;width:100%;border-collapse:collapse;font-size:14px;">
${rowsHtml}
</table>
<p style="margin:20px 0 0 0;color:#888;font-size:12px;">Reply directly to this email to respond to ${escapeHtml(
    p.name,
  )}.</p>
</div>
</body></html>`;
}

function buildTextBody(p: ContactPayload): string {
  return [
    "New booking inquiry from the Destin Bonfire Company contact form",
    "",
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    `Phone: ${p.phone}`,
    `Group size & date: ${p.details || "—"}`,
    "",
    "Message:",
    p.message,
    "",
    `Reply directly to this email to respond to ${p.name}.`,
  ].join("\n");
}

export type SendResult =
  | { ok: true; id?: string; mode: EmailMode }
  | { ok: false; error: string; mode: EmailMode };

export async function sendContactEmail(
  payload: ContactPayload,
): Promise<SendResult> {
  const mode = getEmailMode();

  if (mode === "log_only") {
    return { ok: true, mode };
  }

  const { apiKey, from } = getSenderConfig(mode);
  if (!apiKey) {
    return {
      ok: false,
      mode,
      error: `Missing API key for mode "${mode}". Set ${mode === "fallback_sender" ? "RESEND_API_KEY_FALLBACK" : "RESEND_API_KEY"}.`,
    };
  }

  const to = process.env.CONTACT_EMAIL_TO || "bookings@destinbonfirecompany.com";
  const replyTo = process.env.CONTACT_EMAIL_REPLY_TO || payload.email;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo,
      subject: `New booking inquiry from ${payload.name}`,
      html: buildHtmlBody(payload),
      text: buildTextBody(payload),
    });
    if (error) {
      return { ok: false, mode, error: error.message || String(error) };
    }
    return { ok: true, mode, id: data?.id };
  } catch (err) {
    return {
      ok: false,
      mode,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
