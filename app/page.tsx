"use client";

import { useEffect, useState } from "react";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Loader from "./components/Loader";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const sections = [
  "dashboard",
  "projects",
  "skills",
  "experience",
  "certifications",
  "contact",
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <>
      <div className="mesh-bg">
        <div className="mesh-blob-3" />
      </div>

      <CursorGlow />

      <div className="app-shell">
        <Sidebar active={activeSection} setActive={setActiveSection} />

        <main className="main-content" id="main-content">
          {activeSection === "dashboard" && <Dashboard onViewProjects={() => setActiveSection("projects")} />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "contact" && <Contact />}
        </main>
      </div>

      <nav className="mobile-bottom-nav glass-panel">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={activeSection === section ? "mobile-nav-item is-active" : "mobile-nav-item"}
            aria-label={`Open ${section}`}
          >
            {section.slice(0, 4)}
          </button>
        ))}
      </nav>
    </>
  );
}
