"use client";

import { useEffect, useRef } from "react";

type CursorMode = "default" | "interactive" | "text";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;

    if (!dot || !glow || window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let glowX = currentX;
    let glowY = currentY;
    let targetX = currentX;
    let targetY = currentY;
    let mode: CursorMode = "default";

    const applyMode = (nextMode: CursorMode) => {
      if (nextMode === mode) return;
      mode = nextMode;

      if (mode === "interactive") {
        dot.style.width = "18px";
        dot.style.height = "18px";
        dot.style.background = "rgba(79, 156, 255, 0.9)";
        glow.style.background =
          "radial-gradient(circle, rgba(79, 156, 255, 0.18) 0%, rgba(79, 156, 255, 0.1) 36%, transparent 72%)";
      } else if (mode === "text") {
        dot.style.width = "6px";
        dot.style.height = "18px";
        dot.style.background = "rgba(230, 237, 243, 0.9)";
        glow.style.background =
          "radial-gradient(circle, rgba(79, 156, 255, 0.12) 0%, rgba(79, 156, 255, 0.06) 36%, transparent 72%)";
      } else {
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.background = "rgba(79, 156, 255, 1)";
        glow.style.background =
          "radial-gradient(circle, rgba(79, 156, 255, 0.14) 0%, rgba(79, 156, 255, 0.08) 36%, transparent 72%)";
      }
    };

    const detectMode = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        applyMode("default");
        return;
      }

      if (target.closest("button, a, input, textarea, select, .glass-card")) {
        applyMode("interactive");
        return;
      }

      if (target.closest("p, span, h1, h2, h3, h4, h5, h6, code, pre, li, label")) {
        applyMode("text");
        return;
      }

      applyMode("default");
    };

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.body.classList.add("cursor-active");
      detectMode(event.target);
    };

    const handleOver = (event: MouseEvent) => {
      detectMode(event.target);
    };

    const handleLeave = () => {
      document.body.classList.remove("cursor-active");
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.32;
      currentY += (targetY - currentY) * 0.32;
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;

      dot.style.transform = `translate3d(${currentX - dot.offsetWidth / 2}px, ${currentY - dot.offsetHeight / 2}px, 0)`;
      glow.style.transform = `translate3d(${glowX - 140}px, ${glowY - 140}px, 0)`;
      raf = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseout", (event) => {
      if (!(event.relatedTarget instanceof Node)) {
        handleLeave();
      }
    });

    raf = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
