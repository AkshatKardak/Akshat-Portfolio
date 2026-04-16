"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Data ─────────────────────────────────────────── */

const roles = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Node.js Backend Dev",
  "Problem Solver",
];

const codeLines = [
  { num: 1,  text: "const developer = {",                              type: "bracket" },
  { num: 2,  text: '  name:     "Akshat Kardak",',                     type: "string"  },
  { num: 3,  text: '  role:     "Full Stack Developer",',              type: "string"  },
  { num: 4,  text: '  location: "Mumbai, India",',                     type: "string"  },
  { num: 5,  text: "  projects: {",                                    type: "bracket" },
  { num: 6,  text: '    featured:    ["RentRide", "UnitedImpact"],',   type: "array"   },
  { num: 7,  text: '    experiments: ["RoastHub"],',                   type: "array"   },
  { num: 8,  text: "  },",                                             type: "bracket" },
  { num: 9,  text: "  stack: {",                                       type: "bracket" },
  { num: 10, text: '    frontend: ["React", "Next.js", "Tailwind"],',  type: "orange"  },
  { num: 11, text: '    backend:  ["Node.js", "Express"],',            type: "orange"  },
  { num: 12, text: '    database: ["MongoDB", "Firebase"],',           type: "orange"  },
  { num: 13, text: '    mobile:   ["Flutter", "Dart"],',               type: "orange"  },
  { num: 14, text: "  },",                                             type: "bracket" },
  { num: 15, text: '  focus: "Scalable real-world applications",',     type: "green"   },
  { num: 16, text: '  status: "Open to Opportunities 🚀",',            type: "green"   },
  { num: 17, text: "};",                                               type: "bracket" },
  { num: 18, text: "",                                                 type: "empty"   },
  { num: 19, text: "export default developer;",                        type: "keyword" },
];

const colorMap: Record<string, string> = {
  bracket: "rgba(230,237,243,0.85)",
  string:  "#4f9cff",
  array:   "#a78bfa",
  orange:  "#f97316",
  green:   "#34d399",
  keyword: "#4f9cff",
  empty:   "transparent",
};

const stats = [
  {
    label: "Projects Built",
    value: "8+",
    sub: "Full-stack apps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    color: "#4f9cff",
  },
  {
    label: "Certifications",
    value: "5",
    sub: "Verified badges",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    color: "#a78bfa",
  },
  {
    label: "Internship",
    value: "1",
    sub: "Employment Express",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    color: "#34d399",
  },
  {
    label: "GitHub Repos",
    value: "15+",
    sub: "Open source work",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    color: "#f97316",
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js",
  "MongoDB", "Firebase", "Flutter", "Python",
  "Tailwind", "Express", "Razorpay", "Vercel",
];

/* ─── Animated Counter ──────────────────────────────── */

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1200;
          const step = 16;
          const increment = target / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ display: "inline" }}>
      {count}{suffix}
    </div>
  );
}

/* ─── Main Component ────────────────────────────────── */

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);
  const [mounted, setMounted] = useState(false);

  /* Mount fade */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter */
  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          55
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          28
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  /* Code lines stagger */
  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(
        () => setVisibleLines((v) => v + 1),
        mounted ? 70 : 0
      );
      return () => clearTimeout(t);
    }
  }, [visibleLines, mounted]);

  return (
    <section
      style={{
        padding: "clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)",
        maxWidth: 1100,
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.5s ease",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* ── HERO ────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          alignItems: "center",
          minHeight: "72vh",
          marginBottom: "clamp(2rem, 5vw, 4rem)",
        }}
        className="hero-grid"
      >
        {/* Left — Identity */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1rem, 2.5vw, 1.5rem)",
          }}
        >
          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(52,211,153,0.10)",
              border: "1px solid rgba(52,211,153,0.25)",
              borderRadius: "9999px",
              padding: "0.25rem 0.85rem",
              fontSize: "clamp(0.75rem, 1.2vw, 0.8rem)",
              color: "#34d399",
              fontWeight: 500,
              width: "fit-content",
              animation: "fadeUp 0.5s 0.05s ease both",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#34d399",
                display: "inline-block",
                boxShadow: "0 0 6px #34d399",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Open to Opportunities
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#e6edf3",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              animation: "fadeUp 0.55s 0.1s ease both",
            }}
          >
            Akshat
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #4f9cff 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kardak
            </span>
          </h1>

          {/* Typewriter role */}
          <div
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
              fontWeight: 500,
              color: "#4f9cff",
              fontFamily: "var(--font-mono)",
              animation: "fadeUp 0.55s 0.15s ease both",
              minHeight: "1.8rem",
              display: "flex",
              alignItems: "center",
              gap: 0,
            }}
          >
            <span style={{ color: "rgba(230,237,243,0.35)", marginRight: "0.5rem" }}>
              &gt;
            </span>
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1.1em",
                background: "#4f9cff",
                marginLeft: 2,
                verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
                boxShadow: "0 0 6px rgba(79,156,255,0.6)",
              }}
            />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
              color: "rgba(230,237,243,0.60)",
              lineHeight: 1.75,
              maxWidth: "40ch",
              animation: "fadeUp 0.55s 0.2s ease both",
            }}
          >
            CSE Student at Datta Meghe College of Engineering, Mumbai.
            Building full-stack products — from design to deployment.
          </p>

          {/* Location + Stack chips */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              animation: "fadeUp 0.55s 0.25s ease both",
            }}
          >
            {/* Location */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "clamp(0.75rem, 1.2vw, 0.82rem)",
                color: "rgba(230,237,243,0.50)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Mumbai, India
            </div>

            <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.75rem" }}>•</span>

            {/* College */}
            <div
              style={{
                fontSize: "clamp(0.75rem, 1.2vw, 0.82rem)",
                color: "rgba(230,237,243,0.50)",
              }}
            >
              DMCE · CSE · 2027
            </div>
          </div>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "0.85rem",
              flexWrap: "wrap",
              animation: "fadeUp 0.55s 0.3s ease both",
              marginTop: "0.25rem",
            }}
          >
            <a
              href="https://github.com/AkshatKardak"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1.4rem",
                background: "#4f9cff",
                color: "#0b0f19",
                fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
                fontWeight: 700,
                borderRadius: "0.6rem",
                textDecoration: "none",
                transition: "all 220ms cubic-bezier(0.16,1,0.3,1)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#6aaeff";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(79,156,255,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#4f9cff";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1.4rem",
                background: "rgba(255,255,255,0.05)",
                color: "#e6edf3",
                fontSize: "clamp(0.8rem, 1.4vw, 0.9rem)",
                fontWeight: 500,
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "0.6rem",
                textDecoration: "none",
                transition: "all 220ms cubic-bezier(0.16,1,0.3,1)",
                whiteSpace: "nowrap",
                WebkitBackdropFilter: "blur(8px)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.10)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Right — Code Editor */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1rem",
            overflow: "hidden",
            animation: "fadeUp 0.65s 0.25s ease both",
            WebkitBackdropFilter: "blur(14px) saturate(180%)",
            backdropFilter: "blur(14px) saturate(180%)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.04), 0 24px 64px rgba(0,0,0,0.4), 0 0 40px rgba(79,156,255,0.04)",
          }}
        >
          {/* Editor title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1rem",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            {/* Traffic lights */}
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", flexShrink: 0 }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", flexShrink: 0 }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28ca41", flexShrink: 0 }} />

            {/* File tab */}
            <div
              style={{
                marginLeft: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "0.35rem",
                padding: "0.2rem 0.7rem",
              }}
            >
              {/* TS icon dot */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 14,
                  height: 14,
                  background: "#3178c6",
                  borderRadius: "3px",
                  fontSize: "0.55rem",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                  lineHeight: 1,
                }}
              >
                TS
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "rgba(230,237,243,0.55)",
                }}
              >
                developer.ts
              </span>
            </div>

            {/* Right side — breadcrumb */}
            <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <span style={{ fontSize: "0.65rem", color: "rgba(230,237,243,0.25)", fontFamily: "var(--font-mono)" }}>
                UTF-8
              </span>
              <span style={{ fontSize: "0.65rem", color: "rgba(230,237,243,0.25)", fontFamily: "var(--font-mono)" }}>
                TypeScript
              </span>
            </div>
          </div>

          {/* Code body */}
          <div
            style={{
              padding: "1.25rem 0.75rem 1.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.68rem, 1.1vw, 0.82rem)",
              lineHeight: 1.75,
              overflowX: "auto",
            }}
          >
            {codeLines.slice(0, visibleLines).map((line) => (
              <div
                key={line.num}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "baseline",
                  padding: "0 0.5rem",
                  borderRadius: "0.25rem",
                  transition: "background 180ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.04)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background = "transparent")
                }
              >
                {/* Line number */}
                <span
                  style={{
                    color: "rgba(230,237,243,0.20)",
                    minWidth: 22,
                    textAlign: "right",
                    userSelect: "none",
                    fontSize: "0.72em",
                    flexShrink: 0,
                  }}
                >
                  {line.num}
                </span>

                {/* Code text */}
                <span
                  style={{
                    color: colorMap[line.type] ?? "rgba(230,237,243,0.85)",
                    whiteSpace: "pre",
                  }}
                >
                  {line.text}
                </span>
              </div>
            ))}

            {/* Typing cursor for in-progress lines */}
            {visibleLines < codeLines.length && (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "0 0.5rem",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    color: "rgba(230,237,243,0.20)",
                    minWidth: 22,
                    textAlign: "right",
                    fontSize: "0.72em",
                  }}
                >
                  {visibleLines + 1}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: "1em",
                    background: "#4f9cff",
                    animation: "blink 1s step-end infinite",
                    boxShadow: "0 0 6px rgba(79,156,255,0.7)",
                    verticalAlign: "text-bottom",
                  }}
                />
              </div>
            )}
          </div>

          {/* Editor status bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.3rem 1rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              background: "#4f9cff",
            }}
          >
            <span style={{ fontSize: "0.65rem", color: "#0b0f19", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
              ● main
            </span>
            <div style={{ display: "flex", gap: "1rem" }}>
              {["Ln 19, Col 22", "TypeScript", "Prettier"].map((item) => (
                <span
                  key={item}
                  style={{ fontSize: "0.62rem", color: "rgba(11,15,25,0.7)", fontFamily: "var(--font-mono)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(0.75rem, 2vw, 1.25rem)",
          marginBottom: "clamp(2rem, 5vw, 4rem)",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1rem",
              padding: "clamp(1rem, 2.5vw, 1.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              animation: `fadeUp 0.5s ${0.45 + i * 0.08}s ease both`,
              WebkitBackdropFilter: "blur(14px)",
              backdropFilter: "blur(14px)",
              transition: "transform 220ms cubic-bezier(0.16,1,0.3,1), border-color 220ms ease, box-shadow 220ms ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(-3px)";
              el.style.borderColor = `${stat.color}30`;
              el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.25), 0 0 20px ${stat.color}10`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(0)";
              el.style.borderColor = "rgba(255,255,255,0.08)";
              el.style.boxShadow = "none";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "0.65rem",
                background: `${stat.color}15`,
                border: `1px solid ${stat.color}25`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: stat.color,
              }}
            >
              {stat.icon}
            </div>

            {/* Value */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
                fontWeight: 800,
                color: stat.color,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <AnimatedNumber
                target={parseInt(stat.value.replace("+", ""))}
                suffix={stat.value.includes("+") ? "+" : ""}
              />
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: "clamp(0.78rem, 1.3vw, 0.88rem)",
                fontWeight: 600,
                color: "#e6edf3",
                lineHeight: 1.2,
              }}
            >
              {stat.label}
            </div>

            {/* Sub */}
            <div
              style={{
                fontSize: "clamp(0.7rem, 1.1vw, 0.78rem)",
                color: "rgba(230,237,243,0.40)",
              }}
            >
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      {/* ── TECH STACK STRIP ─────────────────────────── */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "1rem",
          padding: "clamp(1rem, 3vw, 1.5rem) clamp(1.25rem, 3vw, 2rem)",
          animation: "fadeUp 0.5s 0.7s ease both",
          WebkitBackdropFilter: "blur(14px)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4f9cff", boxShadow: "0 0 6px #4f9cff" }} />
          <span
            style={{
              fontSize: "clamp(0.75rem, 1.2vw, 0.82rem)",
              fontWeight: 600,
              color: "rgba(230,237,243,0.50)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-mono)",
            }}
          >
            Tech Stack
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {techBadges.map((tech, i) => (
            <span
              key={tech}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.3rem 0.75rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "9999px",
                fontSize: "clamp(0.72rem, 1.1vw, 0.8rem)",
                fontWeight: 500,
                color: "rgba(230,237,243,0.70)",
                transition: "all 180ms ease",
                cursor: "default",
                animation: `fadeUp 0.4s ${0.75 + i * 0.04}s ease both`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.background = "rgba(79,156,255,0.12)";
                el.style.borderColor = "rgba(79,156,255,0.25)";
                el.style.color = "#4f9cff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLSpanElement;
                el.style.background = "rgba(255,255,255,0.06)";
                el.style.borderColor = "rgba(255,255,255,0.09)";
                el.style.color = "rgba(230,237,243,0.70)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── RESPONSIVE STYLES ────────────────────────── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
          50%       { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
        }

        /* Responsive grid */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 700px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}