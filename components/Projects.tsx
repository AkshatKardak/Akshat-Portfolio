"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Pin, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="section w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black tracking-normal">Projects</h2>
        <p className="text-text-muted max-w-2xl">
          Shipped products, not prototypes. Each one built end-to-end and
          deployed.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project: Project, index: number) => (
          <motion.article
            key={`${project.title}-${index}`}
            variants={item}
            className="glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col"
          >
            <div className="p-6 flex flex-col gap-4 flex-1">

              {/* Title + icons */}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-text leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.featured && (
                    <span className="text-text-faint">
                      <Pin size={15} />
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-faint hover:text-text transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-faint hover:text-text transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Date */}
              {project.date && (
                <p className="text-xs text-text-faint font-mono -mt-2">
                  {project.date}
                </p>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      borderColor: `${project.color}40`,
                      color: project.color,
                      background: `${project.color}0f`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {project.bullets.map((point: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-muted leading-relaxed"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Key Impact */}
              {project.impact && (
                <div
                  className="rounded-xl p-4 border mt-1"
                  style={{
                    background: `${project.color}08`,
                    borderColor: `${project.color}25`,
                  }}
                >
                  <p
                    className="text-xs font-bold mb-1.5 uppercase tracking-wider"
                    style={{ color: project.color }}
                  >
                    Key Impact
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              )}

            </div>

            {/* Screenshot image */}
            {project.image && (
              <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-white/5">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full object-cover"
                  loading="lazy"
                  width={600}
                  height={340}
                />
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}