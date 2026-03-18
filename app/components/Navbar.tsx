"use client";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ParticleCanvas from "./ParticleCanvas";

export default function Home() {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis!.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    initLenis();
    return () => { lenis?.destroy(); };
  }, []);

  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#050508" }}>

      {/* ── Layer 0: Particles ── */}
      <ParticleCanvas />

      {/* ── Layer 1: Floating orbs ── */}
      <div style={{
        position: "fixed", inset: 0,
        zIndex: 1, pointerEvents: "none", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "-150px", right: "-150px",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float-orb 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-100px", left: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float-orb 14s ease-in-out infinite",
          animationDelay: "-5s",
        }} />
        <div style={{
          position: "absolute",
          top: "40%", left: "35%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "float-orb 16s ease-in-out infinite",
          animationDelay: "-8s",
        }} />
      </div>

      {/* ── Layer 2: Grid ── */}
      <div style={{
        position: "fixed", inset: 0,
        zIndex: 1, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* ✅ Navbar — OUTSIDE content wrapper, owns its own z-index: 1000 */}
      <Navbar />

      {/* ── Layer 3: Page content ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </main>
  );
}
