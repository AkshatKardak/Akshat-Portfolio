"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Zap, Sparkles } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
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
          <Zap className="text-accent" />
          Technical Stack
        </h2>
        <p className="text-text-muted max-w-2xl">
          The tools I reach for to design, build, ship, and scale polished digital products.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillGroups.map((group) => (
          <motion.article
            key={group.category}
            variants={item}
            className="glass-card accent-card accent-card-skills p-7 md:p-8 border-white/5 transition-all duration-300 group min-h-[250px]"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="flex items-start justify-between gap-4 mb-7">
              <div className="flex items-center gap-3">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: group.color,
                    boxShadow: `0 0 10px ${group.color}`,
                  }}
                />
                <h3 className="font-display text-lg font-bold text-text tracking-wide">
                  {group.category}
                </h3>
              </div>

              <span
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-mono px-2.5 py-1 rounded-full border"
                style={{
                  color: group.color,
                  borderColor: `${group.color}33`,
                  background: `${group.color}12`,
                }}
              >
                <Sparkles size={12} />
                Core
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium border transition-all duration-300 group-hover:border-white/15"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    borderColor: "rgba(255,255,255,0.08)",
                    color: "var(--text)",
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="mt-7 pt-5 border-t border-white/6">
              <p className="text-sm text-text-faint leading-relaxed">
                Strong working depth across this area, used in real product builds and iterative shipping workflows.
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
