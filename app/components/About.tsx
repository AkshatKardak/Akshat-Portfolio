"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-content", {
      opacity: 0, y: 60, duration: 1,
      scrollTrigger: { trigger: ".about-content", start: "top 80%" },
    });
  }, { scope: ref });

  return (
    <section id="about" ref={ref} className="relative z-10 py-32 px-8 md:px-20">
      <div className="about-content max-w-4xl mx-auto">
        <p className="font-mono text-cyber-cyan text-xs tracking-[0.3em] mb-3">
          &gt; ABOUT.exe
        </p>
        <h2 className="font-cyber font-bold text-4xl text-white mb-8">
          WHO AM <span className="text-cyber-purple text-neon-purple">I</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="cyber-border p-6 bg-cyber-dark2">
            <p className="font-mono text-gray-300 text-sm leading-relaxed">
              I'm <span className="text-cyber-purple">Akshat Kardak</span>, a passionate Full Stack Developer
              from Mumbai, currently in my 3rd year of B.Tech at TCET. I love building
              clean, fast, and visually stunning web applications.
            </p>
            <p className="font-mono text-gray-400 text-sm leading-relaxed mt-4">
              From hackathons to open-source contributions, I'm always pushing the limits
              of what's possible on the web. My work includes projects like{" "}
              <span className="text-cyber-cyan">UnitedImpact</span>,{" "}
              <span className="text-cyber-cyan">Campus Drop</span>, and{" "}
              <span className="text-cyber-cyan">Car Rental</span> platforms.
            </p>
          </div>

          <div className="cyber-border-cyan p-6 bg-cyber-dark2 font-mono text-sm">
            {[
              ["NAME", "Akshat Kardak"],
              ["ROLE", "Full Stack Developer"],
              ["COLLEGE", "TCET Mumbai"],
              ["YEAR", "3rd Year B.Tech"],
              ["EMAIL", "kardakakshat@gmail.com"],
              ["STATUS", "Open to Opportunities ✅"],
            ].map(([key, val]) => (
              <div key={key} className="flex gap-4 py-2 border-b border-white/5">
                <span className="text-cyber-purple w-20 shrink-0">{key}</span>
                <span className="text-gray-300">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
