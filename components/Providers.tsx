"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, type Dict } from "@/lib/i18n";
import type { Lang } from "@/lib/types";

type Theme = "dark" | "light";

interface AppState {
  lang: Lang;
  theme: Theme;
  dir: "ltr" | "rtl";
  t: Dict;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  // Defaults match the server-rendered markup (EN / dark) to avoid hydration
  // mismatches; stored preferences are applied right after mount. On first
  // visit the preloader covers the swap.
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("njs-lang") as Lang | null;
      if (savedLang === "en" || savedLang === "fa") setLang(savedLang);
      const savedTheme = localStorage.getItem("njs-theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      }
    } catch {
      /* private mode — keep defaults */
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
    try {
      localStorage.setItem("njs-lang", lang);
    } catch {}
  }, [lang]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem("njs-theme", theme);
    } catch {}
  }, [theme]);

  const value = useMemo<AppState>(() => {
    const dir: "ltr" | "rtl" = lang === "fa" ? "rtl" : "ltr";
    return {
      lang,
      theme,
      dir,
      t: dictionaries[lang],
      setLang,
      toggleLang: () => setLang((l) => (l === "en" ? "fa" : "en")),
      toggleTheme: () => setTheme((th) => (th === "dark" ? "light" : "dark")),
    };
  }, [lang, theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <Providers>");
  return ctx;
}
