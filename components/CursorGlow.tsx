"use client";

import { useEffect, useRef } from "react";

type CursorMode = "default" | "interactive" | "text" | "hidden";

export default function CursorGlow() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot   = dotRef.current;
    const ring  = ringRef.current;
    const glow  = glowRef.current;
    const label = labelRef.current;

    if (!dot || !ring || !glow || !label) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Hide native cursor globally
    document.documentElement.style.cursor = "none";

    let raf = 0;
    let mx = window.innerWidth / 2,  my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let gx = mx, gy = my;
    let mode: CursorMode = "default";
    let currentLabel = "";

    const setMode = (next: CursorMode, lbl = "") => {
      if (next === mode && lbl === currentLabel) return;
      mode = next;
      currentLabel = lbl;

      // dot
      if (next === "text") {
        dot.style.cssText = `
          width: 3px; height: 18px; border-radius: 2px;
          background: var(--accent); opacity: 0.9;
          box-shadow: 0 0 8px rgba(245,158,11,0.6);
        `;
      } else if (next === "interactive") {
        dot.style.cssText = `
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent); opacity: 1;
          box-shadow: 0 0 12px rgba(245,158,11,0.8);
        `;
      } else if (next === "hidden") {
        dot.style.opacity = "0";
      } else {
        dot.style.cssText = `
          width: 5px; height: 5px; border-radius: 50%;
          background: #fff; opacity: 0.9;
          box-shadow: 0 0 6px rgba(255,255,255,0.5);
        `;
      }

      // ring
      if (next === "interactive") {
        ring.style.width  = "52px";
        ring.style.height = "52px";
        ring.style.borderColor = "rgba(245,158,11,0.55)";
        ring.style.background  = "rgba(245,158,11,0.05)";
        ring.style.mixBlendMode = "normal";
      } else if (next === "text") {
        ring.style.width  = "28px";
        ring.style.height = "28px";
        ring.style.borderColor = "rgba(245,158,11,0.30)";
        ring.style.background  = "transparent";
        ring.style.mixBlendMode = "normal";
      } else if (next === "hidden") {
        ring.style.opacity = "0";
      } else {
        ring.style.width  = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(245,158,11,0.25)";
        ring.style.background  = "transparent";
        ring.style.mixBlendMode = "normal";
        ring.style.opacity = "1";
      }

      // label inside ring
      label.textContent = lbl;
      label.style.opacity = lbl ? "1" : "0";
    };

    const detect = (target: EventTarget | null) => {
      if (!(target instanceof Element)) { setMode("default"); return; }

      const btn = target.closest("button, a, [role='button']");
      if (btn) {
        const lbl = (btn as HTMLElement).dataset.cursorLabel ?? "";
        setMode("interactive", lbl);
        return;
      }

      if (target.closest("input, textarea, select")) {
        setMode("text"); return;
      }

      if (target.closest("p, span, h1, h2, h3, h4, h5, h6, li, label, code, pre")) {
        setMode("text"); return;
      }

      if (target.closest(".glass-card")) {
        setMode("interactive", "view"); return;
      }

      setMode("default");
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      detect(e.target);
    };

    const onLeave = () => {
      dot.style.opacity  = "0";
      ring.style.opacity = "0";
      glow.style.opacity = "0";
    };

    const onEnter = () => {
      dot.style.opacity  = "";
      ring.style.opacity = "";
      glow.style.opacity = "";
    };

    const loop = () => {
      // dot snaps fast
      const dSnap = 0.38;
      const dx = mx - parseFloat(dot.dataset.x ?? String(mx));
      const dy = my - parseFloat(dot.dataset.y ?? String(my));
      const nx = (parseFloat(dot.dataset.x ?? String(mx))) + dx * dSnap;
      const ny = (parseFloat(dot.dataset.y ?? String(my))) + dy * dSnap;
      dot.dataset.x = String(nx);
      dot.dataset.y = String(ny);
      dot.style.transform = `translate3d(${nx - parseFloat(dot.style.width)/2}px, ${ny - parseFloat(dot.style.height)/2}px, 0)`;

      // ring lags smoothly
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      const rw = parseFloat(ring.style.width);
      const rh = parseFloat(ring.style.height);
      ring.style.transform = `translate3d(${rx - rw/2}px, ${ry - rh/2}px, 0)`;

      // glow lags even more
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      glow.style.transform = `translate3d(${gx - 160}px, ${gy - 160}px, 0)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove,  { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Ambient glow blob */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 320, height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.055) 0%, rgba(245,158,11,0.02) 45%, transparent 72%)",
          pointerEvents: "none",
          zIndex: 9997,
          willChange: "transform",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Outer lagging ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: "50%",
          border: "1px solid rgba(245,158,11,0.25)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform, width, height",
          transition: "width 0.22s cubic-bezier(0.16,1,0.3,1), height 0.22s cubic-bezier(0.16,1,0.3,1), border-color 0.22s ease, background 0.22s ease, opacity 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,158,11,0.85)",
            opacity: 0,
            transition: "opacity 0.18s ease",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Sharp center dot */}
      <div
        ref={dotRef}
        data-x="0"
        data-y="0"
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 5, height: 5,
          borderRadius: "50%",
          background: "#fff",
          opacity: 0.9,
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "width 0.18s cubic-bezier(0.16,1,0.3,1), height 0.18s cubic-bezier(0.16,1,0.3,1), border-radius 0.18s ease, background 0.18s ease, box-shadow 0.18s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}