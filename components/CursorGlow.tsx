"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let raf: number;
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    let tx = cx, ty = cy;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const animate = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,156,255,0.10) 0%, rgba(79,156,255,0.04) 40%, transparent 70%)",
        pointerEvents: "none", zIndex: 0, willChange: "transform", mixBlendMode: "screen",
      }}
    />
  );
}