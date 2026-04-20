"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { ExternalLink, Github, Layers, Lock, Star } from "lucide-react";

type Category = "all" | Project["category"];

const FILTERS: Array<{ label: string; value: Category }> = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "AI", value: "ai" },
  { label: "Mobile", value: "mobile" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="glass-card accent-card accent-card-project group relative flex min-w-0 h-full flex-col overflow-hidden border border-white/5"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm">
          <Star size={10} style={{ color: project.color }} fill={project.color} />
          <span style={{ color: project.color }}>Featured</span>
        </div>
      )}

      <div
        className="absolute -inset-px rounded-[inherit] opacity-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at 50% 0%, ${project.color}18, transparent 70%)`,
        }}
      />

      <div className="w-full">
        {project.images.length > 0 ? (
          <div className="relative h-56 w-full overflow-hidden md:h-60">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[0]}
                src={project.images[0]}
                alt={project.title}
                className="h-full w-full object-cover object-top"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ) : (
          <div
            className="flex h-56 items-center justify-center md:h-60"
            style={{ background: `${project.color}14` }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-text-faint">
              No Preview
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: project.color,
                boxShadow: `0 0 8px ${project.color}`,
              }}
            />
            <span
              className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: project.color }}
            >
              {project.category === "fullstack" ? "Full Stack" : project.category}
            </span>
          </div>

          <h3 className="break-words font-display text-xl font-black leading-tight text-text transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          <p className="mt-1 text-sm font-semibold text-text-muted">{project.tagline}</p>
        </div>

        <p className="max-w-[62ch] flex-1 break-words text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-2.5 py-1 text-[11px] font-mono font-medium"
              style={{
                background: `${project.color}10`,
                borderColor: `${project.color}28`,
                color: "var(--text-muted, #9ca3af)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 border-t border-white/6 pt-5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: project.color }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-text-faint">
              <Lock size={13} />
              Private / WIP
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              <Github size={15} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight">
          <Layers className="text-accent" />
          Projects
        </h2>
        <p className="max-w-2xl text-text-muted">
          Production-grade applications I have designed, built, and shipped - not just toy demos.
        </p>
      </motion.div>

      <motion.div
        className="mb-9 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        {FILTERS.map((filter) => {
          const active = filter.value === activeFilter;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className="rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200"
              style={
                active
                  ? {
                      background: "var(--accent)",
                      borderColor: "var(--accent)",
                      color: "#0a0a0a",
                    }
                  : {
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                      color: "var(--text-muted, #9ca3af)",
                    }
              }
            >
              {filter.label}
            </button>
          );
        })}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center text-text-muted"
        >
          No projects in this category yet.
        </motion.div>
      )}
    </section>
  );
}
