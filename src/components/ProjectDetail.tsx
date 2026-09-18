"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-mono"
          >
            &larr; Voltar aos projetos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <span className="font-mono text-xs text-accent tracking-[0.3em]">
            PROJETO {project.number}
          </span>
          <h1 className="text-3xl sm:text-5xl font-light mt-3 mb-6 line-decoration">
            {project.title}
          </h1>
          <p className="text-muted leading-relaxed font-light text-lg">
            {project.overview}
          </p>

          <div className="mt-10">
            <ProjectCarousel
              images={project.images}
              title={project.title}
              sizes="(min-width: 768px) 768px, 100vw"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group/link"
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
                    strokeWidth={1.5}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Ver ao Vivo
                <span className="inline-block transition-transform group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Código
            </a>
          </div>
        </motion.div>

        <div className="mt-20 space-y-10">
          <span className="font-mono text-xs text-accent tracking-[0.4em] uppercase">
            {"// arquitetura"}
          </span>

          {project.architecture.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="border-l border-border pl-6"
            >
              <h2 className="text-xl font-light mb-2 text-foreground">
                {section.heading}
              </h2>
              <p className="text-muted leading-relaxed font-light">
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
