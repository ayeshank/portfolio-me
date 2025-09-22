// components/Blogs.tsx
"use client";

import { useRef } from "react";
import portfolio from "@/data/portfolio";
import { Section, Card } from "./_ui";

export default function Blogs() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9; // slide ~1 viewport
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <Section id="blogs" title="Writing">
      <div className="relative">
        {/* Track */}
        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 px-1 py-1 no-scrollbar"
          aria-label="Blog posts carousel"
        >
          {portfolio.blogs.map((b) => (
            <a
              key={b.url}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[33%] focus:outline-none"
            >
              <Card className="overflow-hidden">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 bg-zinc-800" />
                )}
                <div className="p-5">
                  <h3 className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">Read on Medium →</p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Controls */}
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white w-9 h-9 flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white w-9 h-9 flex items-center justify-center hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          ›
        </button>
      </div>

      {/* Optional tip: hide native scrollbar with custom CSS if you like */}
      {/* Add this to globals.css if desired:
        .no-scrollbar::-webkit-scrollbar{ display:none }
        .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none }
        Then add 'no-scrollbar' to the scroller div className.
      */}
    </Section>
  );
}
