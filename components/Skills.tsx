"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Zap } from "lucide-react";

function getSkillLabel(level: number) {
  if (level >= 84) return "Advanced";
  if (level >= 68) return "Intermediate";
  return "Working";
}

function SkillBar({
  name,
  level,
  color,
  index,
}: {
  name: string;
  level: number;
  color: string;
  index: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center gap-4 px-1">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="skill-pill" style={{ color }}>
          {getSkillLabel(level)}
        </span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 12px ${color}25`,
          }}
        />
      </div>
    </div>
  );
}

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
        <p className="text-text-muted">
          A curated view of the tools and frameworks I use to ship polished products.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={item}
            className="glass-card accent-card accent-card-skills p-6 border-white/5 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: group.color,
                  boxShadow: `0 0 8px ${group.color}`,
                }}
              />
              <h3 className="font-display text-base font-bold text-text uppercase tracking-widest">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {group.skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
