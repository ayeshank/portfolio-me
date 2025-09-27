// components/Contact.tsx
"use client";

import { FormEvent, useRef, useState } from "react";
import { Section, Card } from "./_ui";
import emailjs from "emailjs-com";
import { environment } from "@/environment";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        environment.EMAIL_SERVICE,
        environment.EMAIL_TEMPLATE,
        formRef.current,
        environment.EMAIL_USER
      );
      setStatus("ok");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
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
        {/* 👇 Keep the same form UI; just add ref + use our onSubmit */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="mt-4 grid sm:grid-cols-2 gap-4"
        >
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-300">Subject</span>
            <input
              required
              name="subject" // <-- must match EmailJS template variable
              className="rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 text-white"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-zinc-300">Email</span>
            <input
              required
              type="email"
              name="email" // <-- must match EmailJS template variable
              className="rounded-xl bg-zinc-900 border border-white/10 px-3 py-2 text-white"
            />
          </label>
          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className="text-sm text-zinc-300">Message</span>
            <textarea
              required
              rows={5}
              name="message" // <-- must match EmailJS template variable
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
