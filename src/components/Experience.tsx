"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const responsibilities = [
  "Desenvolvimento do sistema SIGEVI (Sistema de Gestão de Eventos Institucionais)",
  "Backend com Django REST Framework, APIs REST e autenticação JWT",
  "Infraestrutura conteinerizada com Docker e Docker Compose",
  "Tarefas assíncronas com Celery e Redis",
  "Documentação de API com Swagger",
  "Configuração de múltiplos ambientes (local e produção)",
  "Integração entre frontend e backend, validações e regras de negócio",
  "Desenvolvimento do fluxo de aprovação, permissões e verificação de conflitos de agenda",
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-32 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="// experiência" title="Trajetória Profissional" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

          <div className="md:pl-12 relative">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-[9px] h-[9px] -translate-x-[4px] bg-accent rounded-full hidden md:block">
              <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30" />
            </div>

            <div className="p-8 lg:p-10 bg-background border border-border rounded-sm hover:border-accent/30 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    Estagiário Full Stack
                  </h3>
                  <p className="text-accent font-light">
                    Centro Universitário de Patos
                  </p>
                </div>
                <span className="font-mono text-xs text-muted tracking-wider mt-2 sm:mt-0 bg-surface-light px-4 py-2 rounded-sm">
                  MAR 2026 — MAI 2026
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-accent mt-1.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                {[
                  "Django",
                  "REST APIs",
                  "JWT",
                  "Docker",
                  "Celery",
                  "Redis",
                  "Swagger",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono text-accent/70 bg-accent/5 border border-accent/10 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
