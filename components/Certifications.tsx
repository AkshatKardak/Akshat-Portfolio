"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/lib/data";
import { Calendar, BadgeCheck, FileText, Image as ImageIcon, X, ZoomIn } from "lucide-react";

export default function Certifications() {
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
                alt="Certificate"
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
        <h2 className="text-3xl font-black">Certifications</h2>
        <p className="text-text-muted max-w-2xl">
          Industry-recognised credentials from Vidyalankar, Forage, and Simplilearn — each backed by real project work and hands-on assessments.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.article
            key={`${cert.title}-${index}`}
            variants={item}
            whileHover={{ y: -4 }}
            className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex flex-col gap-4 flex-1">

              {/* TOP ROW — no credential URL link */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-text leading-tight">
                  {cert.title}
                </h3>
                {cert.year && (
                  <div className="flex items-center gap-1 text-xs font-mono text-text-faint">
                    <Calendar size={11} />
                    {cert.year}
                  </div>
                )}
              </div>

              {/* ISSUER */}
              <p className="text-sm font-semibold -mt-2" style={{ color: cert.color }}>
                {cert.issuer}
              </p>

              {/* TAGS */}
              {cert.tags && (
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border transition-all duration-200 group-hover:scale-105"
                      style={{
                        borderColor: `${cert.color}40`,
                        color: cert.color,
                        background: `${cert.color}0f`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* DESCRIPTION */}
              {cert.description && (
                <ul className="flex flex-col gap-2 text-sm text-text-muted leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: cert.color }}
                    />
                    {cert.description}
                  </li>
                </ul>
              )}

              {/* CERTIFICATE IMAGE — click to open lightbox */}
              {cert.image ? (
                <div
                  className="rounded-xl overflow-hidden border border-white/5 mt-1 relative cursor-zoom-in"
                  onClick={() => setLightbox(cert.image!)}
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    style={{ height: "220px", objectPosition: "top" }}
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
                  className="rounded-xl border border-white/5 mt-1 h-[140px] flex items-center justify-center"
                  style={{ background: `${cert.color}08` }}
                >
                  <p className="text-xs text-text-faint font-mono">certificate image coming soon</p>
                </div>
              )}

              {/* ACTION BUTTON — only PDF, no credential URL */}
              {cert.pdfUrl && (
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      borderColor: `${cert.color}40`,
                      color: cert.color,
                      background: `${cert.color}0f`,
                    }}
                  >
                    <FileText size={13} />
                    View PDF
                  </a>
                </div>
              )}

              {/* VERIFIED BOX */}
              <div
                className="rounded-xl p-4 border flex items-start gap-2"
                style={{
                  background: `${cert.color}08`,
                  borderColor: `${cert.color}25`,
                }}
              >
                <BadgeCheck size={16} style={{ color: cert.color }} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: cert.color }}>
                    Verified Credential
                  </p>
                  <p className="text-sm text-text-muted">Issued by {cert.issuer}</p>
                </div>
              </div>

            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
