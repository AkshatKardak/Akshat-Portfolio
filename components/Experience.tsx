"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
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
    transition: { staggerChildren: 0.045, delayChildren: 0.18 },
  },
};

export default function Experience() {
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
          <Briefcase size={26} className="text-accent shrink-0" />
          Experience
        </h2>
        <p className="text-muted" style={{ maxWidth: "52ch" }}>
          A timeline of roles, projects, and milestones that shaped how I build
          products and think through real engineering problems.
        </p>
      </motion.div>

      {/* ── Timeline wrapper ── */}
      <div className="relative pl-5 ml-2 md:pl-10 md:ml-4">
        {/* ── Vertical line ── */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        <motion.div
          className="flex flex-col gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.role}-${index}`}
                variants={cardVariant}
                className="glass-card accent-card accent-card-experience group relative overflow-hidden min-w-0 h-full p-7 md:p-8"
                whileHover={{ y: -5, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const } }}
              >
              {/* ── Timeline dot ── */}
              <div
                className="absolute -left-[2.1rem] md:-left-[3.1rem] top-7 w-3 h-3 rounded-full border-2 border-[var(--bg)] z-10 shrink-0"
                style={{
                  backgroundColor: exp.color,
                  boxShadow: `0 0 12px ${exp.color}88`,
                }}
              />

              {/* ── Ambient corner glow on hover ── */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.09] transition-opacity duration-700"
                style={{ backgroundColor: exp.color }}
              />

              {/* ── Card head ── */}
              <div className="stack-card-head mb-6">
                <div className="flex min-w-0 flex-col gap-1.5">
                  {/* ── Role ── */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: exp.color,
                        boxShadow: `0 0 10px ${exp.color}88`,
                      }}
                    />
                    <h3 className="stack-card-title break-words group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                  </div>

                  {/* ── Org ── */}
                  <p
                    className="text-sm font-semibold pl-[1.125rem]"
                    style={{ color: exp.color }}
                  >
                    {exp.org}
                  </p>
                </div>

                {/* ── Period badge ── */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span
                    className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] font-bold px-2.5 py-1 rounded-full border shrink-0"
                    style={{
                      color: exp.color,
                      borderColor: `${exp.color}33`,
                      background: `${exp.color}12`,
                    }}
                  >
                    {exp.period}
                  </span>
                  {exp.duration && (
                    <span className="text-[10px] font-mono text-muted uppercase tracking-[0.18em]">
                      {exp.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* ── Description ── */}
              {exp.description && (
                <p className="stack-card-body break-words max-w-[64ch]">{exp.description}</p>
              )}

              {/* ── Tags ── */}
              <motion.div
                className="stack-card-tags min-w-0"
                variants={tagContainer}
              >
                {exp.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={tagVariant}
                    className="skill-pill min-w-0"
                    whileHover={{
                      borderColor: `${exp.color}55`,
                      color: "var(--text)",
                      backgroundColor: `${exp.color}10`,
                    }}
                    transition={{ duration: 0.18 }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                      style={{ backgroundColor: exp.color }}
                    />
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* ── Footer ── */}
              <div className="stack-card-footer">
                <p className="stack-card-meta">Shipped in production builds</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
