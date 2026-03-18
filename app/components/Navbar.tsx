"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, ease: "power3.out" });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-purple/30" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="#home" className="font-cyber font-black text-xl text-cyber-purple text-neon-purple tracking-widest">
        AK<span className="text-cyber-cyan">.</span>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-mono text-xs tracking-widest text-gray-400 hover:text-cyber-cyan transition-colors duration-300 hover:text-neon-cyan relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyber-cyan group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/resume.pdf"
        target="_blank"
        className="hidden md:block font-cyber text-xs px-4 py-2 border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black transition-all duration-300 tracking-widest neon-purple"
      >
        RESUME
      </a>
    </nav>
  );
}
