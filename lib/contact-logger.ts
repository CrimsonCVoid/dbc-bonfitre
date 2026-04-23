import fs from "node:fs/promises";
import path from "node:path";
import type { ContactPayload } from "./email";

export type ContactLogEntry = {
  submitted_at: string;
  name: string;
  email: string;
  phone: string;
  details?: string;
  message: string;
  email_sent: boolean;
  mode: string;
  error_message: string | null;
  user_agent?: string;
  ip?: string;
};

const LOG_PATH = path.join(process.cwd(), "logs", "contact-submissions.json");

async function ensureLogFile(): Promise<void> {
  const dir = path.dirname(LOG_PATH);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(LOG_PATH);
  } catch {
    await fs.writeFile(LOG_PATH, "[]\n", "utf8");
  }
}

async function readLog(): Promise<ContactLogEntry[]> {
  try {
    const raw = await fs.readFile(LOG_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function logContactSubmission(
  payload: ContactPayload,
  meta: {
    email_sent: boolean;
    mode: string;
    error_message: string | null;
    user_agent?: string;
    ip?: string;
  },
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    await ensureLogFile();
    const entries = await readLog();
    const entry: ContactLogEntry = {
      submitted_at: new Date().toISOString(),
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      details: payload.details,
      message: payload.message,
      email_sent: meta.email_sent,
      mode: meta.mode,
      error_message: meta.error_message,
      user_agent: meta.user_agent,
      ip: meta.ip,
    };
    entries.push(entry);
    await fs.writeFile(LOG_PATH, JSON.stringify(entries, null, 2) + "\n", "utf8");
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
