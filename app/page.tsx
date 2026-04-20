"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Loader         from "../components/Loader";
import Navbar         from "../components/Navbar";
import Dashboard      from "../components/Dashboard";
import About          from "../components/About";       // ← ADD IMPORT
import Projects       from "../components/Projects";
import Skills         from "../components/Skills";
import Experience     from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact        from "../components/Contact";
import CursorGlow     from "../components/CursorGlow";
import BackgroundFX   from "../components/BackgroundFX";

const SECTIONS = [
  { id: "home",           label: "Home",           component: <Dashboard /> },
  { id: "about",          label: "About",          component: <About /> },         // ← ADD
  { id: "projects",       label: "Projects",       component: <Projects /> },
  { id: "skills",         label: "Skills",         component: <Skills /> },
  { id: "experience",     label: "Experience",     component: <Experience /> },
  { id: "certifications", label: "Certification",  component: <Certifications /> },
  { id: "contact",        label: "Contact",        component: <Contact /> },
] as const;

type SectionId = typeof SECTIONS[number]["id"];

export default function Home() {
  const [loaded,         setLoaded]        = useState(false);
  const [activeSection,  setActiveSection] = useState<SectionId>("home");
  const mainRef = useRef<HTMLElement | null>(null);

  /* ── Loader timer ─────────────────────────────────────── */
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2400); // Sync with progress bar
    return () => clearTimeout(t);
  }, []);

  /* ── Intersection observer for active nav ─────────────── */
  useEffect(() => {
    if (!loaded || !mainRef.current) return;
    const root = mainRef.current;

    const els = SECTIONS
      .map(({ id }) => root.querySelector<HTMLElement>(`#${id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        root,
        rootMargin: "-22% 0px -38% 0px",
        threshold: [0.1, 0.3, 0.5],
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [loaded]);

  /* ── Scroll to section ────────────────────────────────── */
  const scrollToSection = useCallback((id: string) => {
    const root   = mainRef.current;
    const target = root?.querySelector<HTMLElement>(`#${id}`);
    if (!root || !target) return;
    setActiveSection(id as SectionId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="site-shell">
      <Loader loaded={loaded} />

      {/* ── Layer 0: Canvas particles + streaks ──────────── */}
      <BackgroundFX />

      {/* ── Layer 1: Grain texture ────────────────────────── */}
      <div className="bg-grain" aria-hidden="true" />

      {/* ── Layer 2: Corner vignette ──────────────────────── */}
      <div className="bg-vignette" aria-hidden="true" />

      {/* ── Layer 3: Custom cursor ────────────────────────── */}
      <CursorGlow />

      {/* ── Layer 4: Main content shell ───────────────────── */}
      <div className="content-shell">
        <Navbar active={activeSection} setActive={scrollToSection} />

        <main
          id="main-content"
          ref={mainRef}
          style={{ minWidth: 0, position: "relative" }}
        >
          <div className="content-panel">
  {SECTIONS.map(({ id, component }) => (
    <section key={id} id={id} className="section">
      <div className="content-container">
        {component}
      </div>
    </section>
  ))}
</div>
        </main>
      </div>
    </div>
  );
}