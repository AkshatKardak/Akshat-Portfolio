"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const messages = [
  "Initializing modules...",
  "Loading components...",
  "Compiling UI...",
  "Starting system..."
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "MERN"];

export default function Loader({ loaded }: { loaded: boolean }) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      if (i < messages.length) {
        setLines(prev => [...prev, messages[i]]);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 500);

    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(prog);
          return 100;
        }
        return Math.min(p + 3, 100);
      });
    }, 60);

    return () => {
      clearInterval(typing);
      clearInterval(prog);
    };
  }, []);

  return (
    <div className={`loader-screen ${loaded ? "opacity-0 scale-95 pointer-events-none" : ""}`}>
      <div className="loader-card">

        <div className="loader-top">
          <div className="loader-logo">
            <Image src="/images/AK.png" alt="logo" width={24} height={24} />
            <div>
              <p className="loader-logo-title">Akshat Kardak</p>
              <p className="loader-logo-subtitle">Full Stack Developer</p>
            </div>
          </div>
          <span className="font-mono text-sm">{progress}%</span>
        </div>

        <div className="loader-hero">
          <h1>Precision in motion.</h1>
          <p>Crafting a premium developer experience...</p>
        </div>

        <div className="loader-terminal">
          <div className="loader-terminal-head">
            <span>akshat@system</span>
            <span>~</span>
          </div>

          <div className="loader-lines">
            {lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="loader-stack">
          {stack.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="loader-progress">
          <div className="loader-progress-meta">
            <span>boot sequence</span>
            <span>{progress}/100</span>
          </div>
          <div className="loader-bar">
            <span 
              style={{ 
                width: `${progress}%`,
                transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}