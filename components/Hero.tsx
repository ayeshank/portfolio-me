// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";
import { Section } from "./_ui";

export default function Hero() {
  const a = portfolio.about;
  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="./images/DP1.png"
          alt="Profile"
          className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-zinc-400">I AM A</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight">
            <span className="text-emerald-400">{a.headline}</span>
            <span className="text-emerald-400">.</span>
          </h1>
          <p className="mt-4 text-zinc-300 leading-7">{a.blurb}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={a.ctas.hireMe}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black shadow hover:shadow-emerald-400/20"
            >
              Hire Me
            </a>
            <a
              href={a.ctas.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-emerald-400 px-5 py-2.5 text-sm font-semibold text-emerald-300"
            >
              Resume
            </a>
          </div>

          <div className="mt-6 flex gap-4">
            {a.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white underline-offset-4 hover:underline"
                aria-label={s.label}
                title={s.label}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
