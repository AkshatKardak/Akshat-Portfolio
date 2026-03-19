"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01", title: "UnitedImpact",
    desc: "A social impact platform connecting volunteers with NGOs. Built with full MERN stack with real-time features.",
    tags: ["React","Node.js","MongoDB","Express"],
    gradient: "linear-gradient(135deg,rgba(234,88,12,0.3),rgba(249,115,22,0.08))",
    accent: "#f97316", link: "#", live: "#",
  },
  {
    number: "02", title: "Campus Drop",
    desc: "Smart campus cab-sharing platform for college students with real-time location tracking.",
    tags: ["Next.js","Socket.io","MongoDB","Tailwind"],
    gradient: "linear-gradient(135deg,rgba(239,68,68,0.2),rgba(220,38,38,0.06))",
    accent: "#ef4444", link: "#", live: "#",
  },
  {
    number: "03", title: "Car Rental",
    desc: "Full-featured car rental booking system with admin dashboard, payments and booking management.",
    tags: ["React","Node.js","MongoDB","Stripe"],
    gradient: "linear-gradient(135deg,rgba(251,191,36,0.18),rgba(245,158,11,0.05))",
    accent: "#fbbf24", link: "#", live: "#",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".proj-card", { opacity: 0, y: 60, stagger: 0.2, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".projects-grid", start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding: "110px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#f97316", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "14px" }}>
          <span style={{ width: "28px", height: "1px", background: "#f97316", display: "inline-block" }} />
          What I&apos;ve Built
        </div>

        <h2 style={{ fontFamily: "var(--font-cyber)", fontSize: "clamp(2.4rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "60px", background: "linear-gradient(135deg,#fff 30%,#fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          My Projects
        </h2>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "28px" }}>
          {projects.map((project) => (
            <div key={project.title} className="proj-card"
              style={{ background: "rgba(14,14,26,0.8)", backdropFilter: "blur(16px)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "16px", overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.3s,box-shadow 0.4s,transform 0.4s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor=`${project.accent}99`; e.currentTarget.style.boxShadow=`0 0 25px ${project.accent}55,0 0 50px ${project.accent}22`; e.currentTarget.style.transform="translateY(-8px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(249,115,22,0.2)"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
            >
              <div style={{ height: "160px", background: project.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <span style={{ fontFamily: "var(--font-cyber)", fontSize: "4rem", fontWeight: 800, opacity: 0.15, color: project.accent }}>{project.number}</span>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg,transparent,${project.accent},transparent)` }} />
              </div>
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: project.accent, letterSpacing: "0.15em", marginBottom: "8px" }}>Project {project.number}</p>
                <h3 style={{ fontFamily: "var(--font-cyber)", fontSize: "1.25rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "10px" }}>{project.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "#94a3b8", flex: 1, marginBottom: "16px" }}>{project.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "20px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ padding: "4px 11px", background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "100px", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#fb923c" }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <a href={project.link} target="_blank" rel="noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: project.accent, textDecoration: "none" }}>GitHub ↗</a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                    style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color="#fb923c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color="#94a3b8")}
                  >Live Demo ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
