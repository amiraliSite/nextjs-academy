"use client";

import Link from "next/link";
import { useApp } from "./Providers";
import { Reveal, TiltCard } from "./fx";
import { CodeBlock } from "./CodeBlock";
import { parts, topicMeta } from "@/lib/topics";

/* ---------------- Feature grid ---------------- */

export function Features() {
  const { t } = useApp();
  const items = [
    { icon: "🧭", ti: t.f1t, d: t.f1d },
    { icon: "🧩", ti: t.f2t, d: t.f2d },
    { icon: "⚡", ti: t.f3t, d: t.f3d },
    { icon: "🌍", ti: t.f4t, d: t.f4d },
    { icon: "🌗", ti: t.f5t, d: t.f5d },
    { icon: "🌊", ti: t.f6t, d: t.f6d },
  ];

  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal>
          <span className="kicker">{t.features_kicker}</span>
          <h2 className="sec-title">{t.features_title}</h2>
          <p className="sec-sub">{t.features_sub}</p>
        </Reveal>
        <div className="features-grid">
          {items.map((f, i) => (
            <Reveal key={f.ti} delay={(i % 3) * 90}>
              <TiltCard className="glass glass-top">
                <div className="feature-card">
                  <span className="f-icon">{f.icon}</span>
                  <h3>{f.ti}</h3>
                  <p>{f.d}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Curriculum preview ---------------- */

export function CurriculumGrid() {
  const { t, lang } = useApp();

  return (
    <section className="section" id="curriculum">
      <div className="container">
        <Reveal>
          <span className="kicker">{t.curr_kicker}</span>
          <h2 className="sec-title">{t.curr_title}</h2>
          <p className="sec-sub">{t.curr_sub}</p>
        </Reveal>

        {parts.map((part) => {
          const list = topicMeta.filter((m) => m.part === part.id);
          return (
            <div className="part-block" key={part.id}>
              <Reveal>
                <div className="part-head">
                  <span className="p-num">{t.part_label} {part.id}</span>
                  <h2>{part[lang]}</h2>
                </div>
              </Reveal>
              <div className="topics-grid">
                {list.map((m, i) => (
                  <Reveal key={m.slug} delay={(i % 4) * 70}>
                    <Link href={`/docs/${m.slug}`} className="glass glass-top" style={{ display: "block", height: "100%" }}>
                      <div className="topic-card">
                        <div className="tc-top">
                          <span className="tc-icon">{m.icon}</span>
                          <span className="tc-index">{String(m.index).padStart(2, "0")}</span>
                        </div>
                        <h3>{m[lang].title}</h3>
                        <p>{m[lang].description}</p>
                        <div className="tc-foot">
                          <span>
                            {m.sections} {t.sections_label}
                          </span>
                          <span className="tc-go">→</span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Real-code showcase ---------------- */

const LAYOUT_SNIPPET = `// app/layout.tsx — the real root layout of this website
import { Space_Grotesk, Vazirmatn, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-body" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={display.variable + " " + body.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`;

export function CodeShowcase() {
  const { t } = useApp();

  return (
    <section className="section" id="code">
      <div className="container showcase-grid">
        <Reveal>
          <span className="kicker">{t.code_kicker}</span>
          <h2 className="sec-title">{t.code_title}</h2>
          <p className="sec-sub">{t.code_sub}</p>
          <p className="showcase-note">{t.code_note}</p>
          <div className="hero-ctas" style={{ marginTop: 26 }}>
            <Link href="/docs/project-structure" className="btn btn-ghost">
              {t.cta_browse} →
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <CodeBlock code={LAYOUT_SNIPPET} lang="tsx" title="app/layout.tsx" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Roadmap ---------------- */

export function Roadmap() {
  const { t } = useApp();
  const steps = [
    { n: "01", ti: t.r1t, d: t.r1d },
    { n: "02", ti: t.r2t, d: t.r2d },
    { n: "03", ti: t.r3t, d: t.r3d },
    { n: "04", ti: t.r4t, d: t.r4d },
  ];

  return (
    <section className="section" id="roadmap">
      <div className="container">
        <Reveal>
          <span className="kicker">{t.roadmap_kicker}</span>
          <h2 className="sec-title">{t.roadmap_title}</h2>
          <p className="sec-sub">{t.roadmap_sub}</p>
        </Reveal>
        <div className="features-grid" style={{ marginTop: 44 }}>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="glass glass-top" style={{ padding: 26, height: "100%" }}>
                <span
                  className="grad-text"
                  style={{ fontFamily: "var(--font-head)", fontSize: "1.9rem", fontWeight: 700 }}
                >
                  {s.n}
                </span>
                <h3 style={{ marginTop: 8, fontSize: "1.08rem" }}>{s.ti}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.93rem", lineHeight: 1.8, marginTop: 8 }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function CTABanner() {
  const { t } = useApp();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div
            className="glass glass-top"
            style={{
              padding: "clamp(36px, 6vw, 64px)",
              textAlign: "center",
              background:
                "linear-gradient(140deg, rgba(139,92,246,0.14), rgba(34,211,238,0.1)), var(--panel)",
              overflow: "hidden",
            }}
          >
            <h2 className="sec-title" style={{ marginTop: 0 }}>
              {t.cta_title}
            </h2>
            <p className="sec-sub" style={{ marginInline: "auto" }}>
              {t.cta_sub}
            </p>
            <div style={{ marginTop: 30 }}>
              <Link href="/docs" className="btn btn-primary">
                {t.cta_btn}
                <span className="flip-rtl" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
