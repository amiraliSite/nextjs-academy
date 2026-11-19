import { Topic } from "../../lib/types";

export const performance: Topic = {
  slug: "performance",
  icon: "🏎️",
  part: 4,
  en: {
    title: "Performance Optimization",
    description:
      "Built-in speed wins, bundle discipline with client boundaries, and measuring with Core Web Vitals — a fast site is a design decision.",
    sections: [
      {
        heading: "What you get for free",
        body: [
          "Before touching any optimization, remember how much Next.js already does: server rendering and partial hydration, automatic image optimization and preloading, self-hosted fonts with zero layout shift, route prefetching on viewport, and code splitting per route segment.",
          "The fastest lever is still architectural — keeping components on the server. Every component that stays out of the client bundle shrinks JavaScript for everyone; a page that is 90% Server Components often hydrates in a fraction of a similar classic SPA.",
        ],
        bullets: [
          "Server-first architecture — the biggest JS you can ship is none",
          "prefetch on visible Links — navigation feels instant",
          "Images + fonts handled by next/image and next/font",
          "Per-segment code splitting — routes load only their own code",
        ],
      },
      {
        heading: "Bundle discipline — shrink the client islands",
        body: [
          "When a client component is unavoidable, keep it small and leaf-positioned: an interactive button, not a page wrapper. Watch imports — a single date library or icon pack pulled into a client file can add hundreds of kilobytes to a segment.",
          "Use next/dynamic to lazy-load heavy widgets (charts, editors, maps) so their chunk downloads only when needed, and prefer passing server-rendered children into client wrappers instead of passing raw data. Profile with the bundle analyzer (@next/bundle-analyzer) before guessing.",
        ],
        code: {
          title: "lazy client island",
          lang: "tsx",
          content: `import dynamic from "next/dynamic";

// downloads the chart only when rendered
const Chart = dynamic(() => import("./chart"), {
  loading: () => <p>Loading chart…</p>,
  ssr: false,   // skip server render for canvas-only widgets
});`,
        },
      },
      {
        heading: "Measure: Core Web Vitals and Lighthouse",
        body: [
          "Optimize against numbers, not vibes. LCP (Largest Contentful Paint) is dominated by images and server time — fix with priority images, caching and streaming. INP (Interaction to Next Paint) suffers from heavy hydration and long client handlers — fix with smaller client islands. CLS (Cumulative Layout Shift) dies from un-dimensioned images and late fonts — next/image and next/font are the cure.",
          "Run Lighthouse in Chrome DevTools on production builds, and use the useReportWebVitals hook to send real-user metrics to analytics. This site is a fully static export, which is why it loads fast from GitHub Pages anywhere in the world — the deployment topic shows you how.",
        ],
        bullets: [
          "LCP — image priority, caching, streaming",
          "INP — fewer/hydrated-later client components",
          "CLS — dimensioned images, self-hosted fonts",
          "Ship production builds when measuring, never dev mode",
        ],
      },
    ],
  },
  fa: {
    title: "بهینه‌سازی کارایی",
    description:
      "سرعت‌های از پیش ساخته، انضباط باندل با مرزهای کلاینت، و سنجش با Core Web Vitals — سایت سریع یک تصمیم طراحی است.",
    sections: [
      {
        heading: "چیزهایی که مجانی می‌گیرید",
        body: [
          "قبل از دست زدن به هر بهینه‌سازی، یادتان باشد نکست‌جی‌اس چقدر از قبل انجام می‌دهد: رندر سروری و hydration جزئی، بهینه‌سازی و preload خودکار تصاویر، فونت‌های self-host با صفر پرش لی‌آوت، prefetch مسیرها روی viewport و code splitting به ازای هر سگمنت مسیر.",
          "قدرتمندترین اهرم همچنان معماری است — نگه‌داشتن کامپوننت‌ها روی سرور. هر کامپوننتی که از باندل کلاینت بیرون بماند، جاوااسکریپت را برای همه کوچک‌تر می‌کند؛ صفحه‌ای که ۹۰٪ سرور کامپوننت است اغلب در کسری از یک SPA کلاسیک مشابه hydrate می‌شود.",
        ],
        bullets: [
          "معماری سرور-محور — بزرگ‌ترین JS قابل ارسال، هیچ است",
          "prefetch روی لینک‌های قابل مشاهده — ناوبری فوری حس می‌شود",
          "تصویر و فونت با next/image و next/font مدیریت می‌شوند",
          "code splitting به ازای هر سگمنت — هر مسیر فقط کد خودش را لود می‌کند",
        ],
      },
      {
        heading: "انضباط باندل — جزایر کلاینتی را کوچک کنید",
        body: [
          "وقتی کلاینت کامپوننت اجتناب‌ناپذیر است، کوچک و برگ‌موقعیت نگهش دارید: یک دکمه‌ی تعاملی، نه یک رپر صفحه. ایمپورت‌ها را زیر نظر داشته باشید — یک کتابخانه‌ی تاریخ یا پک آیکون که در یک فایل کلاینتی ایمپورت شود می‌تواند صدها کیلوبایت به یک سگمنت اضافه کند.",
          "ویجت‌های سنگین (چارت، ادیتور، نقشه) را با next/dynamic به‌صورت lazy لود کنید تا chunkشان فقط در صورت نیاز دانلود شود، و به‌جای دادن داده‌ی خام به رپرهای کلاینتی، children رندرشده‌ی سروری به آن‌ها بدهید. قبل از حدس‌زدن، با باندل آنالایزر (@next/bundle-analyzer) پروفایل کنید.",
        ],
        code: {
          title: "جزیره‌ی کلاینتی lazy",
          lang: "tsx",
          content: `import dynamic from "next/dynamic";

// چارت فقط هنگام رندر دانلود می‌شود
const Chart = dynamic(() => import("./chart"), {
  loading: () => <p>در حال لود چارت…</p>,
  ssr: false,   // برای ویجت‌های فقط-کانواس، رندر سروری را رد کن
});`,
        },
      },
      {
        heading: "سنجش: Core Web Vitals و Lighthouse",
        body: [
          "بر اساس عدد بهینه‌سازی کنید نه حس. LCP (Largest Contentful Paint) تحت سلطه‌ی تصاویر و زمان سرور است — با تصاویر priority، کش و استریمینگ درستش کنید. INP (Interaction to Next Play) از hydration سنگین و هندلرهای طولانی کلاینت آسیب می‌بیند — با جزایر کلاینتی کوچک‌تر درستش کنید. CLS (Cumulative Layout Shift) با تصاویر بدون ابعاد و فونت‌های دیر می‌میرد — next/image و next/font درمانش‌اند.",
          "Lighthouse را در Chrome DevTools روی بیلدهای تولیدی اجرا کنید و از هوک useReportWebVitals برای ارسال متریک کاربر واقعی به آنالیتیکس استفاده کنید. همین سایت یک خروجی کاملاً استاتیک است؛ به همین دلیل از GitHub Pages در هر نقطه‌ی دنیا سریع لود می‌شود — سرفصل استقرار نشان می‌دهد چطور.",
        ],
        bullets: [
          "LCP — اولویت تصویر، کش، استریمینگ",
          "INP — کلاینت کامپوننت‌های کمتر و hydrate دیرتر",
          "CLS — تصویر با ابعاد مشخص، فونت self-host",
          "هنگام سنجش فقط بیلد تولیدی بفرستید، نه dev mode",
        ],
      },
    ],
  },
};
