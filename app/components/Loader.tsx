"use client";

import { useEffect, useState } from "react";

const bootSteps = [
  { label: "Identity", value: "Akshat Kardak" },
  { label: "Stack", value: "MERN + Next.js" },
  { label: "Mode", value: "Portfolio online" },
];

const bootLines = [
  "mapping project graph",
  "warming interface layers",
  "syncing Mumbai timezone",
  "launching workspace",
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

        return Math.min(current + 4 + Math.random() * 7, 100);
      });
    }, 90);

    const phaseTimer = window.setInterval(() => {
      setPhase((current) => Math.min(current + 1, bootLines.length - 1));
    }, 620);

    return () => {
      window.clearInterval(progressTimer);
      window.clearInterval(phaseTimer);
    };
  }, []);

  return (
    <div className="loader-screen" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loader-grid" />

      <div className="loader-shell">
        <div className="loader-orbit" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="loader-mark" aria-label="AK">
          <svg viewBox="0 0 64 64" fill="none">
            <rect x="6" y="6" width="52" height="52" rx="8" />
            <path d="M19 45L29 19H35L45 45" />
            <path d="M23 37H41" />
            <path d="M42 20L31 33L45 45" />
          </svg>
        </div>

        <div className="loader-copy">
          <span className="loader-eyebrow">Initializing portfolio</span>
          <h1>Building the workspace</h1>
          <p>{bootLines[phase]}</p>
        </div>

        <div className="loader-status-row">
          {bootSteps.map((step, index) => (
            <div className="loader-status" key={step.label} style={{ animationDelay: `${index * 90}ms` }}>
              <span>{step.label}</span>
              <strong>{step.value}</strong>
            </div>
          ))}
        </div>

        <div className="loader-progress-wrap">
          <div className="loader-progress-meta">
            <span>Boot sequence</span>
            <strong>{Math.round(progress)}%</strong>
          </div>
          <div className="loader-progress">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
