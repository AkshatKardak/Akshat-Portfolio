"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Calendar, Pin, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black">Projects</h2>
        <p className="text-text-muted max-w-2xl">
          Shipped products, not prototypes. Each one built end-to-end and deployed.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project: Project, index: number) => (
          <motion.article
            key={`${project.title}-${index}`}
            variants={item}
            whileHover={{ y: -4 }}
            className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
          >
            <div className="p-6 flex flex-col gap-5">

              {/* TOP ROW */}
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-text leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-text-faint">
                  {project.date && (
                    <div className="flex items-center gap-1 text-xs font-mono">
                      <Calendar size={12} />
                      {project.date}
                    </div>
                  )}
                  {project.featured && <Pin size={14} />}
                </div>
              </div>

              {/* TECH HIGHLIGHT (LIKE REFERENCE CARD BADGE LINE) */}
              <p
                className="text-sm font-semibold -mt-2"
                style={{ color: project.color }}
              >
                {project.tech.join(" • ")}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border transition-all duration-200 group-hover:scale-105"
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

              {/* DESCRIPTION / BULLETS */}
              <ul className="flex flex-col gap-2 text-sm text-text-muted leading-relaxed">
                {project.bullets.map((point: string, i: number) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* SCREENSHOT (CLEANER LIKE REFERENCE) */}
              {project.image && (
                <div className="rounded-xl overflow-hidden border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[200px] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              )}

              {/* ACTION BUTTONS (NEW - matches reference feel) */}
              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>

              {/* IMPACT BOX */}
              {project.impact && (
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    background: `${project.color}08`,
                    borderColor: `${project.color}25`,
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase mb-1"
                    style={{ color: project.color }}
                  >
                    Key Impact
                  </p>
                  <p className="text-sm text-text-muted">
                    {project.impact}
                  </p>
                </div>
              )}

            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}