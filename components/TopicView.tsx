"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useApp } from "./Providers";
import { CodeBlock } from "./CodeBlock";
import { getNeighbors, partLabel, topicMeta } from "@/lib/topics";
import type { Topic } from "@/lib/types";

export function TopicView({ topic }: { topic: Topic }) {
  const { t, lang } = useApp();
  const c = topic[lang];
  const { index, prev, next } = getNeighbors(topic.slug);

  const readMin = useMemo(() => {
    const words = c.sections.reduce(
      (n, s) =>
        n +
        s.body.join(" ").split(/\s+/).length +
        (s.bullets?.join(" ").split(/\s+/).length ?? 0),
      0
    );
    return Math.max(2, Math.round(words / 170) + c.sections.filter((s) => s.code).length);
  }, [c]);

  return (
    <div className="topic-layout container">
      <Sidebar active={topic.slug} />

      <article>
        <ReadingProgress />

        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">{t.breadcrumb_home}</Link>
          <span className="sep">/</span>
          <Link href="/docs">{t.nav_docs}</Link>
          <span className="sep">/</span>
          <span style={{ color: "var(--text-soft)" }}>{c.title}</span>
        </nav>

        <header className="topic-hero">
          <div className="th-row">
            <div className="th-icon">{topic.icon}</div>
            <div className="th-meta" style={{ marginTop: 0 }}>
              <span className="chip">
                {t.part_label} {topic.part} — {partLabel(topic.part, lang)}
              </span>
              <span className="chip">
                #{String((index < 0 ? 0 : index) + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
          <h1>{c.title}</h1>
          <p className="th-desc">{c.description}</p>
          <div className="th-meta">
            <span className="chip">
              📖 {readMin} {t.read_min}
            </span>
            <span className="chip">
              🧱 {c.sections.length} {t.sections_label}
            </span>
            <span className="chip">
              💻 {c.sections.filter((s) => s.code).length} {t.examples_label}
            </span>
          </div>
        </header>

        {c.sections.map((s, i) => (
          <section className="topic-section" key={i}>
            <div className="ts-head">
              <span className="ts-num">{String(i + 1).padStart(2, "0")}</span>
              <h2>{s.heading}</h2>
            </div>
            {s.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
            {s.bullets && (
              <ul className="bullets">
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {s.code && <CodeBlock code={s.code.content} lang={s.code.lang} title={s.code.title} />}
          </section>
        ))}

        <div className="pn-grid">
          {prev ? (
            <Link href={`/docs/${prev.slug}`}>
              <div className="pn-card glass glass-top">
                <span className="pn-label">← {t.prev_topic}</span>
                <span className="pn-title">{prev[lang].title}</span>
              </div>
            </Link>
          ) : (
            <div className="pn-card glass pn-empty" aria-hidden="true" />
          )}
          {next ? (
            <Link href={`/docs/${next.slug}`}>
              <div className="pn-card glass glass-top next">
                <span className="pn-label">{t.next_topic} →</span>
                <span className="pn-title">{next[lang].title}</span>
              </div>
            </Link>
          ) : (
            <div className="pn-card glass pn-empty" aria-hidden="true" />
          )}
        </div>

        <div className="back-row">
          <Link href="/docs" className="btn btn-ghost">
            <span className="flip-rtl" aria-hidden="true">←</span> {t.back_to_docs}
          </Link>
        </div>
      </article>
    </div>
  );
}

/* Sticky topic list (horizontal pill rail on mobile) */
function Sidebar({ active }: { active: string }) {
  const { lang, t } = useApp();

  return (
    <aside className="sidebar glass">
      <p className="sidebar-title">{t.nav_docs}</p>
      {topicMeta.map((m) => {
        const showPart =
          m.part === 1 || topicMeta.find((x) => x.index === m.index - 1)?.part !== m.part;
        return (
          <div key={m.slug} style={{ width: "100%" }}>
            {showPart && (
              <p className="sb-part">
                {t.part_label} {m.part} — {partLabel(m.part, lang)}
              </p>
            )}
            <Link href={`/docs/${m.slug}`} className={"sb-link" + (m.slug === active ? " active" : "")}>
              <span className="sb-num">{String(m.index).padStart(2, "0")}</span>
              <span>{m.icon}</span>
              <span>{m[lang].title}</span>
            </Link>
          </div>
        );
      })}
    </aside>
  );
}

/* Scroll progress inside the article */
function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      setPct(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="read-progress" style={{ width: `${pct}%` }} />;
}
