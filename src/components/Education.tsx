"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const education = [
  {
    institution: "UNIFIP — Centro Universitário de Patos",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2024 — 2026",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    institution: "FERA Colégio e Curso de Patos",
    degree: "Ensino Médio",
    period: "2021 — 2023",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

export default function Education() {
  return (
    <section id="educacao" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="// educação" title="Formação Acadêmica" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 bg-surface border border-border rounded-sm hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/3 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/5 transition-colors duration-700" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent">{edu.icon}</span>
                  <span className="font-mono text-xs text-muted tracking-wider bg-surface-light px-3 py-1 rounded-sm">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted font-light">
                  {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
