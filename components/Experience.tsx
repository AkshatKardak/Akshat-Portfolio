"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, CalendarDays } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  return (
    <section className="section w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
          <Briefcase size={26} className="text-accent shrink-0" />
          Experience
        </h2>
        <p className="text-muted" style={{ maxWidth: "52ch" }}>
          A timeline of roles, builds, and milestones that shaped how I architect systems and ship at pace.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-5 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {experiences.map((exp, index) => (
          <motion.article
            key={`${exp.role}-${index}`}
            variants={cardVariant}
            className="glass-card accent-card accent-card-experience stack-card min-w-0 h-full group relative overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700"
              style={{ backgroundColor: exp.color }}
            />

            <div className="stack-card-head">
              <div className="stack-card-title-wrap">
                <h3 className="stack-card-title break-words group-hover:text-accent transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="stack-card-meta break-words" style={{ color: exp.color }}>
                  {exp.org} · {exp.type ?? "Full-time"}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap shrink-0"
                style={{
                  color: "var(--text-muted)",
                  borderColor: "rgba(255,248,235,0.08)",
                  background: "rgba(255,248,235,0.04)",
                }}
              >
                <CalendarDays size={11} className="shrink-0 opacity-70" />
                {exp.period}
              </span>
            </div>

            <p className="stack-card-body break-words">{exp.description}</p>

            <div className="stack-card-tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="stack-card-footer">
              <span className="stack-card-meta" style={{ color: "var(--text-muted)" }}>
                {exp.duration || `Role ${String(index + 1).padStart(2, "0")}`}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
