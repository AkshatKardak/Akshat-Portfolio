"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar } from "lucide-react";

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
          A timeline of roles and builds that shaped how I think about products and systems.
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

              {/* BULLETS — diamond to match projects */}
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

            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
