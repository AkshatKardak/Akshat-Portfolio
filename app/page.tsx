"use client";

import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <>
      <div className="mesh-bg">
        <div className="mesh-blob-3" />
      </div>
      <CursorGlow />
      <div
        style={{
          display: "flex",
          minHeight: "100dvh",
          position: "relative",
          zIndex: 1,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Sidebar active={activeSection} setActive={setActiveSection} />
        <main
          style={{
            flex: 1,
            marginLeft: "240px",
            overflowY: "auto",
            height: "100dvh",
            width: "calc(100% - 240px)",
            position: "relative",
          }}
          id="main-content"
        >
          {activeSection === "dashboard"      && <Dashboard />}
          {activeSection === "projects"       && <Projects />}
          {activeSection === "skills"         && <Skills />}
          {activeSection === "experience"     && <Experience />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "contact"        && <Contact />}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="mobile-bottom-nav">
        {["dashboard","projects","skills","experience","contact"].map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-1)",
              fontSize: "var(--text-xs)",
              color: activeSection === s ? "var(--accent)" : "var(--text-muted)",
              padding: "var(--space-2)",
              textTransform: "capitalize",
              transition: "color var(--transition-fast)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {s.slice(0, 3)}
          </button>
        ))}
      </nav>

      <style>{`
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: rgba(11,15,25,0.92);
          backdrop-filter: blur(16px);
          border-top: 1px solid var(--border);
          padding: var(--space-2) 0;
          z-index: 100;
        }
        @media (max-width: 768px) {
          main { margin-left: 0 !important; padding-bottom: 64px; }
          aside { display: none !important; }
          .mobile-bottom-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}
