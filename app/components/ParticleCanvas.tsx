"use client";
import { useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 35;
    const fireColors = [
      "249,115,22",
      "239,68,68",
      "251,191,36",
      "234,88,12",
      "220,38,38",
    ];

    const particles = Array.from({ length: COUNT }, () => ({
      x:          Math.random() * window.innerWidth,
      y:          Math.random() * window.innerHeight,
      vx:         (Math.random() - 0.5) * 0.25,
      vy:         (Math.random() - 0.5) * 0.25,
      alpha:      Math.random() * 0.45 + 0.1,
      size:       Math.random() * 2 + 0.5,
      pulse:      Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
      color:      fireColors[Math.floor(Math.random() * fireColors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x     += p.vx;
        p.y     += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${a})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
