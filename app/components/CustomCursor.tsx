"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX - 16, y: e.clientY - 16, duration: 0.15, ease: "power2.out" });
      gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.05 });
    };

    const growCursor = () => gsap.to(cursor, { scale: 1.8, duration: 0.2 });
    const shrinkCursor = () => gsap.to(cursor, { scale: 1, duration: 0.2 });

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", growCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-purple pointer-events-none z-[9999]"
        style={{ boxShadow: "0 0 10px #b366ff, 0 0 20px #b366ff44" }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyber-cyan pointer-events-none z-[9999]"
        style={{ boxShadow: "0 0 6px #00fafe" }}
      />
    </>
  );
}
