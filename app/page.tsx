"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import CursorGlow from "../components/CursorGlow";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <div
      className="site-shell"
      style={{
        position: "relative",
        minHeight: "100dvh",
        overflowX: "hidden",
        display: "flex",
      }}
    >
      {/* Gradient Mesh Background */}
      <div className="site-mesh" aria-hidden="true">
        <div className="mesh-blob one" />
        <div className="mesh-blob two" />
        <div className="mesh-blob three" />
      </div>

      <CursorGlow />

      {/* Layout */}
      <div className="content-shell">
        <Sidebar active={activeSection} setActive={setActiveSection} />

        <main
          id="main-content"
          style={{
            minWidth: 0,
            minHeight: "100dvh",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="content-panel"
            >
              {activeSection === "dashboard"      && <Dashboard />}
              {activeSection === "projects"       && <Projects />}
              {activeSection === "skills"         && <Skills />}
              {activeSection === "experience"     && <Experience />}
              {activeSection === "certifications" && <Certifications />}
              {activeSection === "contact"        && <Contact />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav
        className="mobile-bottom-nav"
        style={{
          display: "none",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(5,8,16,0.90)",
        }}
      >
        {["dashboard","projects","skills","experience","contact"].map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "10px 0",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: activeSection === s ? "#3b82f6" : "rgba(240,244,248,0.5)",
              transition: "color 150ms ease",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {s.slice(0, 3)}
          </button>
        ))}
      </nav>
    </div>
  );
}
