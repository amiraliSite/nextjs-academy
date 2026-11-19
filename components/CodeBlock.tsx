"use client";

import { useMemo, useState } from "react";
import { useApp } from "./Providers";

/* Escape HTML, then colorize with one pass of regex alternation.
   Good enough for the snippets in this site, zero dependencies. */
function highlight(code: string): string {
  const e = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const rx =
    /(\/\/[^\n]*|#[^\n]*)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|\b(import|from|export|default|const|let|var|function|return|async|await|if|else|for|of|in|new|type|interface|as|try|catch|throw|true|false|null|undefined|this|class|extends|super|yield)\b/g;
  return e.replace(rx, (m, com, str, kw) => {
    if (com) return `<span class="tok-com">${m}</span>`;
    if (str) return `<span class="tok-str">${m}</span>`;
    if (kw) return `<span class="tok-key">${m}</span>`;
    return m;
  });
}

export function CodeBlock({
  code,
  lang = "tsx",
  title,
}: {
  code: string;
  lang?: string;
  title?: string;
}) {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);
  const html = useMemo(() => highlight(code), [code]);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(code);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        ok = true;
      } catch {}
    }
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <div className="codeblock">
      <div className="cb-bar">
        <span className="cb-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="cb-title">{title ?? lang}</span>
        <button className="cb-copy" onClick={copy}>
          {copied ? (
            <>✓ {t.copied}</>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="12" height="12" rx="2.5" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
              {t.copy}
            </>
          )}
        </button>
      </div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}
