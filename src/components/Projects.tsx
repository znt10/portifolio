"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "MatchCarreira",
    description:
      "Plataforma de recrutamento que conecta candidatos e empresas. Cadastro de vagas, perfis profissionais e autenticação JWT.",
    tech: ["Next.js", "React", "Tailwind CSS", "API Routes", "JWT"],
    live: "https://nextjs-fullstack-rosy.vercel.app",
    github: "https://github.com/znt10/matchcarreira",
    image: "/projects/matchcarreira.png",
    number: "01",
  },
  {
    title: "Unistock",
    description:
      "Sistema web de gerenciamento de estoque, produtos e pedidos. Arquitetura separada com frontend e backend independentes.",
    tech: ["Next.js", "React", "Tailwind CSS", "Django REST", "Python"],
    live: "https://5-periodo.vercel.app",
    github: "https://github.com/znt10/Unistock_Front",
    image: "/projects/unistock.png",
    number: "02",
  },
  {
    title: "Site de Nenêm",
    description:
      "Site personalizado desenvolvido com HTML, hospedado na Vercel.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://site-de-nenem.vercel.app",
    github: "https://github.com/znt10/Site-de-nenem",
    image: "/projects/site-nenem.png",
    number: "03",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="// projetos" title="Trabalhos em Destaque" />

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] rounded-sm overflow-hidden border border-border group-hover:border-accent/40 transition-all duration-700"
                  >
                    <Image
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-all duration-500" />

                    <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/20 group-hover:border-accent/60 transition-colors duration-500" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-white/20 group-hover:border-accent/60 transition-colors duration-500" />

                    <div className="absolute bottom-4 left-4 font-mono text-xs text-white/50 tracking-[0.3em]">
                      {project.number}
                    </div>
                  </a>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="font-mono text-xs text-accent tracking-[0.3em]">
                    PROJETO {project.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light mt-2 mb-4 group-hover:text-accent transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
