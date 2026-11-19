import { Topic } from "../../lib/types";

export const metadataSeo: Topic = {
  slug: "metadata-seo",
  icon: "🔍",
  part: 4,
  en: {
    title: "Metadata & SEO",
    description:
      "The Metadata API, Open Graph cards, sitemap and robots — everything search engines and chat apps read about your page.",
    sections: [
      {
        heading: "The Metadata API — SEO as a first-class citizen",
        body: [
          "Every layout or page can export a metadata object (static) or a generateMetadata function (dynamic, based on params or data). Next.js merges these up the segment tree: a page inherits the root metadata and overrides only what it declares — titles, descriptions, canonical URLs, icons, Open Graph and Twitter cards.",
          "The title template is the little touch that scales: the root defines a template like %s · Next.js Academy, and every child page just exports its own title, producing consistent branding everywhere without repeating markup.",
        ],
        code: {
          title: "app/layout.tsx + app/docs/[slug]/page.tsx",
          lang: "tsx",
          content: `// root: default + template
export const metadata: Metadata = {
  title: { default: "Next.js Academy", template: "%s · Next.js Academy" },
  description: "Learn the App Router, beautifully.",
};

// per-page, even dynamic:
export async function generateMetadata({ params }) {
  const topic = await getTopic((await params).slug);
  return { title: topic.en.title, description: topic.en.description };
}`,
        },
      },
      {
        heading: "Open Graph and Twitter cards",
        body: [
          "Open Graph metadata is what turns a bare URL into a rich card inside Telegram, WhatsApp, Slack and X. Set openGraph.title, description, and images — and remember that OG images must be absolute URLs resolvable by the fetching service, not relative paths.",
          "For programmatic cards, you can even render images at build time with next/og (ImageResponse): product shots with real prices, certificate cards, or episode posters — pure React/JSX converted into a PNG during the build.",
        ],
        code: {
          title: "OG metadata",
          lang: "tsx",
          content: `export const metadata: Metadata = {
  openGraph: {
    title: "Next.js Academy",
    description: "Twenty topics, two languages, one interface.",
    type: "website",
    images: ["https://example.com/og.png"],   // absolute URL
  },
  twitter: { card: "summary_large_image" },
};`,
        },
      },
      {
        heading: "sitemap.ts, robots.ts and metadata files",
        body: [
          "Special files extend SEO conventions: app/sitemap.ts exports an XML sitemap (static array or async function), app/robots.ts generates the robots.txt with allow/deny rules, and files like app/icon.svg or app/apple-icon.png become favicons with zero configuration.",
          "These are just functions returning data, so dynamic sites can generate sitemaps straight from the database at build time. For this site, a static export ships a 404 page, favicon and meta tags the same way — search engines see the full picture even without a server.",
        ],
        code: {
          title: "app/robots.ts",
          lang: "ts",
          content: `import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  };
}`,
        },
      },
    ],
  },
  fa: {
    title: "متادیتا و سئو",
    description:
      "Metadata API، کارت‌های Open Graph، sitemap و robots — هر آنچه موتورهای جست‌وجو و اپ‌های چت درباره‌ی صفحه‌ی شما می‌خوانند.",
    sections: [
      {
        heading: "Metadata API — سئو به‌عنوان شهروند درجه‌یک",
        body: [
          "هر لی‌آوت یا صفحه می‌تواند یک آبجکت metadata (استاتیک) یا تابع generateMetadata (داینامیک، بر اساس params یا داده) خروجی بدهد. نکست‌جی‌اس این‌ها را در طول درخت سگمنت‌ها merge می‌کند: صفحه از متادیتای ریشه ارث می‌برد و فقط آنچه را اعلام می‌کند بازنویسی می‌کند — عنوان، توضیحات، URLهای canonical، آیکون‌ها و کارت‌های Open Graph و Twitter.",
          "قالب عنوان همان لمس کوچکی است که مقیاس‌پذیر است: ریشه قالبی مثل %s · Next.js Academy تعریف می‌کند و هر صفحه‌ی فرزند فقط عنوان خودش را خروجی می‌دهد؛ نتیجه برندینگ یکدست در همه‌جا بدون تکرار مارک‌آپ است.",
        ],
        code: {
          title: "app/layout.tsx + app/docs/[slug]/page.tsx",
          lang: "tsx",
          content: `// ریشه: پیش‌فرض + قالب
export const metadata: Metadata = {
  title: { default: "Next.js Academy", template: "%s · Next.js Academy" },
  description: "اپ روتر را زیبا یاد بگیرید.",
};

// per-page، حتی داینامیک:
export async function generateMetadata({ params }) {
  const topic = await getTopic((await params).slug);
  return { title: topic.en.title, description: topic.en.description };
}`,
        },
      },
      {
        heading: "کارت‌های Open Graph و Twitter",
        body: [
          "متادیتای Open Graph همان چیزی است که یک URL خام را در تلگرام، واتساپ، اسلک و X به یک کارت غنی تبدیل می‌کند. openGraph.title و description و images را تنظیم کنید — و یادتان باشد تصاویر OG باید URL مطلق و قابل دسترس برای سرویس گیرنده باشند، نه مسیر نسبی.",
          "برای کارت‌های برنامه‌ریزی‌شده، می‌توانید تصاویر را در زمان بیلد با next/og (ImageResponse) رندر کنید: عکس محصول با قیمت واقعی، کارت گواهینامه یا پوستر اپیزود — ری‌اکت و JSX خالص که در بیلد به PNG تبدیل می‌شود.",
        ],
        code: {
          title: "متادیتای OG",
          lang: "tsx",
          content: `export const metadata: Metadata = {
  openGraph: {
    title: "Next.js Academy",
    description: "بیست سرفصل، دو زبان، یک رابط.",
    type: "website",
    images: ["https://example.com/og.png"],   // URL مطلق
  },
  twitter: { card: "summary_large_image" },
};`,
        },
      },
      {
        heading: "sitemap.ts و robots.ts و فایل‌های متادیتا",
        body: [
          "فایل‌های مخصوص، قراردادهای سئو را کامل می‌کنند: app/sitemap.ts یک sitemap XML خروجی می‌دهد (آرایه‌ی استاتیک یا تابع async)، app/robots.ts همان robots.txt را با قواعد allow/deny تولید می‌کند و فایل‌هایی مثل app/icon.svg یا app/apple-icon.png بدون هیچ تنظیمی favicon می‌شوند.",
          "این‌ها فقط توابعی هستند که داده برمی‌گردانند، پس سایت‌های داینامیک می‌توانند sitemap را مستقیم از دیتابیس در زمان بیلد بسازند. در همین سایت هم خروجی استاتیک، صفحه‌ی ۴۰۴ و favicon و متاتگ‌ها را به همان روش حمل می‌کند — موتورهای جست‌وجو تصویر کامل را می‌بینند حتی بدون سرور.",
        ],
        code: {
          title: "app/robots.ts",
          lang: "ts",
          content: `import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  };
}`,
        },
      },
    ],
  },
};
