"use client";

import { motion, type Variants } from "framer-motion";
import { certifications } from "@/lib/data";
import { BadgeCheck, ExternalLink } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const tagVariant: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const tagContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.18 },
  },
};

// Issuer → Simple Icons slug map
const ISSUER_ICONS: Record<string, string> = {
  "Simplilearn":              "simplilearn",
  "Forage":                   "forage",
  "Deloitte Australia":       "deloitte",
  "Skyscanner via Forage":    "skyscanner",
  "Coursera":                 "coursera",
  "Udemy":                    "udemy",
  "Google":                   "google",
  "Meta":                     "meta",
  "Microsoft":                "microsoft",
  "AWS":                      "amazonaws",
  "IBM":                      "ibm",
};

function IssuerLogo({ issuer, color }: { issuer: string; color: string }) {
  const slug = ISSUER_ICONS[issuer];
  if (!slug) {
    return (
      <div
        className="w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-black font-mono border shrink-0"
        style={{
          color,
          borderColor: `${color}33`,
          background: `${color}15`,
        }}
      >
        {issuer.slice(0, 2).toUpperCase()}
      </div>
    );
  }
  return (
    <div
      className="w-8 h-8 rounded-md flex items-center justify-center border shrink-0 p-1.5"
      style={{
        borderColor: `${color}33`,
        background: `${color}15`,
      }}
    >
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={issuer}
        width={20}
        height={20}
        className="w-full h-full object-contain"
        style={{ filter: "brightness(0) invert(1) opacity(0.8)" }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="section w-full">
      {/* ── Header ── */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
          <BadgeCheck size={26} className="text-accent shrink-0" />
          Certifications
        </h2>
        <p className="text-muted" style={{ maxWidth: "52ch" }}>
          Verified credentials from structured programs that deepened my
          technical and engineering foundation.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.title}
            variants={cardVariant}
            className="glass-card accent-card accent-card-certs group min-w-0 relative overflow-hidden flex flex-col h-full p-7 md:p-8"
            whileHover={{
              y: -5,
              transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
            }}
          >
            {/* ── Certificate Preview ── */}
            {cert.image && (
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            )}

            <div className="flex flex-col flex-1 gap-5">
              {/* ── Header row: icon + title + external link ── */}
              <div className="flex items-start gap-3">
                <IssuerLogo issuer={cert.issuer} color={cert.color} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="stack-card-title break-words group-hover:text-accent transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h3>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${cert.title} credential`}
                        className="p-1.5 rounded-md text-muted hover:text-text hover:bg-white/5 transition-all duration-200 shrink-0"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {/* ── Issuer + year ── */}
                  <div className="flex items-center gap-2 flex-wrap mt-1">
                    <span
                      className="text-sm font-semibold break-words"
                      style={{ color: cert.color }}
                    >
                      {cert.issuer}
                    </span>
                    {cert.year && (
                      <span className="text-[10px] font-mono text-muted bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {cert.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Verified badge ── */}
              <div className="flex items-center gap-1.5">
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: cert.color,
                    borderColor: `${cert.color}33`,
                    background: `${cert.color}12`,
                  }}
                >
                  <BadgeCheck size={11} />
                  Verified
                </div>
              </div>

              {/* ── Description ── */}
              <p className="stack-card-body break-words max-w-[64ch]">{cert.description}</p>

              {/* ── Tags ── */}
              {cert.tags.length > 0 && (
                <motion.div
                  className="stack-card-tags min-w-0"
                  variants={tagContainer}
                >
                  {cert.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariant}
                      className="skill-pill min-w-0 inline-flex items-center gap-1.5"
                      whileHover={{
                        borderColor: `${cert.color}55`,
                        color: "var(--text)",
                        backgroundColor: `${cert.color}10`,
                      }}
                      transition={{ duration: 0.18 }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                        style={{ backgroundColor: cert.color }}
                      />
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              {/* ── Footer ── */}
              <div className="stack-card-footer mt-auto">
                <p className="stack-card-meta">Issued by {cert.issuer}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
