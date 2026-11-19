"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "./Providers";
import { LogoMark } from "./chrome";

export function Navbar() {
  const { t, lang, theme, toggleLang, toggleTheme } = useApp();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: t.nav_home },
    { href: "/docs", label: t.nav_docs },
  ];

  return (
    <>
      <header className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="container nav-inner">
          <Link href="/" className="logo">
            <LogoMark />
            <span>
              <b>Next.js</b> Academy
            </span>
            <span className="v-chip">v15</span>
          </Link>

          <nav className="nav-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={"nav-link" + (pathname === l.href ? " active" : "")}
              >
                {l.label}
              </Link>
            ))}
            <a
              className="nav-link"
              href="https://github.com/amiraliSite/nextjs-academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav_github} ↗
            </a>
          </nav>

          <div className="nav-controls">
            <button
              className="lang-btn"
              onClick={toggleLang}
              aria-label={t.lang_aria}
              title={t.lang_aria}
            >
              {lang === "en" ? "فا" : "EN"}
            </button>
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={t.theme_aria}
              title={t.theme_aria}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              className="icon-btn"
              href="https://github.com/amiraliSite/nextjs-academy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <GithubIcon />
            </a>
            <button
              className="icon-btn hamburger"
              onClick={() => setOpen((o) => !o)}
              aria-label={t.menu_aria}
            >
              <BurgerIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <div className={"nav-drawer" + (open ? " open" : "")}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={"nav-link" + (pathname === l.href ? " active" : "")}>
            {l.label}
          </Link>
        ))}
        <a
          className="nav-link"
          href="https://github.com/amiraliSite/nextjs-academy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.nav_github} ↗
        </a>
      </div>
    </>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M19.1 4.9l-1.7 1.7M6.6 17.4l-1.7 1.7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9l-.01 2.81c0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      style={{ transition: "transform .3s ease", transform: open ? "rotate(90deg)" : "none" }}
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
