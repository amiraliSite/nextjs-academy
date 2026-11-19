"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useApp } from "./Providers";
import { LogoMark } from "./chrome";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginInlineEnd: 0 }}>
              <LogoMark />
              <span>
                <b>Next.js</b> Academy
              </span>
            </div>
            <p className="footer-tag">{t.footer_tag}</p>
          </div>

          <div>
            <h4>{t.nav_docs}</h4>
            <div className="footer-links">
              <Link href="/docs">{t.back_to_docs}</Link>
              <Link href="/docs/app-router">App Router</Link>
              <Link href="/docs/server-components">Server Components</Link>
              <Link href="/docs/caching">Caching</Link>
              <Link href="/docs/deployment">Deployment</Link>
            </div>
          </div>

          <div>
            <h4>GitHub</h4>
            <div className="footer-links">
              <a href="https://github.com/amiraliSite/nextjs-academy" target="_blank" rel="noopener noreferrer">
                Repository ↗
              </a>
              <a href="https://github.com/amiraliSite" target="_blank" rel="noopener noreferrer">
                amiraliSite ↗
              </a>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                Next.js Official Docs ↗
              </a>
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <span>{t.footer_rights}</span>
          <div className="footer-badges">
            <span className="chip">⚡ {t.footer_built}</span>
            <span className="chip">🚀 {t.footer_deployed}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={"to-top" + (show ? " show" : "")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
