"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "2rem 1.5rem",
        textAlign: "center",
        color: "rgba(255,255,255,0.45)",
        fontSize: "0.85rem",
        letterSpacing: "0.04em",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Mulund, Maharashtra, India
        </span>

        <span>
          © 2026 Akshat Kardak. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
