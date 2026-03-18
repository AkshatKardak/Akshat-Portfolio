"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "React Specialist",
  "Node.js Engineer",
  "MERN Stack Dev",
  "UI/UX Enthusiast",
];

const orbitTags = [
  { label: "React",      icon: "⚛️",  angle: 0,    radius: 160, color: "#61dafb" },
  { label: "Node.js",    icon: "🟢",  angle: 72,   radius: 180, color: "#68a063" },
  { label: "TypeScript", icon: "🔷",  angle: 144,  radius: 155, color: "#3178c6" },
  { label: "MongoDB",    icon: "🍃",  angle: 216,  radius: 175, color: "#47a248" },
  { label: "Next.js",    icon: "▲",   angle: 288,  radius: 165, color: "#ffffff" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [tagAngles, setTagAngles] = useState(orbitTags.map((t) => t.angle));

  // ── Typewriter effect ──
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // ── Orbit rotation ──
  useEffect(() => {
    const interval = setInterval(() => {
      setTagAngles((prev) => prev.map((a) => (a + 0.3) % 360));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // ── GSAP entrance ──
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge",   { opacity: 0, y: 20, duration: 0.6 })
      .from(".hero-name",    { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
      .from(".hero-role",    { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(".hero-desc",    { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-btns",    { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-scroll",  { opacity: 0, duration: 0.6 },        "-=0.2")
      .from(".hero-graphic", { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out" }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        position: "relative", zIndex: 10,
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 0 60px",
      }}
    >
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 28px",
        display: "grid", gridTemplateColumns: "1fr 480px",
        gap: "60px", alignItems: "center", width: "100%",
      }}>

        {/* ── LEFT: Text ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

          {/* Badge */}
          <div className="hero-badge" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: "100px", padding: "6px 16px", width: "fit-content",
          }}>
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#22c55e", boxShadow: "0 0 8px #22c55e",
              display: "inline-block", animation: "blink 1.2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              fontSize: "0.78rem", color: "#86efac",
            }}>
              Available for opportunities
            </span>
          </div>

          {/* Greeting + Name */}
          <div>
            <p style={{
              fontFamily: "var(--font-body), Space Grotesk, sans-serif",
              fontSize: "1.1rem", color: "#94a3b8", marginBottom: "6px",
            }}>
              Hey there, I&apos;m
            </p>
            <h1
              className="hero-name glitch"
              data-text="Akshat Kardak"
              style={{
                fontFamily: "var(--font-cyber), Syne, sans-serif",
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                fontWeight: 800, lineHeight: 1.05, color: "#ffffff",
                margin: 0,
              }}
            >
              Akshat Kardak
            </h1>
          </div>

          {/* Typewriter Role */}
          <p className="hero-role" style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "#c084fc",
            textShadow: "0 0 10px rgba(168,85,247,0.5)",
            minHeight: "2rem", display: "flex", alignItems: "center", gap: "2px",
          }}>
            {displayed}
            <span style={{
              color: "#a855f7", fontWeight: 700,
              animation: "blink 0.9s step-end infinite",
            }}>|</span>
          </p>

          {/* Description */}
          <p className="hero-desc" style={{
            fontFamily: "var(--font-body), Space Grotesk, sans-serif",
            fontSize: "1.05rem", lineHeight: 1.75,
            color: "#94a3b8", maxWidth: "500px",
          }}>
            Crafting digital experiences with React, Next.js &amp; Node.js.
            I build <span style={{ color: "#c084fc", fontWeight: 600 }}>fast</span>,{" "}
            <span style={{ color: "#ec4899", fontWeight: 600 }}>scalable</span>, and{" "}
            <span style={{ color: "#22d3ee", fontWeight: 600 }}>beautiful</span> web apps that leave a lasting impression.
          </p>

          {/* Buttons */}
          <div className="hero-btns" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 32px", borderRadius: "8px",
                fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                fontSize: "0.95rem", fontWeight: 600,
                color: "#fff", textDecoration: "none",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                boxShadow: "0 0 20px rgba(124,58,237,0.5)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 35px rgba(124,58,237,0.8), 0 0 60px rgba(168,85,247,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(124,58,237,0.5)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View My Work →
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 32px", borderRadius: "8px",
                fontFamily: "var(--font-body), Space Grotesk, sans-serif",
                fontSize: "0.95rem", fontWeight: 600,
                color: "#a855f7", textDecoration: "none",
                background: "transparent",
                border: "1px solid rgba(168,85,247,0.6)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.12)";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(168,85,247,0.45)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="hero-scroll" style={{
            display: "flex", alignItems: "center", gap: "12px",
            color: "#475569",
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: "0.75rem", letterSpacing: "0.1em",
          }}>
            <div style={{
              width: "40px", height: "1px",
              background: "linear-gradient(90deg, #7c3aed, transparent)",
            }} />
            Scroll to explore
          </div>
        </div>

        {/* ── RIGHT: Orbit System ── */}
        <div
          ref={orbitRef}
          className="hero-graphic hidden md:flex"
          style={{
            alignItems: "center", justifyContent: "center",
            position: "relative", width: "400px", height: "400px",
          }}
        >
          {/* Orbit ring 1 */}
          <div style={{
            position: "absolute",
            width: "320px", height: "320px", borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.15)",
          }} />
          {/* Orbit ring 2 */}
          <div style={{
            position: "absolute",
            width: "240px", height: "240px", borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.1)",
          }} />

          {/* Floating tech tags */}
          {orbitTags.map((tag, i) => {
            const rad = (tagAngles[i] * Math.PI) / 180;
            const x = Math.cos(rad) * tag.radius;
            const y = Math.sin(rad) * tag.radius;
            return (
              <div
                key={tag.label}
                style={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  display: "flex", alignItems: "center", gap: "6px",
                  background: "rgba(14,14,26,0.9)",
                  border: `1px solid ${tag.color}44`,
                  borderRadius: "8px", padding: "7px 12px",
                  whiteSpace: "nowrap",
                  boxShadow: `0 0 12px ${tag.color}22`,
                  transition: "box-shadow 0.3s",
                  zIndex: 3,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${tag.color}66`;
                  e.currentTarget.style.borderColor = `${tag.color}88`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 12px ${tag.color}22`;
                  e.currentTarget.style.borderColor = `${tag.color}44`;
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>{tag.icon}</span>
                <span style={{
                  fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                  fontSize: "0.78rem", color: "#f1f5f9", fontWeight: 500,
                }}>
                  {tag.label}
                </span>
              </div>
            );
          })}

          {/* Center avatar */}
          <div style={{
            position: "relative", zIndex: 2,
            width: "120px", height: "120px", borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(124,58,237,0.4)",
            border: "2px solid rgba(168,85,247,0.5)",
          }}>
            <span style={{
              fontFamily: "var(--font-cyber), Syne, sans-serif",
              fontSize: "2rem", fontWeight: 800, color: "#ffffff",
            }}>
              AK
            </span>
            {/* Pulse ring */}
            <div style={{
              position: "absolute", inset: "-8px", borderRadius: "50%",
              border: "1px solid rgba(168,85,247,0.4)",
              animation: "pulse-ring 2s ease-out infinite",
            }} />
            <div style={{
              position: "absolute", inset: "-16px", borderRadius: "50%",
              border: "1px solid rgba(168,85,247,0.2)",
              animation: "pulse-ring 2s ease-out infinite",
              animationDelay: "0.5s",
            }} />
          </div>
        </div>

      </div>
    </section>
  );
}
