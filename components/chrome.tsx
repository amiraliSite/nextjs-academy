"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useApp } from "./Providers";

/* ---------------- Cinematic first-paint preloader ---------------- */

export function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const { t } = useApp();
  const pctRef = useRef(0);

  useEffect(() => {
    const iv = window.setInterval(() => {
      pctRef.current = Math.min(100, pctRef.current + 7 + Math.ceil(Math.random() * 12));
      setPct(pctRef.current);
      if (pctRef.current >= 100) {
        window.clearInterval(iv);
        window.setTimeout(() => setDone(true), 420);
      }
    }, 95);
    return () => window.clearInterval(iv);
  }, []);

  if (done) return null;

  return (
    <div className={"preloader" + (pct >= 100 ? " exit" : "")} aria-hidden="true">
      <LogoMark className="pre-logo" />
      <p className="pre-title">
        <b>Next.js</b> Academy
      </p>
      <div className="pre-bar">
        <i style={{ width: `${pct}%` }} />
      </div>
      <span className="pre-pct">{pct}%</span>
      <span className="pre-note">{t.preloader_note}</span>
    </div>
  );
}

/* ---------------- Route-change progress bar ---------------- */

export function RouteProgress() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    setWidth(16);
    const t1 = window.setTimeout(() => setWidth(62), 130);
    const t2 = window.setTimeout(() => setWidth(100), 430);
    const t3 = window.setTimeout(() => {
      setActive(false);
      setWidth(0);
    }, 780);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [pathname]);

  return <div className={"route-progress" + (active ? " on" : "")} style={{ width: `${width}%` }} />;
}

/* ---------------- Shared brand mark ---------------- */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="lg-n" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" />
          <stop offset="0.55" stopColor="#6366f1" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="#0a0c16" />
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="14.25" stroke="url(#lg-n)" strokeOpacity="0.55" strokeWidth="1.5" />
      <path d="M19 46V18h6.2l13.6 19.6V18H45v28h-6.2L25.2 26.4V46H19Z" fill="url(#lg-n)" />
    </svg>
  );
}
