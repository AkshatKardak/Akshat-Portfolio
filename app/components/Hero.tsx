"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-tag",   { opacity: 0, y: 20, duration: 0.6 })
      .from(".hero-name",  { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
      .from(".hero-role",  { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(".hero-desc",  { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-btns",  { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(".hero-photo", { opacity: 0, scale: 0.85, duration: 1, ease: "power3.out" }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-10 min-h-screen flex items-center justify-between px-8 md:px-20 pt-24"
    >
      {/* LEFT — Text */}
      <div className="flex flex-col gap-5 max-w-xl">
        <p className="hero-tag font-mono text-cyber-cyan text-sm tracking-[0.3em]">
          &gt; INITIALIZING PORTFOLIO_v2.0...
        </p>

        <h1
          className="hero-name glitch font-cyber font-black text-5xl md:text-7xl text-white leading-tight"
          data-text="AKSHAT"
        >
          AKSHAT
        </h1>

        <p className="hero-role font-cyber text-cyber-purple text-xl md:text-2xl tracking-widest text-neon-purple">
          FULL STACK DEVELOPER
        </p>

        <p className="hero-desc font-mono text-gray-400 text-sm leading-relaxed max-w-md">
          Building immersive digital experiences with React, Next.js & Node.js.
          MERN stack specialist. Currently pursuing B.Tech @ TCET Mumbai.
        </p>

        <div className="hero-btns flex gap-4 mt-2">
          <a
            href="#projects"
            className="font-cyber text-xs px-6 py-3 bg-cyber-purple text-black font-bold tracking-widest hover:bg-cyber-cyan transition-all duration-300 neon-purple"
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="font-cyber text-xs px-6 py-3 border border-cyber-cyan text-cyber-cyan tracking-widest hover:bg-cyber-cyan hover:text-black transition-all duration-300"
          >
            CONTACT ME
          </a>
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="hero-photo hidden md:block relative w-72 h-80 corner-brackets">
        {/* Neon border */}
        <div className="absolute inset-0 rounded-sm border border-cyber-purple neon-purple z-10" />
        {/* Scanline on photo */}
        <div className="scanlines absolute inset-0 z-20 rounded-sm" />
        {/* Photo */}
        <Image
          src="/images/your-photo.png"
          alt="Akshat Kardak"
          fill
          className="object-cover object-top rounded-sm grayscale hover:grayscale-0 transition-all duration-700 z-0"
          priority
        />
        {/* Bottom label */}
        <div className="absolute -bottom-6 left-0 right-0 text-center z-30">
          <span className="font-mono text-[10px] text-cyber-cyan tracking-[0.3em]">
            [ AKSHAT KARDAK ]
          </span>
        </div>
      </div>
    </section>
  );
}
