"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Back-End",
    icon: "{ }",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 85 },
      { name: "APIs REST", level: 80 },
      { name: "Celery", level: 65 },
      { name: "TypeScript", level: 70 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Front-End",
    icon: "</>",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "React Native", level: 55 },
    ],
  },
  {
    title: "Banco de Dados",
    icon: "DB",
    skills: [
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Ferramentas",
    icon: ">>",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Figma", level: 60 },
      { name: "Trello", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="// competências" title="Tech Stack" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-8 bg-background border border-border rounded-sm hover:border-accent/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-accent text-sm bg-accent/10 px-3 py-1.5 rounded-sm">
                  {category.icon}
                </span>
                <h3 className="text-lg font-medium tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-accent/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[2px] bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + i * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
