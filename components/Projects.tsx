"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Code } from "lucide-react";

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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="glass-card stack-card min-w-0 group hover:border-accent/30 transition-all duration-500"
            whileHover={{ y: -6 }}
          >
            <div className="stack-card-head">
              <div className="stack-card-title-wrap">
                <h3 className="stack-card-title break-words group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="stack-card-meta">
                  {project.subtitle}
                </span>
              </div>
              <span
                className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full whitespace-nowrap border shrink-0"
                style={{
                  color: project.badgeColor,
                  backgroundColor: `${project.badgeColor}15`,
                  borderColor: `${project.badgeColor}30`
                }}
              >
                {project.badge}
              </span>
            </div>
            <p className="stack-card-body break-words">
              {project.description}
            </p>

            <div className="stack-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag group-hover:bg-white/10 transition-colors">{tag}</span>
              ))}
            </div>
            <div className="stack-card-footer">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-text-muted hover:text-text transition-colors"
              >
                <Github size={14} /> GitHub
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
                <span className="inline-flex items-center text-xs font-bold text-text-faint">
                  Deployment coming soon
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
