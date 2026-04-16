"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "React Developer", "Node.js Engineer", "Problem Solver"];

const codeLines = [
  { num: 1, text: `const developer = {`, color: "var(--text)" },
  { num: 2, text: `  name: "Akshat Kardak",`, color: "var(--accent)" },
  { num: 3, text: `  role: "Full Stack Developer",`, color: "var(--accent)" },
  { num: 4, text: `  location: "Mumbai, India",`, color: "var(--success)" },
  { num: 5, text: `  education: "B.E. CSE, 2023-2027",`, color: "var(--violet)" },
  { num: 6, text: `  projects: {`, color: "var(--text)" },
  { num: 7, text: `    featured: ["RentRide", "UnitedImpact"],`, color: "var(--violet)" },
  { num: 8, text: `    mobile: ["CampusDrop"],`, color: "var(--violet)" },
  { num: 9, text: `  },`, color: "var(--text)" },
  { num: 10, text: `  stack: {`, color: "var(--text)" },
  { num: 11, text: `    frontend: ["React", "Next.js", "CSS"],`, color: "#f97316" },
  { num: 12, text: `    backend:  ["Node.js", "Express"],`, color: "#f97316" },
  { num: 13, text: `    database: ["MongoDB", "Firebase"],`, color: "#f97316" },
  { num: 14, text: `  },`, color: "var(--text)" },
  { num: 15, text: `  focus: "Scalable real-world apps"`, color: "var(--success)" },
  { num: 16, text: `};`, color: "var(--text)" },
  { num: 17, text: `export default developer;`, color: "var(--accent)" },
];

const stats = [
  { label: "Projects Built", value: "6", icon: "PK" },
  { label: "Certifications", value: "5", icon: "CT" },
  { label: "Internship", value: "1", icon: "IN" },
  { label: "GitHub Repos", value: "15+", icon: "GH" },
];

export default function Dashboard({ onViewProjects }: { onViewProjects?: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const role = roles[roleIndex];

    if (typing && displayed.length < role.length) {
      const timer = window.setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
      return () => window.clearTimeout(timer);
    }

    if (typing) {
      const timer = window.setTimeout(() => setTyping(false), 1800);
      return () => window.clearTimeout(timer);
    }

    if (displayed.length > 0) {
      const timer = window.setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
      setTyping(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = window.setTimeout(() => setVisibleLines((value) => value + 1), 80);
    return () => window.clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section className="section dashboard-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="status-badge">
            <span />
            Open to Opportunities
          </div>

          <h1>Akshat Kardak</h1>

          <div className="role-typewriter">
            {displayed}
            <span className="typewriter-cursor" />
          </div>

          <p>
            CSE student at Datta Meghe College of Engineering, Mumbai. Building scalable
            and impactful digital solutions from idea to deployment.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={onViewProjects}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              View Projects
            </button>
            <a
              href="mailto:kardakakshat@gmail.com"
              className="btn-ghost"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait glass-card">
            <Image
              src="/images/Akshat.png"
              alt="Akshat Kardak"
              width={520}
              height={520}
              priority
              className="portrait-image"
            />
            <div className="portrait-label">
              <span>Mumbai, India</span>
              <strong>Full Stack Developer</strong>
            </div>
          </div>

          <div className="glass-card code-card">
            <div className="editor-header">
              <span />
              <span />
              <span />
              <strong>developer.ts</strong>
            </div>

            <div className="code-window">
              {codeLines.slice(0, visibleLines).map((line) => (
                <div className="code-line" key={line.num}>
                  <span>{line.num}</span>
                  <code style={{ color: line.color }}>{line.text}</code>
                </div>
              ))}
              {visibleLines < codeLines.length && (
                <div className="code-line">
                  <span>{visibleLines + 1}</span>
                  <code>
                    <span className="typewriter-cursor" />
                  </code>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="glass-card stat-card"
            style={{ animation: `fadeUp 0.5s ${0.5 + index * 0.08}s ease both` }}
          >
            <span>{stat.icon}</span>
            <strong>{stat.value}</strong>
            <small>{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
