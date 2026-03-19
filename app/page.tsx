"use client";
import { useEffect } from "react";
import Navbar        from "./components/Navbar";
import Hero          from "./components/Hero";
import About         from "./components/About";
import Skills        from "./components/Skills";
import Projects      from "./components/Projects";
import Contact       from "./components/Contact";
import ParticleCanvas from "./components/ParticleCanvas";

export default function Home() {
  useEffect(() => {
    let animId: number;
    let lenisInstance: { destroy: () => void } | null = null;

    const initLenis = async () => {
      const { default: Lenis } = await import("@studio-freight/lenis");
      const lenis = new Lenis({
        duration:        0.8,
        easing:          (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel:     true,
        wheelMultiplier: 1.2,
        touchMultiplier: 1.5,
      });
      lenisInstance = lenis;
      const raf = (time: number) => {
        lenis.raf(time);
        animId = requestAnimationFrame(raf);
      };
      animId = requestAnimationFrame(raf);
    };

    initLenis();
    return () => {
      cancelAnimationFrame(animId);
      lenisInstance?.destroy();
    };
  }, []);

  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#050508" }}>

      <ParticleCanvas />

      {/* Fiery orbs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-150px", right: "-150px",
          width: "700px", height: "700px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234,88,12,0.2) 0%, transparent 70%)",
          filter: "blur(80px)", animation: "float-orb 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", left: "-100px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)",
          filter: "blur(80px)", animation: "float-orb 14s ease-in-out infinite",
          animationDelay: "-5s",
        }} />
        <div style={{
          position: "absolute", top: "40%", left: "35%",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)",
          filter: "blur(80px)", animation: "float-orb 16s ease-in-out infinite",
          animationDelay: "-8s",
        }} />
      </div>

      {/* Fiery grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(234,88,12,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(234,88,12,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <Navbar />

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
