"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Calendar, BadgeCheck, ExternalLink, Link, FileText } from "lucide-react";

export default function Certifications() {
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
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black">Certifications</h2>
        <p className="text-text-muted max-w-2xl">
          Industry-recognised credentials from Meta, Forage, Deloitte, and Simplilearn — each backed by real project work and hands-on assessments.
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

              {/* TOP ROW */}
              <div className="flex justify-between items-start gap-3">
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
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 mt-1 text-text-faint hover:text-text transition"
                  >
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <span className="shrink-0 mt-1 text-text-faint opacity-30">
                    <ExternalLink size={15} />
                  </span>
                )}
              </div>

              {/* ISSUER */}
              <p
                className="text-sm font-semibold -mt-2"
                style={{ color: cert.color }}
              >
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

              {/* CERTIFICATE IMAGE or placeholder */}
              {cert.image ? (
                <div className="rounded-xl overflow-hidden border border-white/5 mt-1">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[160px] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              ) : (
                <div
                  className="rounded-xl border border-white/5 mt-1 h-[120px] flex items-center justify-center"
                  style={{ background: `${cert.color}08` }}
                >
                  <p className="text-xs text-text-faint font-mono">certificate image coming soon</p>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-1">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/10 text-text-muted hover:text-text hover:border-white/30 transition"
                  >
                    <Link size={13} />
                    View Credential
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border border-white/5 text-text-faint cursor-not-allowed">
                    <Link size={13} />
                    Credential pending
                  </span>
                )}

                {cert.pdfUrl ? (
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
                ) : null}
              </div>

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
