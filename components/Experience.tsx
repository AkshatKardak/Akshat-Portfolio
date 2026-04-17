"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
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
          Pro Journey
        </h2>
        <p className="text-text-muted">A timeline of my professional growth, academic milestones, and technical impact.</p>
      </motion.div>

      <div className="relative pl-4 ml-4 md:pl-8 md:ml-6">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-violet to-transparent opacity-30" />

        <motion.div 
          className="flex flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.role}
              variants={item}
              className="relative flex flex-col gap-4"
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              initial={{ opacity: 0, x: -20, scale: 0.98 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Dot */}
              <div 
                className="absolute -left-4 md:-left-8 top-1 w-2.5 h-2.5 rounded-full border-2 border-bg z-10"
                style={{ backgroundColor: exp.color, boxShadow: `0 0 14px ${exp.color}` }}
              />

              <div className="glass-card accent-card accent-card-experience p-6 border-white/5 transition-all duration-300 overflow-hidden relative group">
                {/* Accent Background Glow */}
                <div
                  className="absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: exp.color }}
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-text mb-0.5 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold tracking-wide" style={{ color: exp.color }}>
                      {exp.org}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="text-[11px] font-mono font-bold text-text-muted bg-white/5 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.duration && (
                      <span className="text-[10px] text-text-faint mt-1 uppercase tracking-widest font-bold">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag group-hover:bg-white/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
