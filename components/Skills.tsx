"use client";

import { motion, type Variants } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Cpu } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pillVariant: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const pillContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.18 },
  },
};

// Simple Icons slug map — add more as needed
const ICON_SLUGS: Record<string, string> = {
  "React": "react",
  "Next.js": "nextdotjs",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Node.js": "nodedotjs",
  "Express": "express",
  "MongoDB": "mongodb",
  "Firebase": "firebase",
  "Tailwind CSS": "tailwindcss",
  "Python": "python",
  "FastAPI": "fastapi",
  "Flutter": "flutter",
  "Dart": "dart",
  "Docker": "docker",
  "Git": "git",
  "GitHub": "github",
  "Vercel": "vercel",
  "Netlify": "netlify",
  "Supabase": "supabase",
  "Cloudinary": "cloudinary",
  "PostgreSQL": "postgresql",
  "MySQL": "mysql",
  "Redux": "redux",
  "GraphQL": "graphql",
  "Prisma": "prisma",
  "Socket.io": "socketdotio",
  "Framer Motion": "framer",
  "Three.js": "threedotjs",
  "GSAP": "greensock",
  "Figma": "figma",
  "VS Code": "visualstudiocode",
  "Razorpay": "razorpay",
  "AWS": "amazonaws",
  "Vite": "vite",
  "Vue": "vuedotjs",
  "Svelte": "svelte",
  "Astro": "astro",
  "Kotlin": "kotlin",
  "Java": "java",
  "C++": "cplusplus",
  "Rust": "rust",
  "Go": "go",
};

function SkillIcon({ name, color }: { name: string; color: string }) {
  const slug = ICON_SLUGS[name];
  if (!slug) {
    return (
      <span
        className="inline-block w-1.5 h-1.5 rounded-full shrink-0 opacity-60"
        style={{ backgroundColor: color }}
      />
    );
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      width={14}
      height={14}
      className="shrink-0 opacity-75"
      style={{ filter: "brightness(0) invert(1) opacity(0.7)" }}
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

export default function Skills() {
  return (
    <div className="w-full">
      {/* ── Header ── */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
          <Cpu size={26} className="text-accent shrink-0" />
          Technical Stack
        </h2>
        <p className="text-muted" style={{ maxWidth: "52ch" }}>
          Tools I reach for to design, build, ship, and scale production
          products — used in real codebases, not toy demos.
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
            className="glass-card accent-card accent-card-skills stack-card group min-w-0 h-full relative overflow-hidden break-words"
            whileHover={{ y: -5, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const } }}
          >
            {/* ── Ambient corner glow ── */}
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
                <h3 className="stack-card-title break-words">{group.category}</h3>
              </div>

              <span
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] font-bold px-2.5 py-1 rounded-full border shrink-0"
                aria-label={`${group.skills.length} tools in ${group.category}`}
                style={{
                  color: group.color,
                  borderColor: `${group.color}33`,
                  background: `${group.color}12`,
                }}
              >
                {group.skills.length} tools
              </span>
            </div>

            {/* ── Skill pills with logos ── */}
            <motion.div className="stack-card-tags min-w-0" variants={pillContainer}>
              {group.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={pillVariant}
                  className="skill-pill group/pill min-w-0 inline-flex items-center gap-1.5"
                  whileHover={{
                    borderColor: `${group.color}55`,
                    color: "var(--text)",
                    backgroundColor: `${group.color}10`,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <SkillIcon name={skill.name} color={group.color} />
                  {skill.name}
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
  );
}