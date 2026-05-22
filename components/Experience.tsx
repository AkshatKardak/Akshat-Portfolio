"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, ExternalLink, Github, FileText, Image as ImageIcon, X, ZoomIn } from "lucide-react";

export default function Experience() {
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
                alt="Preview"
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
        <h2 className="text-3xl font-black">Experience</h2>
        <p className="text-text-muted max-w-2xl">
          Real-world internships and industry roles where I shipped production code, not just practice projects.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.article
            key={`${exp.role}-${index}`}
            variants={item}
            whileHover={{ y: -4 }}
            className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
          >
            <div className="p-6 flex flex-col gap-5">

              {/* TOP ROW */}
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-text leading-tight">{exp.role}</h3>
                <div className="flex items-center gap-1 text-text-faint text-xs font-mono">
                  <Calendar size={12} />
                  {exp.period}
                </div>
              </div>

              {/* ORG */}
              <p className="text-sm font-semibold -mt-2" style={{ color: exp.color }}>{exp.org}</p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag}
                    className="text-xs px-3 py-1 rounded-full border transition-all duration-200 group-hover:scale-105"
                    style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}0f` }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* WEBSITE SCREENSHOT — click to open lightbox */}
              {exp.image ? (
                <div
                  className="rounded-xl overflow-hidden border border-white/8 mt-1 relative cursor-zoom-in"
                  onClick={() => setLightbox(exp.image!)}
                  title="Click to view full image"
                >
                  <img
                    src={exp.image}
                    alt={`${exp.org} screenshot`}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    style={{ height: "300px", objectPosition: "top" }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl"
                    style={{ background: `linear-gradient(to bottom, transparent 60%, ${exp.color}18 100%)` }}
                  />
                  {/* Zoom hint badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(10,9,7,0.75)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 999,
                      padding: "3px 10px 3px 7px",
                      fontSize: "0.68rem",
                      color: "#94a3b8",
                      fontFamily: "monospace",
                      pointerEvents: "none",
                    }}
                  >
                    <ZoomIn size={11} />
                    click to expand
                  </div>
                </div>
              ) : (
                <div
                  className="rounded-xl border border-white/5 h-[140px] flex flex-col items-center justify-center gap-2 mt-1"
                  style={{ background: `${exp.color}08` }}
                >
                  <ImageIcon size={22} style={{ color: `${exp.color}60` }} />
                  <p className="text-xs text-text-faint font-mono">screenshot coming soon</p>
                </div>
              )}

              {/* BULLETS */}
              <ul className="flex flex-col gap-2 text-sm text-text-muted leading-relaxed">
                {exp.bullets?.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 mt-[3px] text-[10px] leading-none" style={{ color: exp.color }}>◆</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* IMPACT */}
              {exp.impact && (
                <div className="rounded-xl p-4 border"
                  style={{ background: `${exp.color}08`, borderColor: `${exp.color}25` }}>
                  <p className="text-xs font-bold uppercase mb-1" style={{ color: exp.color }}>Key Impact</p>
                  <p className="text-sm text-text-muted">{exp.impact}</p>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-1">
                {exp.liveUrl ? (
                  <a
                    href={exp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-[1.03]"
                    style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}0f` }}
                  >
                    <ExternalLink size={13} />
                    Live
                  </a>
                ) : null}

                {exp.codeUrl ? (
                  <a
                    href={exp.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/10 text-text-muted hover:text-text hover:border-white/30 transition-all duration-200 hover:scale-[1.03]"
                  >
                    <Github size={13} />
                    Code
                  </a>
                ) : null}

                {exp.certificateUrl ? (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-[1.03]"
                    style={{ borderColor: "rgba(255,255,255,0.15)", color: "#e2e8f0", background: "rgba(255,255,255,0.04)" }}
                  >
                    <FileText size={13} />
                    Certificate PDF
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/5 text-text-faint cursor-not-allowed">
                    <FileText size={13} />
                    Certificate pending
                  </span>
                )}
              </div>

            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
