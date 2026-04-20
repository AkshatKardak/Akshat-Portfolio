"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Calendar, BadgeCheck, ExternalLink } from "lucide-react";

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
    <section className="section w-full">
      {/* Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black">Certifications</h2>
        <p className="text-text-muted max-w-2xl">
          Verified credentials from structured programs that strengthened my engineering foundation.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-col gap-5"
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
            className="group glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
          >
            <div className="p-6 flex flex-col gap-5">

              {/* TOP ROW */}
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-text leading-tight">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-text-faint text-xs font-mono">
                  {cert.year && (
                    <>
                      <Calendar size={12} />
                      {cert.year}
                    </>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      className="hover:text-text"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
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
                <ul className="flex flex-col gap-2 text-sm text-text-muted">
                  <li className="flex gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: cert.color }}
                    />
                    {cert.description}
                  </li>
                </ul>
              )}

              {/* VERIFIED BOX */}
              <div
                className="rounded-xl p-4 border flex items-start gap-2"
                style={{
                  background: `${cert.color}08`,
                  borderColor: `${cert.color}25`,
                }}
              >
                <BadgeCheck
                  size={16}
                  style={{ color: cert.color }}
                  className="mt-0.5"
                />
                <div>
                  <p
                    className="text-xs font-bold uppercase"
                    style={{ color: cert.color }}
                  >
                    Verified Credential
                  </p>
                  <p className="text-sm text-text-muted">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>

            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}