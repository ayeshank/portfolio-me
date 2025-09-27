"use client";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "./anim";

export function Section({
  id,
  title,
  children,
}: PropsWithChildren<{ id: string; title?: string }>) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <motion.h2
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
            variants={fadeInUp(10)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          className="mt-8"
          variants={fadeInUp(14)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function Card({
  className = "",
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
      transition={{ type: "spring", stiffness: 250, damping: 22 }}
      className={`rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

// export function Card({
//   className = "",
//   children,
// }: PropsWithChildren<{ className?: string }>) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.98 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       whileHover={{ y: -2, scale: 1.01 }}
//       transition={{ type: "spring", stiffness: 250, damping: 22 }}
//       className={`rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl ${className}`}
//       // 👇 prevents “sparkling” by promoting to its own layer
//       style={{ willChange: "transform", backfaceVisibility: "hidden" }}
//     >
//       {children}
//     </motion.div>
//   );
// }

export function Badge({ children }: PropsWithChildren) {
  return (
    <motion.span
      whileHover={{ scale: 1.03 }}
      className="inline-flex items-center rounded-full border border-emerald-400/30 px-2 py-0.5 text-xs text-emerald-300"
    >
      {children}
    </motion.span>
  );
}
