"use client";

import { useEffect, useState } from "react";

const lines = [
  "booting developer shell",
  "mapping projects and certifications",
  "warming technical stack interface",
];

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
      setPhase((current) => Math.min(current + 1, lines.length - 1));
    }, 720);

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
            <span className="loader-logo-mark">AK</span>
            <span>secure session</span>
          </div>
          <span>{Math.round(progress)}% online</span>
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
            {lines.slice(0, phase + 1).map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <span className="animate-blink">_</span>
            </p>
          </div>
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
