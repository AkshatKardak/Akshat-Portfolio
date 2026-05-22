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

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

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
            <a href={personal.resumeUrl} download className="btn-primary">
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

        {/* RIGHT COLUMN — Profile Photo Card (Akshat.png) */}
        <motion.div
          className="xl:col-span-2 flex justify-end"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={slideRight}
            className="relative w-full max-w-[400px]"
          >
            {/* Glow backdrop */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "1.5rem",
                background: "radial-gradient(ellipse at 60% 40%, rgba(245,158,11,0.22) 0%, transparent 70%)",
                filter: "blur(18px)",
                zIndex: 0,
                transform: "scale(1.08)",
              }}
            />

            {/* Photo card */}
            <div
              className="relative overflow-hidden rounded-3xl border"
              style={{
                borderColor: "rgba(245,158,11,0.22)",
                boxShadow: "0 0 0 1px rgba(245,158,11,0.10), 0 8px 40px rgba(0,0,0,0.55), 0 0 60px rgba(245,158,11,0.12)",
                background: "rgba(20,18,14,0.85)",
                backdropFilter: "blur(12px)",
                zIndex: 1,
              }}
            >
              <img
                src="/images/Akshat.png"
                alt="Akshat Kardak"
                width={400}
                height={500}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />

              {/* Bottom name bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem 1.25rem 1.1rem",
                  background: "linear-gradient(to top, rgba(10,9,7,0.92) 60%, transparent)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: "#f5f0e8",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                  }}
                >
                  Akshat Kardak
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono, monospace)",
                    color: "#f59e0b",
                    letterSpacing: "0.08em",
                    opacity: 0.9,
                  }}
                >
                  Full Stack Developer &nbsp;·&nbsp; Mumbai, India
                </span>
              </div>

              {/* Live badge */}
              <div
                style={{
                  position: "absolute",
                  top: "0.9rem",
                  right: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(10,9,7,0.75)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(34,197,94,0.28)",
                  borderRadius: "999px",
                  padding: "3px 10px 3px 7px",
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-mono, monospace)",
                  color: "#22c55e",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px rgba(34,197,94,0.7)",
                    display: "inline-block",
                  }}
                />
                available
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
