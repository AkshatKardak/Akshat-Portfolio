"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  "Initializing portfolio shell",
  "Loading projects and case studies",
  "Warming up motion and cursor layers",
  "Preparing the dashboard",
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "MERN"];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(progressTimer);
          return 100;
        }

        return Math.min(current + 4 + Math.random() * 6, 100);
      });
    }, 90);

    const phaseTimer = window.setInterval(() => {
      setPhase((current) => Math.min(current + 1, steps.length - 1));
    }, 460);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(phaseTimer);
    };
  }, []);

  return (
    <div className="loader-screen" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-card">
        <div className="loader-top">
          <div className="loader-logo">
            <span className="loader-logo-mark">
              <Image
                src="/images/AK.png"
                alt="AK logo"
                width={24}
                height={24}
                className="loader-logo-image"
              />
            </span>
            <div>
              <p className="loader-logo-title">Akshat Kardak</p>
              <p className="loader-logo-subtitle">Full Stack Developer</p>
            </div>
          </div>
          <span>{Math.round(progress)}% online</span>
        </div>

        <div className="loader-hero">
          <div className="loader-hero-ring" />
          <div className="loader-hero-copy">
            <p className="loader-kicker">Booting interface</p>
            <h1>Precision in motion.</h1>
            <p>
              A focused developer portfolio built to feel calm, sharp, and ready.
            </p>
          </div>
        </div>

        <div className="loader-terminal">
          <div className="loader-terminal-head">
            <div className="loader-dots">
              <span />
              <span />
              <span />
            </div>
            <span>akshat@portfolio:~</span>
          </div>

          <div className="loader-lines">
            {steps.slice(0, phase + 1).map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <span className="animate-blink">_</span>
            </p>
          </div>
        </div>

        <div className="loader-stack">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="loader-progress">
          <div className="loader-progress-meta">
            <span>boot sequence</span>
            <span>{Math.round(progress)}/100</span>
          </div>
          <div className="loader-bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
