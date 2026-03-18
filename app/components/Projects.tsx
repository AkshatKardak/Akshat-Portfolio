"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "UnitedImpact",
    desc: "A social impact platform connecting volunteers with NGOs. Built with full MERN stack with real-time features.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "linear-gradient(135deg, rgba(109,40,217,0.3), rgba(168,85,247,0.1))",
    accent: "#a855f7",
    link: "#",
    live: "#",
  },
  {
    number: "02",
    title: "Campus Drop",
    desc: "Smart campus cab-sharing platform for college students with real-time location tracking.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    gradient: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(34,211,238,0.05))",
    accent: "#22d3ee",
    link: "#",
    live: "#",
  },
  {
    number: "03",
    title: "Car Rental",
    desc: "Full-featured car rental booking system with admin dashboard, payments and booking management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.05))",
    accent: "#ec4899",
    link: "#",
    live: "#",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".proj-card", {
        opacity: 0, y: 60, stagger: 0.2, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
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
          What I&apos;ve Built
        </div>

        <h2 style={{
          fontFamily: "var(--font-cyber), Syne, sans-serif",
          fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
          fontWeight: 800, lineHeight: 1.1, marginBottom: "60px",
          background: "linear-gradient(135deg, #fff 30%, #c084fc 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          My Projects
        </h2>

        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
        }}>
          {projects.map((project) => (
            <div
              key={project.title}
              className="proj-card"
              style={{
                background: "rgba(14,14,26,0.8)",
                WebkitBackdropFilter: "blur(16px)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: "16px", overflow: "hidden",
                display: "flex", flexDirection: "column",
                transition: "border-color 0.3s, box-shadow 0.4s, transform 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(168,85,247,0.6), 0 0 50px rgba(124,58,237,0.3)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Card image area */}
              <div style={{
                height: "160px", background: project.gradient,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <span style={{
                  fontFamily: "var(--font-cyber), Syne, sans-serif",
                  fontSize: "4rem", fontWeight: 800, opacity: 0.15,
                  color: project.accent,
                }}>
                  {project.number}
                </span>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                }} />
              </div>

              {/* Card body */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{
                  fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                  fontSize: "0.72rem", color: project.accent,
                  letterSpacing: "0.15em", marginBottom: "8px",
                }}>
                  Project {project.number}
                </p>
                <h3 style={{
                  fontFamily: "var(--font-cyber), Syne, sans-serif",
                  fontSize: "1.25rem", fontWeight: 700,
                  color: "#f1f5f9", marginBottom: "10px",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                  fontSize: "0.9rem", lineHeight: 1.65,
                  color: "#94a3b8", flex: 1, marginBottom: "16px",
                }}>
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "20px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: "4px 11px",
                      background: "rgba(109,40,217,0.12)",
                      border: "1px solid rgba(109,40,217,0.25)",
                      borderRadius: "100px",
                      fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                      fontSize: "0.72rem", color: "#c084fc",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a href={project.link} target="_blank" rel="noreferrer" style={{
                    fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                    fontSize: "0.85rem", fontWeight: 600,
                    color: project.accent, textDecoration: "none",
                    transition: "opacity 0.3s",
                  }}>
                    GitHub ↗
                  </a>
                  <a
                    href={project.live} target="_blank" rel="noreferrer"
                    style={{
                      fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                      fontSize: "0.85rem", fontWeight: 600,
                      color: "#94a3b8", textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
