import { Topic } from "../../lib/types";

export const i18n: Topic = {
  slug: "i18n",
  icon: "🌍",
  part: 4,
  en: {
    title: "Internationalization (i18n)",
    description:
      "Route-based and client-side localization, RTL support and fonts — how this site speaks both English and فارسی with one codebase.",
    sections: [
      {
        heading: "Two strategies: routes or client state",
        body: [
          "Route-based i18n puts the locale in the URL — app/[lang]/page.tsx serves /en/about and /fa/about, which is the SEO-perfect approach: each language has its own indexable URL, and generateStaticParams can pre-render every locale at build time.",
          "Client-side i18n stores the choice in localStorage and swaps content without changing the route — lighter and simpler, but each page has a single URL. This academy uses the client-side approach so you can flip between English and فارسی instantly on any page, with the interface direction switching too.",
        ],
        bullets: [
          "Route-based — SEO and shareable links per language, more structure",
          "Client-based — instant switching, one URL, simpler static exports",
          "Either way: keep every string in a dictionary, never inline",
        ],
        code: {
          title: "route-based layout",
          lang: "tsx",
          content: `// app/[lang]/layout.tsx
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

export default function RootLayout({ children, params }) {
  const { lang } = params;
  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}`,
        },
      },
      {
        heading: "RTL — the mirror test",
        body: [
          "Right-to-left support is mostly two things: set dir=\"rtl\" on the html element, and write styles with logical properties — margin-inline-start instead of margin-left, inset-inline-end instead of right. The browser then mirrors everything automatically.",
          "The exceptions are deliberate: code snippets, numbers and LTR words inside RTL text need direction: ltr and unicode-bidi: embed to stay readable — see how every code block on this site stays left-aligned even in Persian mode. Icons with directional arrows get a scaleX(-1) flip class.",
        ],
        code: {
          title: "logical properties",
          lang: "css",
          content: `.sidebar { margin-inline-start: 8px; }   /* not margin-left */
.badge   { inset-inline-end: 0; }        /* not right: 0 */
pre      { direction: ltr; text-align: left; }  /* code stays LTR */
[dir="rtl"] .arrow { transform: scaleX(-1); }   /* flip icons */`,
        },
      },
      {
        heading: "Fonts, plurals and libraries",
        body: [
          "Every language deserves a real font: Latin fonts have no Persian glyphs, so a Persian UI with an English-only font falls back to an ugly system font. Pair them with next/font (this site uses Space Grotesk for display and Vazirmatn for Persian text) and let the CSS fallback chain pick per glyph.",
          "For production scale — plurals, dates, currency, lazy-loaded translation files — libraries like next-intl plug into the App Router cleanly and support both strategies. Start with a typed dictionary (like lib/i18n.ts in this project) and graduate to a library when translation files get large or non-developers start editing them.",
        ],
        bullets: [
          "Typed dictionaries — every key must exist in every language",
          "next/font per language — Vazirmatn, Noto Naskh, Inter…",
          "next-intl — the de-facto i18n library for the App Router",
          "Test with real RTL text — mixed English/Persian strings reveal bugs fast",
        ],
      },
    ],
  },
  fa: {
    title: "چندزبانه‌سازی (i18n)",
    description:
      "بومی‌سازی مبتنی بر مسیر و سمت کلاینت، پشتیبانی RTL و فونت‌ها — این سایت چطور با یک کدبیس هم انگلیسی حرف می‌زند هم فارسی.",
    sections: [
      {
        heading: "دو استراتژی: مسیرها یا state کلاینت",
        body: [
          "i18n مبتنی بر مسیر، locale را در URL می‌گذارد — app/[lang]/page.tsx سرو می‌کند /en/about و /fa/about؛ رویکردی که از نظر سئو بی‌نقص است: هر زبان URL ایندکس‌پذیر خودش را دارد و generateStaticParams می‌تواند هر locale را در بیلد pre-render کند.",
          "i18n سمت کلاینت، انتخاب کاربر را در localStorage نگه می‌دارد و محتوا را بدون تغییر مسیر عوض می‌کند — سبک‌تر و ساده‌تر، اما هر صفحه یک URL واحد دارد. همین آکادمی رویکرد سمت کلاینت را استفاده می‌کند تا روی هر صفحه‌ای، لحظه‌ای بین انگلیسی و فارسی جابه‌جا شوید و جهت رابط هم عوض شود.",
        ],
        bullets: [
          "مبتنی بر مسیر — سئو و لینک‌های قابل اشتراک به ازای هر زبان، ساختار بیشتر",
          "مبتنی بر کلاینت — سوییچ آنی، یک URL، خروجی استاتیک ساده‌تر",
          "به هر دو روش: همه‌ی رشته‌ها در یک دیکشنری، هرگز inline نه",
        ],
        code: {
          title: "لی‌آوت مبتنی بر مسیر",
          lang: "tsx",
          content: `// app/[lang]/layout.tsx
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fa" }];
}

export default function RootLayout({ children, params }) {
  const { lang } = params;
  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"}>
      <body>{children}</body>
    </html>
  );
}`,
        },
      },
      {
        heading: "RTL — آزمون آینه",
        body: [
          "پشتیبانی راست‌به‌چپ عمدتاً دو چیز است: تنظیم dir=\"rtl\" روی عنصر html، و نوشتن استایل‌ها با پراپرتی‌های منطقی — margin-inline-start به‌جای margin-left و inset-inline-end به‌جای right. مرورگر بعد خودش همه‌چیز را آینه می‌کند.",
          "استثناها از روی عمدند: snippetهای کد، اعداد و کلمات LTR داخل متن RTL برای خوانا ماندن به direction: ltr و unicode-bidi: embed نیاز دارند — ببینید هر بلاک کد در این سایت حتی در حالت فارسی چپ‌چین می‌ماند. آیکون‌های دارای فلش جهت‌دار هم کلاس فلیپ scaleX(-1) می‌گیرند.",
        ],
        code: {
          title: "پراپرتی‌های منطقی",
          lang: "css",
          content: `.sidebar { margin-inline-start: 8px; }   /* نه margin-left */
.badge   { inset-inline-end: 0; }        /* نه right: 0 */
pre      { direction: ltr; text-align: left; }  /* کد همان LTR بماند */
[dir="rtl"] .arrow { transform: scaleX(-1); }   /* فلیپ آیکون‌ها */`,
        },
      },
      {
        heading: "فونت‌ها، جمع‌ها و کتابخانه‌ها",
        body: [
          "هر زبانی لیاقت یک فونت واقعی را دارد: فونت‌های لاتین گلیف فارسی ندارند، پس UI فارسی با فونت انگلیسی‌-only به یک فونت سیستمی زشت برمی‌گردد. آن‌ها را با next/font جفت کنید (این سایت برای تیتر Space Grotesk و برای متن فارسی Vazirmatn دارد) و بگذارید زنجیره‌ی fallback در CSS گلیف به گلیف انتخاب کند.",
          "برای مقیاس تولیدی — جمع‌بندی، تاریخ، ارز، فایل‌های ترجمه‌ی lazy — کتابخانه‌هایی مثل next-intl تمیز در اپ روتر جا می‌شوند و هر دو استراتژی را پشتیبانی می‌کنند. با یک دیکشنری تایپ‌دار شروع کنید (مثل lib/i18n.ts در همین پروژه) و وقتی فایل‌های ترجمه بزرگ شدند یا غیربرنامه‌نویس‌ها سراغشان آمدند به کتابخانه مهاجرت کنید.",
        ],
        bullets: [
          "دیکشنری تایپ‌دار — هر کلید باید در هر زبان وجود داشته باشد",
          "next/font به ازای هر زبان — Vazirmatn، Noto Naskh، Inter…",
          "next-intl — کتابخانه‌ی i18n بالفعل برای اپ روتر",
          "با متن RTL واقعی تست کنید — رشته‌های ترکیبی انگلیسی/فارسی باگ‌ها را سریع لو می‌دهند",
        ],
      },
    ],
  },
};
