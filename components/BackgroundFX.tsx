"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  alphaTarget: number;
  alphaSpeed: number;
  hue: number; // 25–45 amber/gold band, occasional red at 5–15
  life: number;
  maxLife: number;
}

interface MousePos {
  x: number;
  y: number;
}

// ─── Constants ─────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 72;        // comfortable for 60fps on mid-range devices
const PARTICLE_SPEED  = 0.28;     // px/frame — very slow drift
const PARALLAX_STRENGTH = 0.018;  // mouse parallax factor, subtle

const GOLD_HUES  = [28, 32, 36, 40, 44]; // amber / gold band
const EMBER_HUES = [8, 12, 16, 20];      // red / ember occasional

// ─── Component ────────────────────────────────────────────────────────────────

export default function BackgroundFX() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const particles  = useRef<Particle[]>([]);
  const mouse      = useRef<MousePos>({ x: 0, y: 0 });
  const rafId      = useRef<number>(0);
  const reducedRef = useRef(false);

  // spawn a fresh particle at a random position
  const spawnParticle = useCallback((w: number, h: number): Particle => {
    const isEmber = Math.random() < 0.18; // 18% chance red ember
    const hue = isEmber
      ? EMBER_HUES[Math.floor(Math.random() * EMBER_HUES.length)]
      : GOLD_HUES[Math.floor(Math.random() * GOLD_HUES.length)];

    const angle = Math.random() * Math.PI * 2;
    const speed = PARTICLE_SPEED * (0.4 + Math.random() * 0.6);

    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.06, // tiny upward bias
      size: 1 + Math.random() * 2.2,
      alpha: 0,
      alphaTarget: 0.08 + Math.random() * 0.28,
      alphaSpeed: 0.004 + Math.random() * 0.008,
      hue,
      life: 0,
      maxLife: 280 + Math.random() * 420,
    };
  }, []);

  // init particle array
  const initParticles = useCallback((w: number, h: number) => {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const p = spawnParticle(w, h);
      p.life = Math.random() * p.maxLife; // stagger entry
      p.alpha = p.alphaTarget * (p.life / p.maxLife);
      return p;
    });
  }, [spawnParticle]);

  useEffect(() => {
    // Check reduced-motion preference
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Resize handler ──────────────────────────────────────────────────
    let W = 0;
    let H = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
      initParticles(W, H);
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(document.body);

    // ── Mouse / touch parallax ──────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // ── Draw scanlines ──────────────────────────────────────────────────
    // We draw two diagonal streaks on the canvas each frame at very low alpha.
    // They move slowly across the viewport, wrapping around.
    let streakOffset = 0;

    const drawStreaks = (t: number) => {
      const streakAlpha = 0.028;
      ctx.save();
      ctx.strokeStyle = `rgba(252, 211, 77, ${streakAlpha})`;
      ctx.lineWidth = 1;

      // Streak 1 — upper-left to middle-right, slow rightward drift
      const s1x = ((-W * 0.3 + streakOffset * 0.4) % (W * 1.4)) - W * 0.2;
      ctx.beginPath();
      ctx.moveTo(s1x, H * 0.12);
      ctx.lineTo(s1x + W * 0.72, H * 0.38);
      ctx.stroke();

      // Streak 2 — lower-right to upper-left, opposing drift
      const s2x = ((W * 1.1 - streakOffset * 0.28) % (W * 1.4)) - W * 0.1;
      ctx.strokeStyle = `rgba(239, 68, 68, ${streakAlpha * 0.55})`;
      ctx.beginPath();
      ctx.moveTo(s2x, H * 0.64);
      ctx.lineTo(s2x - W * 0.58, H * 0.88);
      ctx.stroke();

      // Streak 3 — faint mid diagonal
      const s3x = ((-W * 0.5 + streakOffset * 0.22) % (W * 1.6)) - W * 0.2;
      ctx.strokeStyle = `rgba(252, 211, 77, ${streakAlpha * 0.4})`;
      ctx.beginPath();
      ctx.moveTo(s3x, H * 0.45);
      ctx.lineTo(s3x + W * 0.55, H * 0.12);
      ctx.stroke();

      ctx.restore();

      streakOffset = (t * 0.012) % (W * 1.6); // drive offset by time
    };

    // ── Main loop ───────────────────────────────────────────────────────
    const loop = (t: number) => {
      ctx.clearRect(0, 0, W, H);

      if (!reducedRef.current) {
        // Mouse parallax offset
        const px = (mouse.current.x / W - 0.5) * W * PARALLAX_STRENGTH;
        const py = (mouse.current.y / H - 0.5) * H * PARALLAX_STRENGTH;

        // Draw streaks first (behind particles)
        drawStreaks(t);

        // Update + draw particles
        for (let i = 0; i < particles.current.length; i++) {
          const p = particles.current[i];

          p.life++;

          // Fade in
          if (p.alpha < p.alphaTarget) {
            p.alpha = Math.min(p.alphaTarget, p.alpha + p.alphaSpeed);
          }

          // Fade out near end of life
          if (p.life > p.maxLife * 0.72) {
            p.alpha -= p.alphaSpeed * 1.5;
          }

          // Respawn when fully faded or too old
          if (p.alpha <= 0 || p.life >= p.maxLife) {
            particles.current[i] = spawnParticle(W, H);
            continue;
          }

          // Move with parallax influence
          p.x += p.vx + px * 0.05;
          p.y += p.vy + py * 0.05;

          // Wrap around canvas edges (soft)
          if (p.x < -20) p.x = W + 20;
          if (p.x > W + 20) p.x = -20;
          if (p.y < -20) p.y = H + 20;
          if (p.y > H + 20) p.y = -20;

          // Draw particle as a soft glowing dot
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.2);
          grd.addColorStop(0, `hsla(${p.hue}, 90%, 68%, ${p.alpha})`);
          grd.addColorStop(0.45, `hsla(${p.hue}, 80%, 52%, ${p.alpha * 0.42})`);
          grd.addColorStop(1, `hsla(${p.hue}, 70%, 40%, 0)`);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [initParticles, spawnParticle]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        opacity: 1,
      }}
    />
  );
}