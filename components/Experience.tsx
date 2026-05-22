"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, ExternalLink, Github, FileText, Image as ImageIcon } from "lucide-react";

export default function Experience() {
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

              {/* WEBSITE SCREENSHOT BOX */}
              {exp.image ? (
                <div className="rounded-xl overflow-hidden border border-white/8 mt-1 relative">
                  <img
                    src={exp.image}
                    alt={`${exp.org} website screenshot`}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    style={{ maxHeight: "220px", objectPosition: "top" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none rounded-xl"
                    style={{ background: `linear-gradient(to bottom, transparent 60%, ${exp.color}18 100%)` }}
                  />
                </div>
              ) : (
                <div
                  className="rounded-xl border border-white/5 h-[120px] flex flex-col items-center justify-center gap-2 mt-1"
                  style={{ background: `${exp.color}08` }}
                >
                  <ImageIcon size={22} style={{ color: `${exp.color}60` }} />
                  <p className="text-xs text-text-faint font-mono">website screenshot coming soon</p>
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

              {/* ACTION BUTTONS: Live | Code | Certificate PDF */}
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
