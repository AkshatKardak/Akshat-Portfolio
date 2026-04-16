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
    <div className="relative min-h-dvh bg-bg overflow-hidden flex">
      {/* Background Elements */}
      <div className="mesh-bg fixed inset-0 pointer-events-none z-0">
        <div className="mesh-blob-3 opacity-40" />
      </div>
      <CursorGlow />

      {/* Main Layout Container */}
      <div className="relative z-10 flex w-full h-dvh overflow-hidden">
        <Sidebar active={activeSection} setActive={setActiveSection} />

        {/* Main Content Area */}
        <main 
          className="flex-1 overflow-y-auto h-full relative"
          id="main-content"
          style={{ scrollPaddingTop: '2rem' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-8 md:px-12 md:py-16 mx-auto w-full max-w-[1200px]"
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
        className="md:hidden fixed bottom-0 left-0 right-0 z-[100] flex border-t border-border"
        style={{ 
          backgroundColor: 'rgba(5, 8, 16, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        {["dashboard","projects","skills","experience","contact"].map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            className={`flex-1 flex flex-col items-center gap-1.5 py-3 capitalize transition-colors ${
              activeSection === s ? "text-accent" : "text-text-muted hover:text-text"
            }`}
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">{s.slice(0, 3)}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
