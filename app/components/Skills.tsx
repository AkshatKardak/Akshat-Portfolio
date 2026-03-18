"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "rgba(168,85,247,0.15)",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "rgba(34,211,238,0.1)",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth"],
  },
  {
    title: "Database & Cloud",
    icon: "🗄️",
    color: "rgba(236,72,153,0.1)",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Vercel", "AWS S3"],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    color: "rgba(168,85,247,0.1)",
    skills: ["Git", "GitHub", "Figma", "Three.js", "Docker"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".skill-cat-card", {
        opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "110px 0", position: "relative", zIndex: 10 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>

        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: "0.78rem", color: "#a855f7",
          letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "14px",
        }}>
          <span style={{ width: "28px", height: "1px", background: "#a855f7", display: "inline-block" }} />
          What I Work With
        </div>

        <h2 style={{
          fontFamily: "var(--font-cyber), Syne, sans-serif",
          fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
          fontWeight: 800, lineHeight: 1.1, marginBottom: "60px",
          background: "linear-gradient(135deg, #fff 30%, #c084fc 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Tech Stack
        </h2>

        <div className="skills-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
        }}>
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="skill-cat-card"
              style={{
                background: "rgba(14,14,26,0.8)",
                WebkitBackdropFilter: "blur(16px)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: "16px", padding: "28px",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(168,85,247,0.3)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "10px",
                  background: cat.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                }}>
                  {cat.icon}
                </div>
                <span style={{
                  fontFamily: "var(--font-cyber), Syne, sans-serif",
                  fontSize: "1rem", fontWeight: 700, color: "#f1f5f9",
                }}>
                  {cat.title}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 13px",
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.22)",
                      borderRadius: "100px",
                      fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                      fontSize: "0.78rem", color: "#c084fc",
                      transition: "all 0.25s", cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(168,85,247,0.2)";
                      e.currentTarget.style.borderColor = "#a855f7";
                      e.currentTarget.style.boxShadow = "0 0 10px rgba(168,85,247,0.3)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(124,58,237,0.1)";
                      e.currentTarget.style.borderColor = "rgba(124,58,237,0.22)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
