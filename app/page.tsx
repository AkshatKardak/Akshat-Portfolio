"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import CursorGlow from "../components/CursorGlow";

const sections = [
  { id: "dashboard", label: "Dashboard", component: <Dashboard /> },
  { id: "projects", label: "Projects", component: <Projects /> },
  { id: "skills", label: "Skills", component: <Skills /> },
  { id: "experience", label: "Experience", component: <Experience /> },
  { id: "certifications", label: "Certifications", component: <Certifications /> },
  { id: "contact", label: "Contact", component: <Contact /> },
] as const;

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded || !mainRef.current) return;

    const root = mainRef.current;
    const observedSections = sections
      .map(({ id }) => root.querySelector<HTMLElement>(`#${id}`))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!observedSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root,
        rootMargin: "-22% 0px -38% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [loaded]);

  const scrollToSection = useCallback((sectionId: string) => {
    const root = mainRef.current;
    const target = root?.querySelector<HTMLElement>(`#${sectionId}`);

    if (!root || !target) return;

    setActiveSection(sectionId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <Navbar active={activeSection} setActive={scrollToSection} />

        <main
          id="main-content"
          ref={mainRef}
          className="main-scroll"
          style={{
            minWidth: 0,
            minHeight: "100dvh",
            position: "relative",
          }}
        >
          <div className="content-panel">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="portfolio-section"
                data-section={section.id}
              >
                {section.component}
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
