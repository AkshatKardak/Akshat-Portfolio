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
    hidden: { opacity: 0, y: 16 },
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
        <h2 className="text-3xl font-black tracking-normal">Experience</h2>
        <p className="text-text-muted max-w-2xl">
          A timeline of roles and builds that shaped how I think about products and systems.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, index) => (
          <motion.article
            key={`${exp.role}-${index}`}
            variants={item}
            className="glass-card rounded-2xl border border-white/5 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">

              {/* Row 1: Role + Date */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-text leading-tight">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1.5 shrink-0 text-text-faint text-xs font-mono whitespace-nowrap">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Row 2: Company name */}
              <p
                className="text-sm font-bold -mt-2"
                style={{ color: exp.color }}
              >
                {exp.org}
              </p>

              {/* Row 3: Tech tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      borderColor: `${exp.color}40`,
                      color: exp.color,
                      background: `${exp.color}0f`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Row 4: Bullet points */}
              <ul className="flex flex-col gap-2.5">
                {exp.bullets?.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: exp.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Row 5: Key Impact box */}
              {exp.impact && (
                <div
                  className="rounded-xl p-4 border mt-1"
                  style={{
                    background: `${exp.color}08`,
                    borderColor: `${exp.color}25`,
                  }}
                >
                  <p
                    className="text-xs font-bold mb-1.5 uppercase tracking-wider"
                    style={{ color: exp.color }}
                  >
                    Key Impact
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {exp.impact}
                  </p>
                </div>
              )}

            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}