"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, ArrowRight } from "lucide-react";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -18 },
    show: { opacity: 1, x: 0 },
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
          <Briefcase className="text-accent" />
          Experience
        </h2>
        <p className="text-text-muted max-w-2xl">
          A timeline of projects, roles, and milestones that shaped how I build products and think through systems.
        </p>
      </motion.div>

      <div className="relative pl-5 ml-2 md:pl-10 md:ml-4">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-[var(--violet)] to-transparent opacity-40" />

        <motion.div
          className="flex flex-col gap-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.role}-${index}`}
              variants={item}
              className="relative"
            >
              <div
                className="absolute -left-[1.45rem] md:-left-[2.55rem] top-7 w-3 h-3 rounded-full border-2 border-[var(--bg)] z-10"
                style={{
                  backgroundColor: exp.color,
                  boxShadow: `0 0 16px ${exp.color}`,
                }}
              />

              <motion.div
                className="glass-card accent-card accent-card-experience p-7 md:p-8 border-white/5 transition-all duration-300 overflow-hidden relative group min-h-[260px]"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div
                  className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: exp.color }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="inline-block w-2 h-2 rounded-full"
                        style={{ backgroundColor: exp.color }}
                      />
                      <span
                        className="text-[10px] uppercase tracking-[0.24em] font-bold font-mono"
                        style={{ color: exp.color }}
                      >
                        Timeline Node
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-text mb-1 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: exp.color }}>
                      <span>{exp.org}</span>
                      <ArrowRight size={14} />
                      <span className="text-text-muted font-medium">Impact-focused build phase</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end shrink-0">
                    <span className="text-[11px] font-mono font-bold text-text-muted bg-white/5 px-2.5 py-1 rounded-md border border-white/5 whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.duration && (
                      <span className="text-[10px] text-text-faint mt-2 uppercase tracking-[0.22em] font-bold">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-7 max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag group-hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
