"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React.js",    level: 90, color: "#00fafe" },
  { name: "Next.js",     level: 85, color: "#b366ff" },
  { name: "Node.js",     level: 80, color: "#00fafe" },
  { name: "TypeScript",  level: 75, color: "#b366ff" },
  { name: "MongoDB",     level: 80, color: "#00fafe" },
  { name: "Tailwind CSS",level: 90, color: "#b366ff" },
  { name: "Three.js",    level: 60, color: "#00fafe" },
  { name: "GSAP",        level: 65, color: "#ff2d6e" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".skill-card", {
      opacity: 0, y: 40, stagger: 0.1, duration: 0.7,
      scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
    });
    gsap.from(".skill-bar-fill", {
      scaleX: 0, stagger: 0.1, duration: 1, ease: "power3.out",
      transformOrigin: "left center",
      scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <section id="skills" ref={ref} className="relative z-10 py-32 px-8 md:px-20">
      <p className="font-mono text-cyber-cyan text-xs tracking-[0.3em] mb-3">
        &gt; SKILLS.json
      </p>
      <h2 className="font-cyber font-bold text-4xl text-white mb-12">
        TECH <span className="text-cyber-purple text-neon-purple">STACK</span>
      </h2>

      <div className="skills-grid grid md:grid-cols-2 gap-5 max-w-4xl">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card cyber-border p-5 bg-cyber-dark2">
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-sm text-gray-200">{skill.name}</span>
              <span className="font-cyber text-xs" style={{ color: skill.color }}>
                {skill.level}%
              </span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="skill-bar-fill h-full rounded-full"
                style={{ width: `${skill.level}%`, backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
