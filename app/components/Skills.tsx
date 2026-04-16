"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "var(--accent)",
    skills: [
      { name: "React.js",    level: 88 },
      { name: "Next.js",     level: 82 },
      { name: "Tailwind CSS",level: 85 },
      { name: "JavaScript",  level: 87 },
      { name: "HTML & CSS",  level: 92 },
      { name: "Flutter",     level: 68 },
    ],
  },
  {
    category: "Backend",
    color: "var(--violet)",
    skills: [
      { name: "Node.js",     level: 80 },
      { name: "Express.js",  level: 78 },
      { name: "FastAPI",     level: 60 },
      { name: "REST APIs",   level: 82 },
      { name: "Firebase",    level: 76 },
      { name: "Socket.io",   level: 62 },
    ],
  },
  {
    category: "Database",
    color: "var(--success)",
    skills: [
      { name: "MongoDB",     level: 78 },
      { name: "Firebase DB", level: 74 },
      { name: "Supabase",    level: 55 },
      { name: "Cloudinary",  level: 70 },
    ],
  },
  {
    category: "Languages & Tools",
    color: "#f97316",
    skills: [
      { name: "Python",      level: 78 },
      { name: "Java",        level: 72 },
      { name: "TypeScript",  level: 65 },
      { name: "Git & GitHub",level: 85 },
      { name: "Vercel",      level: 80 },
      { name: "Razorpay",    level: 72 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "var(--text-sm)", color: "var(--text)", fontWeight: 500 }}>
          {name}
        </span>
        <span
          style={{
            fontSize: "var(--text-xs)",
            fontFamily: "var(--font-mono)",
            color: "var(--text-muted)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 4,
          background: "var(--surface-active)",
          borderRadius: "var(--radius-full)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: "var(--radius-full)",
            transition: "width 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" style={{ maxWidth: 1100 }}>
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technologies and tools I work with regularly</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
          gap: "var(--space-6)",
        }}
      >
        {skillGroups.map((group, gi) => (
          <div
            key={group.category}
            className="glass-card"
            style={{
              padding: "var(--space-6)",
              animation: `fadeUp 0.5s ${gi * 0.1}s ease both`,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                marginBottom: "var(--space-5)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: group.color,
                  boxShadow: `0 0 8px ${group.color}80`,
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-base)",
                  fontWeight: 700,
                  color: "var(--text)",
                }}
              >
                {group.category}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={gi * 100 + si * 60}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}