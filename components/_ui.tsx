// components/_ui.tsx
import { PropsWithChildren } from "react";

export function Section({
  id,
  title,
  children,
}: PropsWithChildren<{ id: string; title?: string }>) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function Card({
  className = "",
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-400/30 px-2 py-0.5 text-xs text-emerald-300">
      {children}
    </span>
  );
}
