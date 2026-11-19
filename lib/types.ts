export type Lang = "en" | "fa";

export type CodeLang = "tsx" | "ts" | "js" | "bash" | "css" | "json" | "yaml";

export interface Section {
  heading: string;
  body: string[];
  bullets?: string[];
  code?: { title: string; lang: CodeLang; content: string };
}

export interface LocaleContent {
  title: string;
  description: string;
  sections: Section[];
}

export interface Topic {
  slug: string;
  icon: string;
  part: 1 | 2 | 3 | 4;
  en: LocaleContent;
  fa: LocaleContent;
}
