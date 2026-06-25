"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <p className="font-mono text-xs text-accent tracking-[0.4em] uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-light tracking-tight line-decoration">
        {title}
      </h2>
    </motion.div>
  );
}
