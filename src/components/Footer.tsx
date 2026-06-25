"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted"
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">José Cicero</span> — Todos os direitos
          reservados
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted/50"
        >
          Feito com Next.js & Tailwind CSS
        </motion.p>
      </div>
    </footer>
  );
}
