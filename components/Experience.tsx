"use client";

import { useMemo, useRef, useState } from "react";
import portfolio from "../data/portfolio";
import { Section } from "./_ui";
import { AnimatePresence, motion } from "framer-motion";

type Item =
  | { kind: "exp"; title: string; dateLabel: string; bullets: string[] }
  | {
      kind: "proj";
      title: string;
      dateLabel: string;
      desc: string;
      tags?: string[];
      repo?: string;
      images?: string[];
    };

export default function Experience() {
  const timeline = useMemo<Item[]>(() => {
    const monthIdx: Record<string, number> = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    };
    const parseMMMYYYY = (s: string) => {
      const m = s
        .trim()
        .toLowerCase()
        .match(/^([a-z]{3})\s+(\d{4})$/);
      if (!m) return Number.POSITIVE_INFINITY;
      const mi = monthIdx[m[1]];
      const yr = Number(m[2]);
      return mi == null
        ? Number.POSITIVE_INFINITY
        : new Date(yr, mi, 1).getTime();
    };

    const expItems: Item[] = portfolio.experience.map((e) => ({
      kind: "exp",
      title: e.title,
      dateLabel: e.range, // e.g., "Dec 2023 – Current"
      bullets: e.bullets,
    }));

    const sortKey = (it: Item) => {
      if (it.kind === "exp") {
        const start = it.dateLabel.split("–")[0]?.trim() || "";
        return parseMMMYYYY(start);
      }
      return parseMMMYYYY(it.dateLabel);
    };

    return [...expItems].sort((a, b) => sortKey(b) - sortKey(a));
  }, []);

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  // building appearance
  const colorFor = (k: Item["kind"]) =>
    k === "exp"
      ? {
          base: "from-emerald-500/50 to-emerald-700/60",
          ring: "ring-emerald-400/15",
        }
      : { base: "from-sky-500/50 to-sky-700/60", ring: "ring-sky-400/15" };

  const heightFor = (it: Item) => {
    const base = it.kind === "exp" ? 140 : 120;
    const bonus =
      it.kind === "exp"
        ? Math.min(12, it.bullets?.length ?? 0) * 16
        : (it.tags?.length ?? 0) * 10 + (it.images?.length ?? 0) * 6;
    return Math.max(120, Math.min(420, base + bonus));
  };

  return (
    <Section id="experience" title="Experience">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        {/* Night sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950 via-zinc-950 to-black" />
        {/* Subtle stars */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6), transparent 60%),radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.5), transparent 60%),radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.5), transparent 60%),radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.5), transparent 60%)",
          }}
        />
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 to-transparent" />

        {/* Controls */}
        <div className="absolute right-3 top-3 z-20 flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            className="rounded-lg bg-zinc-900/80 px-3 py-1.5 text-white hover:bg-zinc-800"
            aria-label="Scroll left"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="rounded-lg bg-zinc-900/80 px-3 py-1.5 text-white hover:bg-zinc-800"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>

        {/* Skyline track */}
        <div
          ref={trackRef}
          className="relative z-10 flex gap-8 overflow-x-auto snap-x snap-mandatory px-8 pt-16 pb-24 scrollbar-dark"
          aria-label="Career skyline"
        >
          {timeline.map((it, idx) => {
            const c = colorFor(it.kind);
            const h = heightFor(it);
            return (
              <div
                key={idx}
                className="snap-start shrink-0 w-[120px] sm:w-[140px] md:w-[160px] relative"
              >
                {/* Rooftop label */}
                <div className="absolute -top-12 left-1/2 z-10 -translate-x-1/2 text-center w-[180px]">
                  <div className="truncate text-xs text-zinc-200">
                    {it.title}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {it.dateLabel}
                  </div>
                </div>

                {/* Building */}
                <motion.button
                  onClick={() => setOpenIdx(idx)}
                  initial={{ height: 24, opacity: 0.8 }}
                  whileInView={{ height: h, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 24,
                    delay: idx * 0.06,
                  }}
                  className={`group relative flex w-full items-end justify-stretch rounded-t-md bg-gradient-to-b ${c.base} ring-2 ${c.ring} shadow-2xl hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400`}
                  style={{ minHeight: 24 }}
                  aria-label={`Open ${it.title}`}
                >
                  {/* Windows grid (CSS background illusion) */}
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #000 1px, transparent 1px),linear-gradient(to bottom, #000 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  {/* Twinkling lights overlay */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(2px 2px at 8px 8px, rgba(255,241,118,0.9), transparent 60%)",
                      backgroundSize: "16px 16px",
                      mixBlendMode: "screen",
                      opacity: 0.7,
                    }}
                    animate={{ opacity: [0.55, 0.85, 0.65] }}
                    transition={{
                      duration: 2 + (idx % 3) * 0.5,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                  {/* Door */}
                  <div className="relative mx-auto mb-0.5 h-6 w-5 rounded-sm bg-black/50 ring-1 ring-black/40" />
                </motion.button>

                {/* Shadow on ground */}
                <div className="mx-auto mt-2 h-2 w-[70%] rounded-full bg-black/40 blur-sm" />
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="absolute left-4 bottom-4 z-20 flex gap-3 text-xs text-zinc-300">
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-sm bg-emerald-500/70" />{" "}
            Experience
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded-sm bg-sky-500/70" />{" "}
            Project
          </span>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            key="skyline-modal"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              className="relative z-[61] w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-900/90 p-6 text-zinc-200"
              initial={{ scale: 0.98, y: 6, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: -6, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const it = timeline[openIdx!];
                return (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-white font-semibold text-lg">
                        {it.title}
                      </h3>
                      <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-zinc-200">
                        {it.dateLabel}
                      </span>
                    </div>

                    {it.kind === "exp" ? (
                      <ul className="mt-4 list-disc pl-5 space-y-1">
                        {it.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-4 space-y-3">
                        <p className="text-zinc-300">{it.desc}</p>
                        {it.tags?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {it.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-emerald-400/30 px-2 py-0.5 text-xs text-emerald-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                        {it.repo && (
                          <a
                            href={it.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-emerald-300 underline hover:text-emerald-200"
                          >
                            View Repo →
                          </a>
                        )}
                        {it.images?.[0] && (
                          <img
                            src={it.images[0]}
                            alt={`${it.title} preview`}
                            className="mt-2 w-full h-56 object-cover rounded-lg border border-white/10"
                          />
                        )}
                      </div>
                    )}

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setOpenIdx(null)}
                        className="rounded-lg bg-zinc-800/80 px-4 py-2 text-white hover:bg-zinc-700"
                      >
                        Close
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
