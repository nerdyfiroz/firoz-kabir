"use client";

import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      mouse.x = clientX - w / 2;
      mouse.y = clientY - h / 2;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);

    const NODE_COUNT = window.innerWidth < 600 ? 40 : 80;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: (Math.random() - 0.5) * w,
      y: (Math.random() - 0.5) * h,
    }));

    let t = 0;
    const getCSS = (v: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2);

      ctx.strokeStyle = "rgba(255,255,255,.08)";
      ctx.beginPath();
      ctx.moveTo(-w, 0);
      ctx.lineTo(w, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -h);
      ctx.lineTo(0, h);
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.fillText("x", w / 2 - 20, 15);
      ctx.fillText("y", 5, -h / 2 + 20);
      ctx.fillText("θ", mouse.x * 0.02, mouse.y * 0.02);

      ctx.strokeStyle = getCSS("--c1");
      ctx.beginPath();
      for (let x = -w / 2; x < w / 2; x += 12) ctx.lineTo(x, Math.sin(x * 0.01 + t) * 40);
      ctx.stroke();

      ctx.strokeStyle = getCSS("--c3");
      ctx.beginPath();
      for (let x = -w / 2; x < w / 2; x += 12) ctx.lineTo(x, Math.cos(x * 0.01 + t) * 30);
      ctx.stroke();

      nodes.forEach((n, i) => {
        ctx.fillStyle = getCSS("--c2");
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2);
        ctx.fill();

        if (i % 3 === 0) {
          const n2 = nodes[(i + 7) % nodes.length];
          ctx.strokeStyle = "rgba(124,58,237,.35)";
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }

        n.x += mouse.x * 0.0003;
        n.y += mouse.y * 0.0003;
      });

      ctx.restore();
      t += 0.01;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10" />;
}
