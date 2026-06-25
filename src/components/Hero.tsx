"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/3 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-background)_70%)]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mb-8 relative w-32 h-32 sm:w-40 sm:h-40"
          >
            <div className="absolute -inset-1 bg-linear-to-br from-accent via-accent-light to-accent rounded-full opacity-60 blur-sm" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30">
              <Image
                src="/foto.jpg"
                alt="José Cicero Da Silva Neto"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-accent font-mono text-xs uppercase tracking-[0.5em] mb-6"
          >
            Desenvolvedor Full Stack
          </motion.p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              José Cicero
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-gradient font-medium"
            >
              Da Silva Neto
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-muted text-lg sm:text-xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            Transformando ideias em produtos web reais com
            <span className="text-foreground"> Django</span>,
            <span className="text-foreground"> React</span> e
            <span className="text-foreground"> Next.js</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projetos"
              className="group relative px-8 py-3.5 bg-accent text-background font-medium text-sm tracking-wide rounded-sm overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-accent-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="/curriculo.pdf"
              download
              className="group flex items-center justify-center gap-2 px-8 py-3.5 border border-accent text-accent font-medium text-sm tracking-wide rounded-sm hover:bg-accent hover:text-background transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Baixar Currículo
            </a>
            <a
              href="#contato"
              className="px-8 py-3.5 border border-border text-foreground font-medium text-sm tracking-wide rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-linear-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
