"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "UNITEDIMPACT",
    desc: "A social impact platform connecting volunteers with NGOs. Built with MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    color: "#b366ff",
    link: "#",
  },
  {
    title: "CAMPUS DROP",
    desc: "Smart campus cab-sharing platform for college students with real-time tracking.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    color: "#00fafe",
    link: "#",
  },
  {
    title: "CAR RENTAL",
    desc: "Full-featured car rental booking system with admin dashboard and payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "#ff2d6e",
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      opacity: 0, y: 60, stagger: 0.2, duration: 0.8,
      scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <section id="projects" ref={ref} className="relative z-10 py-32 px-8 md:px-20">
      <p className="font-mono text-cyber-cyan text-xs tracking-[0.3em] mb-3">
        &gt; PROJECTS.map()
      </p>
      <h2 className="font-cyber font-bold text-4xl text-white mb-12">
        MY <span className="text-cyber-purple text-neon-purple">WORK</span>
      </h2>

      <div className="projects-grid grid md:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card group relative p-6 bg-cyber-dark2 border border-white/10 hover:border-opacity-100 transition-all duration-500 overflow-hidden"
            style={{ borderColor: `${project.color}44` }}
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
              style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

            <h3 className="font-cyber font-bold text-lg mb-3 transition-colors duration-300"
              style={{ color: project.color, textShadow: `0 0 10px ${project.color}88` }}>
              {project.title}
            </h3>

            <p className="font-mono text-gray-400 text-xs leading-relaxed mb-5">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-2 py-1 border border-white/10 text-gray-500">
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.link}
              className="font-cyber text-[10px] tracking-widest transition-colors duration-300"
              style={{ color: project.color }}>
              VIEW PROJECT →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
