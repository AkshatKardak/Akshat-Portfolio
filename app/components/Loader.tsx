"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const lines = [
    "> Initializing portfolio...",
    "> Loading components...",
    "> Ready.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 8 + 2;
      });
    }, 60);

    const p1 = setTimeout(() => setPhase(1), 600);
    const p2 = setTimeout(() => setPhase(2), 1400);
    const p3 = setTimeout(() => setPhase(3), 2200);

    return () => { clearInterval(interval); clearTimeout(p1); clearTimeout(p2); clearTimeout(p3); };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        gap: "var(--space-6)",
      }}
    >
      {/* Logo Mark */}
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-label="AK logo">
        <rect width="48" height="48" rx="12" fill="var(--accent-dim)" stroke="var(--accent)" strokeWidth="1.5" />
        <path d="M14 34L22 14H26L34 34" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 28H31" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Terminal Lines */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-sm)",
          color: "var(--text-muted)",
          textAlign: "left",
          minWidth: "280px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-2)",
        }}
      >
        {lines.slice(0, phase + 1).map((line, i) => (
          <div
            key={i}
            style={{
              color: i === phase ? "var(--accent)" : "var(--text-muted)",
              animation: "fadeUp 0.3s ease forwards",
            }}
          >
            {line}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: 280,
          height: 2,
          background: "var(--surface-active)",
          borderRadius: "var(--radius-full)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, var(--accent), var(--violet))",
            borderRadius: "var(--radius-full)",
            transition: "width 0.1s ease",
            boxShadow: "0 0 8px var(--accent-glow)",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}