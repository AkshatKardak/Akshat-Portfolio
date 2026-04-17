"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award, Eye } from "lucide-react";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<(typeof certifications)[number] | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
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
        <h2 className="text-3xl font-black tracking-normal flex items-center gap-3">
          <Award className="text-accent" />
          Certifications
        </h2>
        <p className="text-text-muted">
          Validated expertise through professional certifications and academic achievements.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.title}
            variants={item}
            className="glass-card accent-card accent-card-certs stack-card min-w-0 group relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="stack-card-head">
              <div className="stack-card-title-wrap">
                <h3 className="stack-card-title break-words group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="stack-card-meta break-words" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
              </div>

              <span
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] border shrink-0"
                style={{
                  color: cert.color,
                  borderColor: `${cert.color}44`,
                  background: `${cert.color}18`,
                }}
              >
                {cert.year ?? "Certified"}
              </span>
            </div>

            <p className="stack-card-body break-words">{cert.description}</p>

            <div className="stack-card-tags">
              {cert.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="stack-card-footer">
              <button
                type="button"
                onClick={() => setActiveCert(cert)}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all hover:gap-3"
                style={{ color: cert.color }}
              >
                <Eye size={14} />
                View Credential
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {activeCert && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCert.title} preview`}
          onClick={() => setActiveCert(null)}
        >
          <div className="certificate-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="certificate-modal-head">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-text-faint">Certificate Preview</p>
                <h3 className="mt-2 text-xl font-bold text-text">{activeCert.title}</h3>
                <p className="text-sm text-text-muted">{activeCert.issuer}</p>
              </div>
              <button
                type="button"
                className="certificate-modal-close"
                onClick={() => setActiveCert(null)}
                aria-label="Close preview"
              >
                Close
              </button>
            </div>

            {activeCert.credentialUrl ? (
              <div className="certificate-modal-frame">
                {activeCert.credentialUrl.match(/\.(png|jpg|jpeg|webp|gif)$/i) ? (
                  <img src={activeCert.credentialUrl} alt={activeCert.title} />
                ) : (
                  <iframe title={activeCert.title} src={activeCert.credentialUrl} />
                )}
              </div>
            ) : (
              <div className="certificate-modal-empty">
                <p className="text-sm text-text-muted">
                  Certificate file not linked yet. Drop the PDF or image into the project and connect it here, and this viewer will open it directly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
