"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId = 0;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();
    window.addEventListener("resize", setSize);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX - w / 2) * 0.015;
      mouse.y = (e.clientY - h / 2) * 0.015;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const nodeCount = w < 768 ? 24 : 46;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: (Math.random() - 0.5) * w,
      y: (Math.random() - 0.5) * h,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1.4 + Math.random() * 1.4,
    }));

    let t = 0;

    const drawFrame = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2);

      // Subtle mathematical axes
      ctx.strokeStyle = "rgba(148, 163, 184, 0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-w / 2, 0);
      ctx.lineTo(w / 2, 0);
      ctx.moveTo(0, -h / 2);
      ctx.lineTo(0, h / 2);
      ctx.stroke();

      // Subtle harmonic sine & cosine curves honoring the original mathematical theme
      ctx.strokeStyle = "rgba(56, 189, 248, 0.14)";
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      for (let x = -w / 2; x <= w / 2; x += 18) {
        const y = Math.sin(x * 0.008 + t) * 34;
        if (x === -w / 2) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.beginPath();
      for (let x = -w / 2; x <= w / 2; x += 18) {
        const y = Math.cos(x * 0.008 + t * 0.85) * 26;
        if (x === -w / 2) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Constellation nodes & subtle graph edges
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!prefersReducedMotion) {
          n.x += n.vx + mouse.x * 0.025;
          n.y += n.vy + mouse.y * 0.025;
          if (n.x > w / 2 + 20) n.x = -w / 2 - 20;
          if (n.x < -w / 2 - 20) n.x = w / 2 + 20;
          if (n.y > h / 2 + 20) n.y = -h / 2 - 20;
          if (n.y < -h / 2 - 20) n.y = h / 2 + 20;
        }

        ctx.fillStyle = i % 2 === 0 ? "rgba(56, 189, 248, 0.35)" : "rgba(167, 139, 250, 0.35)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 18500) {
            const alpha = (1 - Math.sqrt(distSq) / 136) * 0.14;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      ctx.restore();
      t += 0.008;

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(drawFrame);
      }
    };

    drawFrame();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute -right-28 top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl animate-pulse-slow" />
      <canvas ref={ref} className="fixed inset-0 opacity-85" />
    </div>
  );
}
