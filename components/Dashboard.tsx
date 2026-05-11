"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal, roles } from "@/lib/data";
import { FileDown, Github, Layers, Mail, MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Lines for the VS Code card — typed in one-by-one
const codeLines = [
  { text: "const akshat = {",                       indent: 0, color: "#ede0c0" },
  { text: '  role: "Full Stack Developer",',        indent: 0, color: "#94a3b8" },
  { text: '  location: "Mumbai, India",',           indent: 0, color: "#94a3b8" },
  { text: "  stack: [Next.js, FastAPI, Flutter],",  indent: 0, color: "#94a3b8" },
  { text: "  available: true, // hire me",          indent: 0, color: "#22c55e" },
  { text: "}",                                      indent: 0, color: "#ede0c0" },
];

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  // Typewriter for roles
  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = window.setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 58);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setTyping(false), 1600);
      return () => window.clearTimeout(t);
    }
    if (displayed.length > 0) {
      const t = window.setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setRoleIndex((c) => (c + 1) % roles.length);
      setTyping(true);
    }, 0);
    return () => window.clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  // Stagger code lines appearing
  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 280);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-14 xl:gap-20 items-start min-h-[72vh]">

        {/* LEFT COLUMN */}
        <motion.div
          className="xl:col-span-3 flex flex-col gap-7 xl:pr-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {personal.available && (
            <motion.div variants={item} className="inline-flex items-center gap-2 w-fit">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--success)", borderColor: "rgba(34,197,94,0.22)", background: "rgba(34,197,94,0.08)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--success)", boxShadow: "0 0 8px rgba(34,197,94,0.5)" }} />
                Available for work
              </span>
            </motion.div>
          )}

          <motion.div variants={item}>
            <p className="mb-3 text-sm font-mono uppercase tracking-[0.22em]" style={{ color: "var(--text-faint)" }}>
              <span style={{ color: "var(--accent)" }}>&gt; </span>about me
            </p>
            <h1
              className="font-display font-black leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 5vw + 1rem, 5rem)", color: "var(--text)" }}
            >
              {personal.firstName}{" "}
              <span style={{
                background: "linear-gradient(118deg, #f59e0b 0%, #fde047 55%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 14px rgba(245,158,11,0.40))",
              }}>
                {personal.lastName}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <div
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 font-mono text-sm"
              style={{ borderColor: "rgba(245,158,11,0.18)", background: "rgba(245,158,11,0.06)", color: "var(--accent)" }}
            >
              <span>{displayed}</span>
              <span className="animate-blink inline-block h-4 w-0.5 rounded-full" style={{ background: "var(--accent)" }} />
            </div>
          </motion.div>

          <motion.p variants={item} className="max-w-lg text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {personal.bio}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "var(--text-faint)" }}>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} style={{ color: "var(--accent)" }} />
              {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} style={{ color: "var(--accent)" }} />
              {personal.email}
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <a
              href={personal.resumeUrl}
              download
              className="btn-primary"
            >
              <FileDown size={15} />
              Download CV
            </a>
            <a href="#projects" className="btn-ghost">
              <Layers size={15} />
              View Projects
            </a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={15} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — VS Code Editor Card */}
        <motion.div
          className="xl:col-span-2 flex justify-end"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={slideRight}
            className="vscode-card glass-card w-full max-w-[440px]"
          >
            {/* Window chrome */}
            <div className="vscode-chrome">
              <div className="vscode-dots">
                <span className="vscode-dot red" />
                <span className="vscode-dot yellow" />
                <span className="vscode-dot green" />
              </div>
              <span className="vscode-filename">akshat.ts</span>
              <span className="vscode-live">
                <span className="vscode-live-dot" />
                live
              </span>
            </div>

            {/* Code area */}
            <div className="vscode-body">
              <div className="vscode-lines">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    className="vscode-line"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="vscode-ln">{i + 1}</span>
                    <span className="vscode-code" style={{ color: line.color }}>{line.text}</span>
                  </motion.div>
                ))}
                {/* Blinking cursor on last line */}
                {visibleLines < codeLines.length && (
                  <div className="vscode-line">
                    <span className="vscode-ln">{visibleLines + 1}</span>
                    <motion.span
                      className="vscode-cursor"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.85, repeat: Infinity }}
                    >▌</motion.span>
                  </div>
                )}
              </div>
            </div>

            {/* Status bar */}
            <div className="vscode-statusbar">
              <span>TypeScript</span>
              <span>UTF-8</span>
              <span style={{ color: "var(--success)" }}>● Akshat Kardak</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
