"use client";

import { useState, useEffect } from "react";

const roles = ["Full Stack Developer", "React Developer", "Node.js Engineer", "Problem Solver"];

const codeLines = [
  { num: 1,  text: `const developer = {`,                          color: "var(--text)" },
  { num: 2,  text: `  name: "Akshat Kardak",`,                     color: "var(--accent)" },
  { num: 3,  text: `  role: "Full Stack Developer",`,              color: "var(--accent)" },
  { num: 4,  text: `  location: "Mumbai, India",`,                 color: "var(--success)" },
  { num: 5,  text: `  projects: {`,                                 color: "var(--text)" },
  { num: 6,  text: `    featured: ["RentRide", "UnitedImpact"],`,  color: "var(--violet)" },
  { num: 7,  text: `    experiments: ["RoastHub"],`,               color: "var(--violet)" },
  { num: 8,  text: `  },`,                                          color: "var(--text)" },
  { num: 9,  text: `  stack: {`,                                    color: "var(--text)" },
  { num: 10, text: `    frontend: ["React", "Next.js", "Tailwind"],`, color: "#f97316" },
  { num: 11, text: `    backend:  ["Node.js", "Express"],`,         color: "#f97316" },
  { num: 12, text: `    database: ["MongoDB", "Firebase"],`,        color: "#f97316" },
  { num: 13, text: `  },`,                                          color: "var(--text)" },
  { num: 14, text: `  focus: "Scalable real-world apps"`,          color: "var(--success)" },
  { num: 15, text: `};`,                                            color: "var(--text)" },
  { num: 16, text: ``,                                              color: "" },
  { num: 17, text: `export default developer;`,                     color: "var(--accent)" },
];

const stats = [
  { label: "Projects Built",     value: "8+",    icon: "📦" },
  { label: "Certifications",     value: "5",     icon: "🏅" },
  { label: "Internship",         value: "1",     icon: "💼" },
  { label: "GitHub Repos",       value: "15+",   icon: "⭐" },
];

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  // Stagger code lines
  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 80);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section className="section" style={{ maxWidth: 1100 }}>
      {/* Hero Split Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-10)",
          alignItems: "center",
          marginBottom: "var(--space-12)",
          minHeight: "70vh",
        }}
      >
        {/* Left: Identity */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          {/* Status Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              background: "rgba(52, 211, 153, 0.1)",
              border: "1px solid rgba(52, 211, 153, 0.25)",
              borderRadius: "var(--radius-full)",
              padding: "var(--space-1) var(--space-3)",
              fontSize: "var(--text-xs)",
              color: "var(--success)",
              fontWeight: 500,
              width: "fit-content",
              animation: "fadeUp 0.5s ease forwards",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success)", display: "inline-block", boxShadow: "0 0 6px var(--success)" }} />
            Open to Opportunities
          </div>

          {/* Name */}
          <div style={{ animation: "fadeUp 0.6s 0.1s ease both" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-3xl)",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Akshat Kardak
            </h1>
          </div>

          {/* Role Typewriter */}
          <div
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: 500,
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              animation: "fadeUp 0.6s 0.2s ease both",
              minHeight: "2rem",
            }}
          >
            {displayed}
            <span className="typewriter-cursor" />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "42ch",
              animation: "fadeUp 0.6s 0.3s ease both",
            }}
          >
            CSE Student at Datta Meghe College of Engineering, Mumbai. Building scalable and impactful digital solutions — from idea to deployment.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              flexWrap: "wrap",
              animation: "fadeUp 0.6s 0.4s ease both",
            }}
          >
            <button className="btn-primary" onClick={() => {}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              View Projects
            </button>
            <a
              href="https://github.com/AkshatKardak"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Code Editor */}
        <div
          className="glass-card"
          style={{
            padding: 0,
            overflow: "hidden",
            animation: "fadeUp 0.7s 0.3s ease both",
            border: "1px solid var(--border)",
          }}
        >
          {/* Editor Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
              padding: "var(--space-3) var(--space-4)",
              borderBottom: "1px solid var(--border)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28ca41" }} />
            <span
              style={{
                marginLeft: "var(--space-4)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                color: "var(--text-faint)",
              }}
            >
              developer.ts
            </span>
          </div>

          {/* Code Content */}
          <div
            style={{
              padding: "var(--space-5) var(--space-4)",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
              lineHeight: 1.7,
              overflowX: "hidden",
            }}
          >
            {codeLines.slice(0, visibleLines).map((line) => (
              <div
                key={line.num}
                style={{ display: "flex", gap: "var(--space-4)", alignItems: "baseline" }}
              >
                <span
                  style={{
                    color: "var(--text-faint)",
                    minWidth: 20,
                    textAlign: "right",
                    userSelect: "none",
                    fontSize: "0.75em",
                  }}
                >
                  {line.num}
                </span>
                <span style={{ color: line.color || "var(--text)" }}>{line.text}</span>
              </div>
            ))}
            {visibleLines < codeLines.length && (
              <div style={{ display: "flex", gap: "var(--space-4)" }}>
                <span style={{ color: "var(--text-faint)", minWidth: 20, textAlign: "right", fontSize: "0.75em" }}>
                  {visibleLines + 1}
                </span>
                <span className="typewriter-cursor" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-4)",
          marginBottom: "var(--space-12)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card"
            style={{
              padding: "var(--space-5)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              animation: `fadeUp 0.5s ${0.5 + i * 0.08}s ease both`,
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>{stat.icon}</span>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-xl)",
                fontWeight: 800,
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}