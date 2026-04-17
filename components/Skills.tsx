"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Cpu } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillVariant = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section className="section w-full">
      {/* ── Header ── */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
          <Cpu size={26} className="text-accent shrink-0" />
          Technical Stack
        </h2>
        <p className="text-muted" style={{ maxWidth: "52ch" }}>
          Tools I reach for to design, build, ship, and scale production products — used in real codebases, not toy demos.
        </p>
      </motion.div>

      {/* ── Grid ── */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillGroups.map((group) => (
          <motion.article
            key={group.category}
            variants={cardVariant}
            className="glass-card accent-card accent-card-skills stack-card group min-w-0 h-full relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* ── Ambient corner glow on hover ── */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.09] transition-opacity duration-700"
              style={{ backgroundColor: group.color }}
            />

            {/* ── Category header ── */}
            <div className="stack-card-head">
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
                  style={{
                    backgroundColor: group.color,
                    boxShadow: `0 0 10px ${group.color}88`,
                  }}
                />
                <h3
                  className="stack-card-title break-words"
                >
                  {group.category}
                </h3>
              </div>

              <span
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] font-bold px-2.5 py-1 rounded-full border shrink-0"
                style={{
                  color: group.color,
                  borderColor: `${group.color}33`,
                  background: `${group.color}12`,
                }}
              >
                {group.skills.length} tools
              </span>
            </div>

            <p className="stack-card-body">{group.description}</p>

            {/* ── Skill pills — NO progress bars ── */}
            <motion.div
              className="stack-card-tags min-w-0"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={pillVariant}
                  className="skill-pill group/pill min-w-0"
                  whileHover={{
                    borderColor: `${group.color}55`,
                    color: "var(--text)",
                    backgroundColor: `${group.color}10`,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Optional: brand icon dot */}
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
                    style={{ backgroundColor: group.color }}
                  />
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>

            {/* ── Subtle divider + descriptor ── */}
            <div className="stack-card-footer">
              <p
                className="stack-card-meta"
              >
                Shipped in production builds
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}