"use client";

import { useEffect, useRef } from "react";

export default function HeroEnergyPulse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SIZE = 420;
    canvas.width  = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2;
    const cy = SIZE / 2;

    // Three pulsing rings at slightly offset phases
    const rings = [
      { baseR: 100, speed: 0.0018, phase: 0,            color: "245, 158, 11",  alpha: 0.28, width: 1.2 },
      { baseR: 148, speed: 0.0014, phase: Math.PI * 0.6, color: "252, 211, 77",  alpha: 0.18, width: 0.8 },
      { baseR: 192, speed: 0.0010, phase: Math.PI * 1.2, color: "239, 68, 68",   alpha: 0.12, width: 0.6 },
    ];

    const loop = (t: number) => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      for (const ring of rings) {
        const pulse = Math.sin(t * ring.speed + ring.phase) * 0.5 + 0.5; // 0→1
        const r = ring.baseR + pulse * 12;
        const alpha = ring.alpha * (0.5 + pulse * 0.5);

        // Outer glow arc
        const grd = ctx.createRadialGradient(cx, cy, r - 18, cx, cy, r + 18);
        grd.addColorStop(0,   `rgba(${ring.color}, 0)`);
        grd.addColorStop(0.5, `rgba(${ring.color}, ${alpha})`);
        grd.addColorStop(1,   `rgba(${ring.color}, 0)`);

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = grd;
        ctx.lineWidth = 18;
        ctx.stroke();

        // Sharp inner ring on top
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ring.color}, ${alpha * 0.7})`;
        ctx.lineWidth = ring.width;
        ctx.stroke();
      }

      // Subtle central ambient glow
      const centreGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80);
      centreGrd.addColorStop(0, "rgba(245, 158, 11, 0.08)");
      centreGrd.addColorStop(1, "rgba(245, 158, 11, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.fillStyle = centreGrd;
      ctx.fill();

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 420,
        height: 420,
        maxWidth: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.7,
        mixBlendMode: "screen",
      }}
    />
  );
}