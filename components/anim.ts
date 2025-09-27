// components/anim.ts
import { Variants, Transition } from "framer-motion";

export const spring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};
export const swift: Transition = { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

export const fadeInUp = (offset = 16): Variants => ({
  hidden: { opacity: 0, y: offset },
  show: { opacity: 1, y: 0, transition: swift },
});

export const fadeIn = (d = 0): Variants => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ...swift, delay: d } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: spring },
};

export const slideX = (dir: "l" | "r" = "l", dist = 24): Variants => ({
  hidden: { opacity: 0, x: dir === "l" ? -dist : dist },
  show: { opacity: 1, x: 0, transition: swift },
});

export const stagger = (
  staggerChildren = 0.07,
  delayChildren = 0.05
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

// micro-interactions
export const hoverPop = { scale: 1.02, translateY: -2 };
export const tapSoft = { scale: 0.98 };
