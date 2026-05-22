"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Calendar, Pin, Github, ExternalLink, Globe, X, ZoomIn } from "lucide-react";

export default function Projects() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.88)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              cursor: "zoom-out",
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", maxWidth: "90vw", maxHeight: "88vh" }}
            >
              <img
                src={lightbox}
                alt="Project preview"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "84vh",
                  borderRadius: "16px",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
                  display: "block",
                  objectFit: "contain",
                }}
              />
              <button
                aria-label="Close image preview"
                onClick={() => setLightbox(null)}
                style={{
                  position: "absolute",
                  top: "-14px",
                  right: "-14px",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(30,28,24,0.95)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#e2e8f0",
                }}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex flex-col gap-4 flex-1">

              {/* TOP ROW */}
              <div className="flex justify-between items-start gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-text leading-tight">{project.title}</h3>
                  {project.date && (
                    <div className="flex items-center gap-1 text-xs font-mono text-text-faint">
                      <Calendar size={11} />
                      {project.date}
                    </div>
                  )}
                </div>
                {project.featured && (
                  <span className="shrink-0 mt-1">
                    <Pin size={15} className="text-text-faint" />
                  </span>
                )}
              </div>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border transition-all duration-200 group-hover:scale-105"
                    style={{ borderColor: `${project.color}40`, color: project.color, background: `${project.color}0f` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BULLETS */}
              <ul className="flex flex-col gap-2 text-sm text-text-muted leading-relaxed">
                {project.bullets.map((point: string, i: number) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 mt-[3px] text-[10px] leading-none" style={{ color: project.color }}>◆</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* SCREENSHOT */}
              {project.image ? (
                <div
                  className="rounded-xl overflow-hidden border border-white/5 mt-1 relative cursor-zoom-in"
                  onClick={() => setLightbox(project.image!)}
                  title="Click to view full image"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    style={{ height: "280px", objectPosition: "top" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl"
                    style={{ background: `linear-gradient(to bottom, transparent 60%, ${project.color}18 100%)` }}
                  />
                  <div
                    style={{
                      position: "absolute", top: 10, right: 10,
                      display: "flex", alignItems: "center", gap: 5,
                      background: "rgba(10,9,7,0.75)", backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999,
                      padding: "3px 10px 3px 7px", fontSize: "0.68rem",
                      color: "#94a3b8", fontFamily: "monospace", pointerEvents: "none",
                    }}
                  >
                    <ZoomIn size={11} />&nbsp;click to expand
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-xl border border-dashed mt-1 h-[160px] flex flex-col items-center justify-center gap-2"
                  style={{ borderColor: `${project.color}35`, background: `${project.color}06` }}
                >
                  <span className="text-2xl" aria-hidden="true">🖼️</span>
                  <p className="text-xs font-mono" style={{ color: `${project.color}70` }}>project screenshot · coming soon</p>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 pt-1 flex-wrap">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/10 text-text-muted hover:text-text hover:border-white/30 transition">
                    <Github size={13} />Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/5 text-text-faint cursor-not-allowed">
                    <Github size={13} />Private
                  </span>
                )}
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/10 text-text-muted hover:text-text hover:border-white/30 transition">
                    <ExternalLink size={13} />Live
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/5 text-text-faint cursor-not-allowed">
                    <Globe size={13} />Deploy pending
                  </span>
                )}
              </div>

              {/* IMPACT BOX */}
              {project.impact && (
                <div className="rounded-xl p-4 border"
                  style={{ background: `${project.color}08`, borderColor: `${project.color}25` }}>
                  <p className="text-xs font-bold uppercase mb-1 tracking-wider" style={{ color: project.color }}>Key Impact</p>
                  <p className="text-sm text-text-muted">{project.impact}</p>
                </div>
              )}

            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
