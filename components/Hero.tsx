"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useApp } from "./Providers";
import { siteStats } from "@/lib/topics";

export function Hero() {
  const { t } = useApp();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Particle network — theme-aware, DPR-aware, cleaned up on unmount */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const P: { x: number; y: number; vx: number; vy: number }[] = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = w < 640 ? 34 : 76;
    for (let i = 0; i < N; i++) {
      P.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
      });
    }

    const isLight = () => document.documentElement.classList.contains("light");

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of P) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const dx = P[i].x - P[j].x;
          const dy = P[i].y - P[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 118) {
            ctx.strokeStyle = isLight()
              ? `rgba(124, 58, 237, ${((1 - d / 118) * 0.16).toFixed(3)})`
              : `rgba(139, 92, 246, ${((1 - d / 118) * 0.24).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(P[i].x, P[i].y);
            ctx.lineTo(P[j].x, P[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = isLight() ? "rgba(124, 58, 237, 0.4)" : "rgba(167, 139, 250, 0.65)";
      for (const p of P) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <canvas ref={canvasRef} className="particles" aria-hidden="true" />

      <div className="container hero-grid">
        <div>
          <span className="chip hero-badge glass glass-top">
            <span className="chip-dot" />
            {t.hero_badge}
          </span>

          <h1 className="hero-title">
            {t.hero_title_1}
            <span className="line2 grad-text">{t.hero_title_2}</span>
          </h1>

          <p className="hero-sub">{t.hero_sub}</p>

          <div className="hero-ctas">
            <Link href="/docs/introduction" className="btn btn-primary">
              {t.cta_start}
              <span className="flip-rtl" aria-hidden="true">→</span>
            </Link>
            <Link href="/docs" className="btn btn-ghost">
              {t.cta_browse}
            </Link>
          </div>

          <div className="hero-stats">
            <Stat target={siteStats.topics} label={t.stat_topics} />
            <Stat target={siteStats.sections} label={t.stat_sections} />
            <Stat target={siteStats.examples} label={t.stat_examples} />
            <Stat target={siteStats.langs} label={t.stat_langs} />
          </div>

          <div className="scroll-hint">
            <span className="mouse" />
            {t.scroll_hint}
          </div>
        </div>

        <div className="cube-zone" aria-hidden="true">
          <div className="cube-ring" />
          <div className="cube-ring r2" />
          <div className="cube">
            <div className="cube-face cf-front"><span>N</span></div>
            <div className="cube-face cf-back"><span>15</span></div>
            <div className="cube-face cf-right"><span>R</span></div>
            <div className="cube-face cf-left"><span>S</span></div>
            <div className="cube-face cf-top"><span>N</span></div>
            <div className="cube-face cf-bottom"><span>J</span></div>
          </div>
          <div className="cube-shadow" />
          <span className="float-chip fc-1">app/layout.tsx</span>
          <span className="float-chip fc-2">RSC</span>
          <span className="float-chip fc-3">revalidateTag()</span>
          <span className="float-chip fc-4">Suspense</span>
        </div>
      </div>
    </section>
  );
}

/* Animated count-up number */
function Stat({ target, label }: { target: number; label: string }) {
  const [v, setV] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1300;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return (
    <div className="stat">
      <b>{v}</b>
      <span>{label}</span>
    </div>
  );
}
