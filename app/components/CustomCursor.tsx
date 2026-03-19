"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    const dot    = dotRef.current!;
    let mouseX = 0, mouseY = 0, outerX = 0, outerY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      spawnTrail(mouseX, mouseY);
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animateOuter = () => {
      outerX = lerp(outerX, mouseX - 16, 0.18);
      outerY = lerp(outerY, mouseY - 16, 0.18);
      cursor.style.transform = `translate(${outerX}px, ${outerY}px)`;
      requestAnimationFrame(animateOuter);
    };
    animateOuter();

    const spawnTrail = (x: number, y: number) => {
      const trail = document.createElement("div");
      const size = Math.random() * 5 + 2;
      // Alternate blue and orange trail
      const colors = ["#3b82f6","#60a5fa","#f97316","#fb923c","#fbbf24"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      Object.assign(trail.style, {
        position: "fixed", left: `${x - size/2}px`, top: `${y - size/2}px`,
        width: `${size}px`, height: `${size}px`, borderRadius: "50%",
        background: color, boxShadow: `0 0 ${size*2}px ${color}`,
        pointerEvents: "none", zIndex: "9998", opacity: "0.85",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      });
      document.body.appendChild(trail);
      requestAnimationFrame(() => {
        trail.style.opacity = "0";
        trail.style.transform = `translate(${(Math.random()-0.5)*20}px, ${-Math.random()*18-4}px) scale(0.3)`;
      });
      setTimeout(() => trail.remove(), 420);
    };

    const growCursor = () => { cursor.style.borderColor="#f97316"; cursor.style.boxShadow="0 0 20px #f97316, 0 0 40px #3b82f6"; };
    const shrinkCursor = () => { cursor.style.borderColor="#3b82f6"; cursor.style.boxShadow="0 0 10px #3b82f6, 0 0 20px rgba(59,130,246,0.4)"; };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", growCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{ position: "fixed", top: 0, left: 0, width: "32px", height: "32px", borderRadius: "50%", border: "1.5px solid #3b82f6", pointerEvents: "none", zIndex: 9999, boxShadow: "0 0 10px #3b82f6, 0 0 20px rgba(59,130,246,0.4)", transition: "border-color 0.2s, box-shadow 0.2s", willChange: "transform" }} />
      <div ref={dotRef} style={{ position: "fixed", top: 0, left: 0, width: "6px", height: "6px", borderRadius: "50%", background: "radial-gradient(circle, #f97316, #3b82f6)", pointerEvents: "none", zIndex: 9999, boxShadow: "0 0 8px #f97316, 0 0 14px #3b82f6", willChange: "transform" }} />
    </>
  );
}
