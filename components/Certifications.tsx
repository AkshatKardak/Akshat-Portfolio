"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award, CheckCircle2, ArrowUpRight, Eye } from "lucide-react";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<(typeof certifications)[number] | null>(null);

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
          <Award className="text-accent" />
          Certifications
        </h2>
        <p className="text-text-muted">Validated expertise through professional certifications and academic achievements.</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={item}
            className={`glass-card accent-card accent-card-certs p-6 flex flex-col gap-5 group transition-all duration-300 ${index === 0 ? "featured-cert md:col-span-2 xl:col-span-1" : ""}`}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 transition-transform group-hover:scale-110"
                style={{ 
                  backgroundColor: `${cert.color}15`, 
                  border: `1px solid ${cert.color}30`,
                  color: cert.color
                }}
              >
                {cert.icon}
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest font-black" style={{ color: cert.color }}>
                  {cert.issuer}
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <CheckCircle2 size={12} className="text-success" />
                  <span className="text-[10px] font-bold text-text-faint uppercase tracking-normal">Verified Credential</span>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-display text-base font-bold text-text leading-tight mb-2 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {cert.tags.map((tag) => (
                <span key={tag} className="tag text-[10px] group-hover:bg-white/10 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mt-2 transition-all hover:gap-2"
                style={{ color: cert.color }}
              >
                View Certificate <ArrowUpRight size={14} />
              </a>
            )}

            <button
              type="button"
              onClick={() => setActiveCert(cert)}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mt-2 transition-all hover:gap-2"
              style={{ color: cert.color }}
            >
              <Eye size={14} />
              Click to View
            </button>
          </motion.div>
        ))}
      </motion.div>

      {activeCert && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${activeCert.title} preview`} onClick={() => setActiveCert(null)}>
          <div className="certificate-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="certificate-modal-head">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-text-faint">Certificate Preview</p>
                <h3 className="mt-2 text-xl font-bold text-text">{activeCert.title}</h3>
                <p className="text-sm text-text-muted">{activeCert.issuer}</p>
              </div>
              <button type="button" className="certificate-modal-close" onClick={() => setActiveCert(null)} aria-label="Close preview">
                ×
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
