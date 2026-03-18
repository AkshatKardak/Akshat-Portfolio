"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-badge",  { opacity: 0, y: 20, duration: 0.6 })
      .from(".hero-name",   { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
      .from(".hero-role",   { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(".hero-desc",   { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-btns",   { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-scroll", { opacity: 0,         duration: 0.6 }, "-=0.2")
      .from(".hero-photo",  { opacity: 0, scale: 0.85, duration: 1, ease: "power3.out" }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 28px 60px", maxWidth: "1200px", margin: "0 auto", gap: "60px" }}
    >
      {/* Floating background orbs */}
      <div style={{
        position: "fixed", top: "-100px", right: "-150px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
        filter: "blur(100px)", pointerEvents: "none", zIndex: 0,
        animation: "float-orb 10s ease-in-out infinite",
      }} />
      <div style={{
        position: "fixed", bottom: 0, left: "-100px",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)",
        filter: "blur(100px)", pointerEvents: "none", zIndex: 0,
        animation: "float-orb 10s ease-in-out infinite",
        animationDelay: "-4s",
      }} />

      {/* LEFT — Text */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div className="hero-badge" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(34,197,94,0.08)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "100px", padding: "6px 16px", width: "fit-content",
        }}>
          <span style={{
            width: "7px", height: "7px", background: "#22c55e",
            borderRadius: "50%", boxShadow: "0 0 8px #22c55e",
            animation: "blink 1.2s ease-in-out infinite",
            display: "inline-block",
          }} />
          <span style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: "0.78rem", color: "#86efac",
          }}>
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div>
          <p style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: "1rem", color: "#94a3b8", marginBottom: "6px",
          }}>
            Hi, I&apos;m
          </p>
          <h1
            className="hero-name glitch"
            data-text="Akshat Kardak"
            style={{
              fontFamily: "var(--font-cyber), Syne, sans-serif",
              fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Akshat Kardak
          </h1>
        </div>

        {/* Role */}
        <p className="hero-role" style={{
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: "clamp(1rem, 2vw, 1.3rem)",
          color: "#c084fc",
          textShadow: "0 0 10px rgba(168,85,247,0.5)",
          letterSpacing: "0.05em",
        }}>
          Full Stack Developer
          <span style={{ color: "#a855f7", animation: "blink 0.9s step-end infinite" }}> _</span>
        </p>

        {/* Description */}
        <p className="hero-desc" style={{
          fontFamily: "var(--font-body), Space Grotesk, sans-serif",
          fontSize: "1.05rem", lineHeight: 1.75,
          color: "#94a3b8", maxWidth: "500px",
        }}>
          Building immersive digital experiences with React, Next.js &amp; Node.js.
          MERN stack specialist. Currently pursuing B.Tech @ TCET Mumbai.
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
            View My Work <span>→</span>
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
              boxShadow: "inset 0 0 20px rgba(124,58,237,0.05)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,58,237,0.12)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(168,85,247,0.45)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "inset 0 0 20px rgba(124,58,237,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll" style={{
          display: "flex", alignItems: "center", gap: "12px",
          color: "#475569",
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: "0.75rem", letterSpacing: "0.1em", marginTop: "8px",
        }}>
          <div style={{
            width: "40px", height: "1px",
            background: "linear-gradient(90deg, #7c3aed, transparent)",
          }} />
          SCROLL DOWN
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="hero-photo hidden md:flex" style={{
        width: "340px", height: "340px", flexShrink: 0,
        alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        {/* Orbit rings */}
        {[100, 75, 52].map((size, i) => (
          <div key={i} style={{
            position: "absolute",
            width: `${size}%`, height: `${size}%`,
            borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.2)",
            animation: `spin ${[14,10,7][i]}s linear infinite`,
            animationDirection: i === 1 ? "reverse" : "normal",
          }} />
        ))}
        {/* Core */}
        <div style={{
          position: "relative", width: "180px", height: "180px",
          borderRadius: "50%", overflow: "hidden",
          border: "2px solid rgba(168,85,247,0.5)",
          boxShadow: "0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(124,58,237,0.4)",
          zIndex: 2,
        }}>
          <Image
            src="/images/your-photo.png"
            alt="Akshat Kardak"
            fill
            className="object-cover object-top transition-all duration-700"
            priority
          />
        </div>
      </div>
    </section>
  );
}
