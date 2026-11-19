import { Topic } from "../../lib/types";

export const renderingPatterns: Topic = {
  slug: "rendering-patterns",
  icon: "🏗️",
  part: 3,
  en: {
    title: "Rendering Patterns",
    description:
      "SSG, SSR, ISR and CSR — what each pattern means, when it wins, and how the App Router chooses for you.",
    sections: [
      {
        heading: "The four strategies in one page",
        body: [
          "Static Site Generation (SSG) renders the page at build time; the request is just file delivery — the fastest option, ideal for content that rarely changes. Server-Side Rendering (SSR) renders per request, always fresh, ideal for personalized or frequently-updating pages.",
          "Incremental Static Regeneration (ISR) combines both: build once, then regenerate in the background every N seconds or on demand, giving near-static speed with fresh data. Client-Side Rendering (CSR) skips the server render and fetches in the browser — right for private dashboards behind a login where SEO does not matter.",
        ],
        bullets: [
          "SSG — marketing pages, docs, blogs (build once, serve forever)",
          "ISR — product pages, news feeds (revalidate after 60s)",
          "SSR — personalized, per-request content (user dashboards with cookies)",
          "CSR — highly interactive widgets, private tools, live charts",
        ],
      },
      {
        heading: "How the App Router decides",
        body: [
          "Routes are statically prerendered by default. A route becomes dynamic only when it reads something that only exists per-request: cookies(), headers(), searchParams, or a fetch with no-store. You do not declare the strategy globally — you opt in per piece of data and per component.",
          "The revalidate segment config (export const revalidate = 60) turns a static page into ISR, regenerating it at most every 60 seconds. This per-route granularity is why a single Next.js app can serve a static landing page, an ISR catalog and an SSR dashboard side by side.",
        ],
        code: {
          title: "app/news/page.tsx",
          lang: "tsx",
          content: `// ISR: static shell, regenerated every 60 seconds
export const revalidate = 60;

export default async function News() {
  const res = await fetch("https://api.example.com/news", {
    next: { revalidate: 60 },   // same idea, on the data level
  });
  const items = await res.json();
  return <List items={items} />;
}`,
        },
      },
      {
        heading: "PPR — the future: static shell + dynamic holes",
        body: [
          "Partial Prerendering (experimental in Next 15) renders the static skeleton of a page instantly and streams the dynamic holes into it. Think of a product page: the layout and reviews (static) appear immediately, while the price tied to the user's cart (dynamic) streams in milliseconds later.",
          "PPR aims to make the static-vs-dynamic decision almost obsolete — every page gets a static shell with surgical dynamic islands. It requires enabling experimental.ppr in the config today, but the pattern it introduces is where rendering is heading.",
        ],
        code: {
          title: "next.config.mjs",
          lang: "js",
          content: `const nextConfig = {
  experimental: {
    ppr: "incremental",   // opt in per-route with the ppr segment flag
  },
};`,
        },
      },
    ],
  },
  fa: {
    title: "الگوهای رندر",
    description:
      "SSG، SSR، ISR و CSR — هر الگو چه معنایی دارد، کجا برنده است، و اپ روتر چطور برای شما انتخاب می‌کند.",
    sections: [
      {
        heading: "چهار استراتژی در یک صفحه",
        body: [
          "تولید استاتیک سایت (SSG) صفحه را در زمان بیلد رندر می‌کند؛ هر درخواست فقط تحویل فایل است — سریع‌ترین گزینه، مناسب محتوایی که کم تغییر می‌کند. رندر سمت سرور (SSR) به ازای هر درخواست رندر می‌کند، همیشه تازه، مناسب صفحات شخصی‌سازی‌شده یا پرتغییر.",
          "بازتولید استاتیک افزایشی (ISR) هر دو را ترکیب می‌کند: یک بار بیلد، بعد بازتولید در پس‌زمینه هر N ثانیه یا به‌صورت دستی؛ سرعت تقریباً استاتیک با داده‌ی تازه. رندر سمت کلاینت (CSR) رندر سروری را حذف می‌کند و در مرورگر می‌گیرد — درست برای داشبوردهای خصوصی پشت لاگین که سئو مهم نیست.",
        ],
        bullets: [
          "SSG — صفحات معرفی، مستندات، بلاگ (یک بار بیلد، همیشه سرو)",
          "ISR — صفحات محصول، فید خبری (بازتولید بعد از ۶۰ ثانیه)",
          "SSR — محتوای شخصی‌سازی‌شده به ازای هر درخواست (داشبورد کاربر با کوکی)",
          "CSR — ویجت‌های بسیار تعاملی، ابزارهای خصوصی، چارت‌های زنده",
        ],
      },
      {
        heading: "اپ روتر چطور تصمیم می‌گیرد",
        body: [
          "مسیرها به‌صورت پیش‌فرض استاتیک pre-render می‌شوند. یک مسیر فقط وقتی داینامیک می‌شود که چیزِ مخصوصِ هر-درخواست را بخواند: cookies() یا headers() یا searchParams یا یک fetch با no-store. استراتژی را سراسری اعلام نمی‌کنید — به ازای هر تکه‌ی داده و هر کامپوننت انتخاب می‌کنید.",
          "تنظیم revalidate در سطح سگمنت (export const revalidate = 60) یک صفحه‌ی استاتیک را به ISR تبدیل می‌کند و حداکثر هر ۶۰ ثانیه در پس‌زمینه بازتولید می‌شود. همین ریزدانگیِ per-route است که باعث می‌شود یک اپ نکست‌جی‌اس هم‌زمان لندینگ استاتیک، کاتالوگ ISR و داشبورد SSR را سرو کند.",
        ],
        code: {
          title: "app/news/page.tsx",
          lang: "tsx",
          content: `// ISR: پوسته‌ی استاتیک، هر ۶۰ ثانیه بازتولید می‌شود
export const revalidate = 60;

export default async function News() {
  const res = await fetch("https://api.example.com/news", {
    next: { revalidate: 60 },   // همین ایده، در سطح داده
  });
  const items = await res.json();
  return <List items={items} />;
}`,
        },
      },
      {
        heading: "PPR — آینده: پوسته‌ی استاتیک + حفره‌های داینامیک",
        body: [
          "Partial Prerendering (آزمایشی در نکست ۱۵) اسکلت استاتیک صفحه را فوراً رندر می‌کند و حفره‌های داینامیک را استریم می‌کند. یک صفحه‌ی محصول را تصور کنید: لی‌آوت و نظرات (استاتیک) فوراً می‌آیند، در حالی که قیمتِ وابسته به سبد کاربر (داینامیک) چند میلی‌ثانیه بعد استریم می‌شود.",
          "هدف PPR تقریباً منسوخ‌کردن تصمیم استاتیک-یا-داینامیک است — هر صفحه یک پوسته‌ی استاتیک با جزایر داینامیک جراحی‌شده می‌گیرد. امروز نیاز به فعال‌سازی experimental.ppr در کانفیگ دارد، اما الگویی که معرفی می‌کند، آینده‌ی رندر است.",
        ],
        code: {
          title: "next.config.mjs",
          lang: "js",
          content: `const nextConfig = {
  experimental: {
    ppr: "incremental",   // به ازای هر مسیر با فلگ ppr فعالش کنید
  },
};`,
        },
      },
    ],
  },
};
