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
      gsap.from(".about-left", {
        opacity: 0, x: -60, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-left", start: "top 80%" },
      });
      gsap.from(".about-right", {
        opacity: 0, x: 60, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".about-right", start: "top 80%" },
      });
      gsap.from(".stat-card", {
        opacity: 0, y: 30, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: ".about-stats", start: "top 85%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "110px 0", position: "relative", zIndex: 10 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>

        {/* Label */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: "0.78rem", color: "#a855f7",
          letterSpacing: "0.25em", textTransform: "uppercase",
          marginBottom: "14px",
        }}>
          <span style={{ width: "28px", height: "1px", background: "#a855f7", display: "inline-block" }} />
          About Me
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "var(--font-cyber), Syne, sans-serif",
          fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
          fontWeight: 800, lineHeight: 1.1, marginBottom: "60px",
          background: "linear-gradient(135deg, #fff 30%, #c084fc 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Who Am I
        </h2>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>

          {/* LEFT */}
          <div className="about-left">
            <p style={{
              fontFamily: "var(--font-body), Space Grotesk, sans-serif",
              fontSize: "1.05rem", lineHeight: 1.8,
              color: "#94a3b8", marginBottom: "20px",
            }}>
              I&apos;m <span style={{ color: "#c084fc", fontWeight: 600 }}>Akshat Kardak</span>, a passionate Full Stack Developer from Mumbai, currently in my 3rd year of B.Tech at TCET. I love building clean, fast, and visually stunning web applications.
            </p>
            <p style={{
              fontFamily: "var(--font-body), Space Grotesk, sans-serif",
              fontSize: "1.05rem", lineHeight: 1.8, color: "#94a3b8",
            }}>
              From hackathons to open-source contributions, I&apos;m always pushing the limits of what&apos;s possible. My work includes{" "}
              <span style={{ color: "#c084fc", fontWeight: 600 }}>UnitedImpact</span>,{" "}
              <span style={{ color: "#c084fc", fontWeight: 600 }}>Campus Drop</span>, and{" "}
              <span style={{ color: "#c084fc", fontWeight: 600 }}>Car Rental</span> platforms.
            </p>

            {/* Stats */}
            <div className="about-stats" style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px", marginTop: "36px",
            }}>
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-card"
                  style={{
                    background: "rgba(14,14,26,0.8)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    borderRadius: "12px", padding: "20px 16px",
                    textAlign: "center",
                    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(168,85,247,0.45)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{
                    display: "block",
                    fontFamily: "var(--font-cyber), Syne, sans-serif",
                    fontSize: "2rem", fontWeight: 800,
                    background: "linear-gradient(135deg, #a855f7, #ec4899)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {s.number}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                    fontSize: "0.8rem", color: "#475569", marginTop: "4px", display: "block",
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Info table */}
          <div
            className="about-right"
            style={{
              background: "rgba(14,14,26,0.8)",
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "16px", padding: "28px",
            }}
          >
            {info.map(([key, val]) => (
              <div key={key} style={{
                display: "flex", gap: "16px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(124,58,237,0.1)",
                alignItems: "center",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                  fontSize: "0.78rem", color: "#a855f7",
                  letterSpacing: "0.1em", width: "80px", flexShrink: 0,
                }}>
                  {key}
                </span>
                <span style={{
                  fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                  fontSize: "0.95rem", color: "#f1f5f9",
                }}>
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
