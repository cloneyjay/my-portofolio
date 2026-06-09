"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionReveal({
  children,
  className,
  id,
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}
