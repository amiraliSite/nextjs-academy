"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useApp } from "./Providers";
import { Reveal } from "./fx";
import { parts, topicMeta } from "@/lib/topics";

export function DocsIndex() {
  const { t, lang } = useApp();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return topicMeta;
    return topicMeta.filter(
      (m) =>
        m.en.title.toLowerCase().includes(needle) ||
        m.fa.title.includes(needle) ||
        m.en.description.toLowerCase().includes(needle) ||
        m.fa.description.includes(needle) ||
        m.slug.includes(needle)
    );
  }, [q]);

  return (
    <div className="container">
      <div className="docs-head">
        <Reveal>
          <span className="kicker">{t.curr_kicker}</span>
          <h1 className="sec-title">{t.docs_title}</h1>
          <p className="sec-sub">{t.docs_sub}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="docs-count-row">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.search_ph}
                type="search"
                aria-label={t.search_ph}
              />
            </div>
            <span className="chip">
              <span className="chip-dot" />
              {filtered.length} / {topicMeta.length} {t.topics_count}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="topics-wrap">
        {filtered.length === 0 && <p className="no-results">{t.no_results}</p>}

        {parts.map((part) => {
          const list = filtered.filter((m) => m.part === part.id);
          if (list.length === 0) return null;
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
                  <Reveal key={m.slug} delay={Math.min(i, 5) * 60}>
                    <Link href={`/docs/${m.slug}`} style={{ display: "block", height: "100%" }}>
                      <div className="topic-card glass glass-top">
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
    </div>
  );
}
