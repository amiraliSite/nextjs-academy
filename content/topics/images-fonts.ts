import { Topic } from "../../lib/types";

export const imagesFonts: Topic = {
  slug: "images-fonts",
  icon: "🖼️",
  part: 4,
  en: {
    title: "Images & Fonts",
    description:
      "next/image and next/font — the two components that remove the most common performance sins with a few lines of code.",
    sections: [
      {
        heading: "next/image — images that optimize themselves",
        body: [
          "The next/image component wraps every image in a smart pipeline: correct srcset and sizes so each device downloads the right resolution, WebP/AVIF conversion, lazy loading by default, and automatic prevention of layout shift through reserved dimensions.",
          "The two properties that matter most: sizes, which tells the browser how wide the image will render (critical for responsive layouts), and priority for the image that paints first on a page (usually the hero), which forces eager loading and a preload hint.",
        ],
        code: {
          title: "hero image",
          lang: "tsx",
          content: `import Image from "next/image";

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Astronaut over the Earth"
      width={1200}
      height={600}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority            // above-the-fold: preload it
    />
  );
}`,
        },
      },
      {
        heading: "next/font — fonts with zero layout shift",
        body: [
          "next/font downloads and self-hosts Google Fonts (or local files) at build time. Fonts are served from your own origin — no third-party request, no privacy leak — and the browser gets the font files preloaded before CSS kicks in.",
          "It also creates an automatic CSS fallback metric (size-adjusted clone of your fallback font), which is the official fix for the infamous flash-of-unstyled-text / layout-shift problem. You get the font as a CSS variable you wire into your design tokens — this site loads Space Grotesk, Vazirmatn and JetBrains Mono exactly this way.",
        ],
        code: {
          title: "app/layout.tsx",
          lang: "tsx",
          content: `import { Inter, Vazirmatn } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-fa" });

export default function RootLayout({ children }) {
  return (
    <html className={inter.variable + " " + vazir.variable}>
      <body>{children}</body>
    </html>
  );
}`,
        },
      },
      {
        heading: "Static files and where they belong",
        body: [
          "Anything in public/ is served verbatim from the root: favicon.ico, robots.txt, og images, PDFs. Reference them with absolute URLs like /file.png — never import them, and never put images that need optimization in public.",
          "The rule of thumb: optimized, responsive content images go through next/image; immutable app assets (logos, icons) can live in public or be inlined as SVG; fonts always go through next/font. Static exports (like this site on GitHub Pages) skip the image-optimization server, so set images.unoptimized in next.config.",
        ],
        bullets: [
          "public/ — served from /, great for favicon, robots.txt, og images",
          "next/image — for every content image that a user scrolls to see",
          "next/font — for every font, Google or local, no exceptions",
          "Static export — add images: { unoptimized: true } to the config",
        ],
      },
    ],
  },
  fa: {
    title: "تصاویر و فونت‌ها",
    description:
      "next/image و next/font — دو کامپوننتی که رایج‌ترین گناهان کارایی را با چند خط کد از بین می‌برند.",
    sections: [
      {
        heading: "next/image — تصاویری که خودشان را بهینه می‌کنند",
        body: [
          "کامپوننت next/image هر تصویر را در یک پایپ‌لاین هوشمند می‌پیچد: srcset و sizes درست تا هر دستگاه رزولوشن مناسب را دانلود کند، تبدیل به WebP/AVIF، lazy loading به‌صورت پیش‌فرض، و جلوگیری خودکار از پرش لی‌آوت با رزرو ابعاد.",
          "دو پراپرتی مهم‌تر از همه‌اند: sizes که به مرورگر می‌گوید تصویر قرار است چقدر عریض رندر شود (برای لی‌آوت‌های ریسپانسیو حیاتی است) و priority برای تصویری که اولین رنگ را روی صفحه می‌کشد (معمولاً هیرو) که لود eager و hint پیش‌بارگذاری را فعال می‌کند.",
        ],
        code: {
          title: "تصویر هیرو",
          lang: "tsx",
          content: `import Image from "next/image";

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="فضانورد بالای زمین"
      width={1200}
      height={600}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority            // بالای فولد: preload کن
    />
  );
}`,
        },
      },
      {
        heading: "next/font — فونت با صفر پرش لی‌آوت",
        body: [
          "next/font فونت‌های گوگل (یا فایل‌های محلی) را در زمان بیلد دانلود و self-host می‌کند. فونت‌ها از دامنه‌ی خودتان سرو می‌شوند — بدون درخواست ثالث، بدون نشت حریم خصوصی — و مرورگر فایل‌های فونت را قبل از CSS به‌صورت پیش‌بارگذاری‌شده می‌گیرد.",
          "همچنین یک fallback metric خودکار می‌سازد (کلون هم‌اندازه‌ی فونت fallback) که راه‌حل رسمی مشکل معروف flash-of-unstyled-text و پرش لی‌آوت است. فونت به‌صورت CSS variable تحویل می‌شود که به توکن‌های طراحی‌تان وصل می‌کنید — همین سایت Space Grotesk و Vazirmatn و JetBrains Mono را دقیقاً همین‌طور لود می‌کند.",
        ],
        code: {
          title: "app/layout.tsx",
          lang: "tsx",
          content: `import { Inter, Vazirmatn } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const vazir = Vazirmatn({ subsets: ["arabic", "latin"], variable: "--font-fa" });

export default function RootLayout({ children }) {
  return (
    <html className={inter.variable + " " + vazir.variable}>
      <body>{children}</body>
    </html>
  );
}`,
        },
      },
      {
        heading: "فایل‌های استاتیک و جای درستشان",
        body: [
          "هر چیزی در public/ عیناً از ریشه سرو می‌شود: favicon.ico، robots.txt، تصاویر og، PDFها. با URL مطلق مثل /file.png ارجاع بدهید — هرگز import‌شان نکنید و تصاویری که بهینه‌سازی لازم دارند را در public نگذارید.",
          "قاعده‌ی سرانگشتی: تصاویر محتواییِ بهینه‌شده از next/image می‌روند؛ assetهای تغییرناپذیر اپ (لوگو، آیکون) در public یا به‌صورت SVG اینلاین می‌شوند؛ فونت‌ها همیشه از next/font می‌روند. خروجی استاتیک (مثل همین سایت روی GitHub Pages) سرور بهینه‌سازی تصویر ندارد، پس images.unoptimized را در next.config تنظیم کنید.",
        ],
        bullets: [
          "public/ — از / سرو می‌شود؛ مناسب favicon، robots.txt، تصاویر og",
          "next/image — برای هر تصویر محتوایی که کاربر اسکرول می‌کند تا ببیند",
          "next/font — برای هر فونت، گوگل یا محلی، بدون استثنا",
          "خروجی استاتیک — images: { unoptimized: true } را به کانفیگ اضافه کنید",
        ],
      },
    ],
  },
};
