"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const info = [
  ["Name",    "Akshat Kardak"],
  ["Role",    "Full Stack Developer"],
  ["College", "TCET Mumbai"],
  ["Year",    "3rd Year B.Tech"],
  ["Email",   "kardakakshat@gmail.com"],
  ["Status",  "Open to Opportunities ✅"],
];

const stats = [
  { number: "10+", label: "Projects Built" },
  { number: "3+",  label: "Years Coding" },
  { number: "5+",  label: "Hackathons" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-left",  { opacity: 0, x: -60, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-left",  start: "top 80%" } });
      gsap.from(".about-right", { opacity: 0, x:  60, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-right", start: "top 80%" } });
      gsap.from(".stat-card",   { opacity: 0, y:  30, stagger: 0.15, duration: 0.7, scrollTrigger: { trigger: ".about-stats", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "110px 0", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#f97316", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "14px" }}>
          <span style={{ width: "28px", height: "1px", background: "#f97316", display: "inline-block" }} />
          About Me
        </div>

        <h2 style={{ fontFamily: "var(--font-cyber)", fontSize: "clamp(2.4rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "60px", background: "linear-gradient(135deg,#fff 30%,#fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Who Am I
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>

          <div className="about-left">
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
              I&apos;m <span style={{ color: "#f97316", fontWeight: 600 }}>Akshat Kardak</span>, a passionate Full Stack Developer from Mumbai, currently in my 3rd year of B.Tech at TCET. I love building clean, fast, and visually stunning web applications.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.8, color: "#94a3b8" }}>
              From hackathons to open-source contributions, I&apos;m always pushing limits. My work includes{" "}
              <span style={{ color: "#f97316", fontWeight: 600 }}>UnitedImpact</span>,{" "}
              <span style={{ color: "#fb923c", fontWeight: 600 }}>Campus Drop</span>, and{" "}
              <span style={{ color: "#fbbf24", fontWeight: 600 }}>Car Rental</span> platforms.
            </p>

            <div className="about-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "36px" }}>
              {stats.map((s) => (
                <div key={s.label} className="stat-card"
                  style={{ background: "rgba(14,14,26,0.8)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "12px", padding: "20px 16px", textAlign: "center", transition: "border-color 0.3s,box-shadow 0.3s,transform 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(249,115,22,0.6)"; e.currentTarget.style.boxShadow="0 0 14px rgba(249,115,22,0.4)"; e.currentTarget.style.transform="translateY(-4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(249,115,22,0.2)"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
                >
                  <span style={{ display: "block", fontFamily: "var(--font-cyber)", fontSize: "2rem", fontWeight: 800, background: "linear-gradient(135deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.number}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#475569", marginTop: "4px", display: "block" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right" style={{ background: "rgba(14,14,26,0.8)", backdropFilter: "blur(16px)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "16px", padding: "28px" }}>
            {info.map(([key, val]) => (
              <div key={key} style={{ display: "flex", gap: "16px", padding: "14px 0", borderBottom: "1px solid rgba(249,115,22,0.08)", alignItems: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#f97316", letterSpacing: "0.1em", width: "80px", flexShrink: 0 }}>{key}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#f1f5f9" }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
