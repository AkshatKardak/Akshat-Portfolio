"use client";

import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDelta: number;
  hue: number;
  life: number;
  maxLife: number;
}

interface Streak {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
}

const EMBER_COUNT = 34;
const STREAK_COUNT = 4;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function spawnEmber(W: number, H: number): Ember {
  const maxLife = randomBetween(180, 400);
  return {
    x: randomBetween(0, W),
    y: randomBetween(0, H),
    vx: randomBetween(-0.18, 0.18),
    vy: randomBetween(-0.35, -0.08),
    radius: randomBetween(1, 2.8),
    opacity: 0,
    opacityDelta: randomBetween(0.002, 0.005),
    hue: randomBetween(210, 256), // blue-violet range
    life: 0,
    maxLife,
  };
}

function spawnStreak(W: number, H: number): Streak {
  return {
    x: randomBetween(-W * 0.2, W * 1.1),
    y: randomBetween(-H * 0.1, H * 0.4),
    length: randomBetween(160, 360),
    speed: randomBetween(0.12, 0.32),
    opacity: randomBetween(0.014, 0.034),
    width: randomBetween(0.5, 1.4),
  };
}

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse parallax
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / W,
        y: e.clientY / H,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Init particles
    const embers: Ember[] = Array.from({ length: EMBER_COUNT }, () =>
      spawnEmber(W, H)
    );
    // stagger initial life so they don't all appear at once
    embers.forEach((e) => {
      e.life = Math.random() * e.maxLife;
      e.y = randomBetween(0, H);
    });

    const streaks: Streak[] = Array.from({ length: STREAK_COUNT }, () =>
      spawnStreak(W, H)
    );

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ── Base radial ambient glow (hero area, restrained) ──
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const gx = W * (0.45 + mx * 0.1);
      const gy = H * (0.3 + my * 0.08);

      const radial = ctx.createRadialGradient(gx, gy, 0, gx, gy, W * 0.55);
      radial.addColorStop(0, "rgba(245, 158, 11, 0.045)");
      radial.addColorStop(0.45, "rgba(225, 29, 72, 0.024)");
      radial.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, W, H);

      // ── Scan streaks ──
      streaks.forEach((s) => {
        s.x += s.speed;
        s.y += s.speed * 0.45;
        if (s.x > W * 1.3 || s.y > H * 1.2) {
          Object.assign(s, spawnStreak(W, H));
          s.x = randomBetween(-W * 0.3, 0);
          s.y = randomBetween(-H * 0.2, H * 0.3);
        }

        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.strokeStyle = `rgba(245, 158, 11, 1)`;
        ctx.lineWidth = s.width;
        ctx.beginPath();
        const angle = Math.PI / 5.5; // ~32°
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x + Math.cos(angle) * s.length,
          s.y + Math.sin(angle) * s.length
        );
        ctx.stroke();
        ctx.restore();
      });

      // ── Embers ──
      embers.forEach((e) => {
        e.life++;

        // Fade in first 25% of life, hold, fade out last 20%
        const progress = e.life / e.maxLife;
        if (progress < 0.25) {
          e.opacity = Math.min(e.opacity + e.opacityDelta, 0.48);
        } else if (progress > 0.8) {
          e.opacity = Math.max(e.opacity - e.opacityDelta * 1.6, 0);
        }

        // Drift with slight mouse influence
        const influenceX = (mouseRef.current.x - 0.5) * 0.004;
        e.x += e.vx + influenceX;
        e.y += e.vy;

        // Subtle horizontal sway
        e.x += Math.sin(e.life * 0.025 + e.radius) * 0.12;

        // Respawn
        if (e.life >= e.maxLife || e.y < -10) {
          Object.assign(e, spawnEmber(W, H));
          e.y = H + 10;
          e.life = 0;
          e.opacity = 0;
        }

        if (e.opacity <= 0.01) return;

        ctx.save();
        ctx.globalAlpha = e.opacity;

        const grad = ctx.createRadialGradient(
          e.x,
          e.y,
          0,
          e.x,
          e.y,
          e.radius * 2.2
        );
        grad.addColorStop(0, `hsla(${e.hue}, 95%, 72%, 1)`);
        grad.addColorStop(0.5, `hsla(${e.hue - 12}, 88%, 58%, 0.6)`);
        grad.addColorStop(1, `hsla(${e.hue - 20}, 80%, 35%, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // ── Subtle grid overlay (very faint, only in hero zone) ──
      ctx.save();
      ctx.globalAlpha = 0.018;
      ctx.strokeStyle = "rgba(79,156,255,1)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      const heroH = H * 0.75;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, heroH);
        ctx.stroke();
      }
      for (let y = 0; y < heroH; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.restore();

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
