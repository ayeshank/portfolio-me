// components/Contact.tsx
"use client";
import { FormEvent, useState } from "react";
import { Section, Card } from "./_ui";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <Section id="contact" title="Contact">
      <Card className="p-6">
        <p className="text-zinc-300">
          Want to collaborate, hire, or just say hi? Reach out and I’ll respond
          soon.
        </p>
        <form onSubmit={onSubmit} className="mt-4 grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-300">Subject</span>
            <input
              required
              name="subject"
              className="rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 text-white"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-300">Email</span>
            <input
              required
              type="email"
              name="email"
              className="rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 text-white"
            />
          </label>
          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className="text-sm text-zinc-300">Message</span>
            <textarea
              required
              rows={5}
              name="message"
              className="rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 text-white"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black shadow hover:shadow-emerald-400/20"
            >
              Send
            </button>
            {status === "ok" && (
              <span className="ml-3 text-emerald-300 text-sm">
                Message sent!
              </span>
            )}
            {status === "err" && (
              <span className="ml-3 text-red-400 text-sm">
                Failed to send. Please try again.
              </span>
            )}
          </div>
        </form>
      </Card>
    </Section>
  );
}
