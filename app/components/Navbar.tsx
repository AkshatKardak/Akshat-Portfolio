"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, ease: "power3.out" });
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? "12px 0" : "20px 0", transition: "all 0.4s ease", background: scrolled ? "rgba(5,5,8,0.88)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo — blue to orange gradient */}
        <Link href="#home" style={{ fontFamily: "var(--font-cyber)", fontWeight: 800, fontSize: "1.4rem", textDecoration: "none", background: "linear-gradient(135deg, #60a5fa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "0.05em" }}>
          AK<span style={{ WebkitTextFillColor: "#fbbf24" }}>.</span>
        </Link>

        <ul className="hidden md:flex" style={{ alignItems: "center", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 500, color: "#94a3b8", textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.3s, text-shadow 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color="#60a5fa"; e.currentTarget.style.textShadow="0 0 10px rgba(59,130,246,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color="#94a3b8"; e.currentTarget.style.textShadow="none"; }}
              >{link.label}</Link>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hidden md:block"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 600, padding: "9px 22px", borderRadius: "6px", border: "1px solid rgba(249,115,22,0.6)", color: "#f97316", background: "transparent", textDecoration: "none", transition: "all 0.3s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.background="rgba(249,115,22,0.12)"; e.currentTarget.style.boxShadow="0 0 14px rgba(249,115,22,0.5)"; e.currentTarget.style.transform="translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background="transparent"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}
        >Resume ↗</a>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", display: "flex", flexDirection: "column", gap: "5px", padding: "4px", cursor: "pointer" }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{ display: "block", width: "26px", height: "2px", background: "linear-gradient(90deg,#3b82f6,#f97316)", borderRadius: "2px", transition: "all 0.3s",
              transform: menuOpen ? i===0 ? "rotate(45deg) translate(5px,5px)" : i===2 ? "rotate(-45deg) translate(5px,-5px)" : "none" : "none",
              opacity: menuOpen && i===1 ? 0 : 1 }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(5,5,8,0.97)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px", zIndex: 999 }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "var(--font-cyber)", fontSize: "1.8rem", fontWeight: 700, textDecoration: "none", background: "linear-gradient(135deg,#60a5fa,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >{link.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
