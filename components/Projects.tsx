"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Code, Lock } from "lucide-react";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="section w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black tracking-normal flex items-center gap-3">
          <Code className="text-accent" />
          Featured Work
        </h2>
        <p className="text-text-muted">A collection of real-world applications and experiments built with modern tech stacks.</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="glass-card p-7 md:p-8 min-h-[330px] flex flex-col gap-5 group hover:border-accent/30 transition-all duration-500"
            whileHover={{ y: -6, scale: 1.02, rotateX: 1.2, rotateY: -1.2 }}
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-widest text-text-faint font-mono">
                  {project.subtitle}
                </span>
              </div>
              <span
                className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full whitespace-nowrap border"
                style={{
                  color: project.badgeColor,
                  backgroundColor: `${project.badgeColor}15`,
                  borderColor: `${project.badgeColor}30`
                }}
              >
                {project.badge}
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tag group-hover:bg-white/10 transition-colors">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4 pt-5 border-t border-border flex-wrap mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-text-muted hover:text-text transition-colors"
              >
                <Github size={14} /> Source
              </a>

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-xs font-bold text-text-faint px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                  <Lock size={13} /> Private / WIP
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
