import { Topic } from "../../lib/types";

export const deployment: Topic = {
  slug: "deployment",
  icon: "🚢",
  part: 4,
  en: {
    title: "Deployment",
    description:
      "Vercel, self-hosting and static export to GitHub Pages — including exactly how this website is deployed.",
    sections: [
      {
        heading: "Vercel — zero-config and full-featured",
        body: [
          "Vercel, the makers of Next.js, host it natively: connect the repo, and every push gets an isolated preview URL, while main deploys to production. ISR, Server Actions, image optimization, edge middleware and analytics all work with no configuration.",
          "It is the fastest path for anything that uses server features. The free hobby tier covers personal projects and is what most learners start with — the deployment story really is a git push.",
        ],
        bullets: [
          "Push-to-deploy with per-branch preview URLs",
          "ISR / Server Actions / image optimization supported natively",
          "Analytics, speed insights and cron jobs built in",
        ],
      },
      {
        heading: "Self-hosting — Node, Docker, or a static CDN",
        body: [
          "Anywhere Node runs, next build + next start works: a VPS, a container, Railway or Fly.io. You own the runtime, can deploy behind your own reverse proxy, and get every server feature — at the cost of managing the machine yourself.",
          "If your site is fully static — content sites, docs, marketing pages — you can skip the Node server entirely with output: \"export\" in next.config and ship the generated out/ folder to any static host: S3, Netlify, or GitHub Pages.",
        ],
        code: {
          title: "next.config.mjs — static export",
          lang: "js",
          content: `const nextConfig = {
  output: "export",                    // emit plain HTML/CSS/JS in out/
  basePath: "/nextjs-academy",         // when served from a sub-path
  images: { unoptimized: true },       // no optimization server on CDNs
};

export default nextConfig;`,
        },
      },
      {
        heading: "Case study: this site on GitHub Pages",
        body: [
          "This website is a live demonstration of the static-export path. The build runs next build with output: export and a basePath of /nextjs-academy, producing an out/ folder that is published to the gh-pages branch and served by GitHub Pages — no server, no cost, global CDN.",
          "Two details make it work: a .nojekyll file (so GitHub does not hide the _next/ folder), and setting basePath so assets resolve under the repository sub-path. The same pattern applies to any docs or content site you want to host free, forever.",
        ],
        bullets: [
          "output: \"export\" — pure HTML/CSS/JS, deployable anywhere",
          "basePath: \"/repo-name\" — required for GitHub project pages",
          "images.unoptimized — required without a Node image server",
          ".nojekyll — must exist in the published folder",
        ],
      },
    ],
  },
  fa: {
    title: "استقرار (Deployment)",
    description:
      "Vercel، سلف‌هاست و خروجی استاتیک به GitHub Pages — شامل دقیقاً همان روشی که همین وب‌سایت منتشر شده است.",
    sections: [
      {
        heading: "Vercel — بدون تنظیمات و با همه‌ی امکانات",
        body: [
          "Vercel، سازندگان نکست‌جی‌اس، آن را به‌صورت بومی میزبانی می‌کنند: ریپو را وصل کنید و هر push یک URL پیش‌نمایش ایزوله می‌گیرد، در حالی که main به تولید دیپلوی می‌شود. ISR، Server Action ها، بهینه‌سازی تصویر، middleware روی edge و آنالیتیکس همه بدون هیچ تنظیمی کار می‌کنند.",
          "برای هر چیزی که از امکانات سروری استفاده می‌کند، سریع‌ترین مسیر همین است. پلن رایگان hobby پروژه‌های شخصی را پوشش می‌دهد و بیشتر یادگیرنده‌ها از همین‌جا شروع می‌کنند — داستان استقرار واقعاً یک git push است.",
        ],
        bullets: [
          "دیپلوی با push و URL پیش‌نمایش به ازای هر برنچ",
          "پشتیبانی بومی از ISR / Server Action ها / بهینه‌سازی تصویر",
          "آنالیتیکس، بینش سرعت و cron job های داخلی",
        ],
      },
      {
        heading: "سلف‌هاست — Node، Docker یا یک CDN استاتیک",
        body: [
          "هر جا Node اجرا شود، next build و next start کار می‌کند: VPS، کانتینر، Railway یا Fly.io. ران‌تایم مال شماست، می‌توانید پشت پراکسی معکوس خودتان دیپلوی کنید و همه‌ی امکانات سروری را دارید — به قیمت مدیریت خودِ ماشین.",
          "اگر سایت‌تان کاملاً استاتیک است — سایت‌های محتوایی، مستندات، صفحات معرفی — می‌توانید با output: \"export\" در next.config از سرور Node کلاً صرف‌نظر کنید و پوشه‌ی تولیدشده‌ی out/ را به هر هاست استاتیکی بفرستید: S3، Netlify یا GitHub Pages.",
        ],
        code: {
          title: "next.config.mjs — خروجی استاتیک",
          lang: "js",
          content: `const nextConfig = {
  output: "export",                    // HTML/CSS/JS خالص در out/
  basePath: "/nextjs-academy",         // وقتی از زیرمسیر سرو می‌شود
  images: { unoptimized: true },       // روی CDN سرور بهینه‌سازی نیست
};

export default nextConfig;`,
        },
      },
      {
        heading: "مطالعه‌ی موردی: همین سایت روی GitHub Pages",
        body: [
          "این وب‌سایت یک نمایش زنده از مسیر خروجی استاتیک است. بیلد با next build و output: export و basePath برابر /nextjs-academy اجرا می‌شود، پوشه‌ی out/ تولید می‌شود که به برنچ gh-pages منتشر و توسط GitHub Pages سرو می‌شود — بدون سرور، بدون هزینه، با CDN سراسری.",
          "دو جزئیات این را ممکن می‌کند: یک فایل .nojekyll (تا گیت‌هاب پوشه‌ی _next/ را مخفی نکند) و تنظیم basePath تا assetها زیر زیرمسیر ریپو حل شوند. همین الگو برای هر سایت مستندات یا محتوایی که می‌خواهید برای همیشه رایگان میزبانی کنید جواب می‌دهد.",
        ],
        bullets: [
          "output: \"export\" — HTML/CSS/JS خالص، هر جا قابل دیپلوی",
          "basePath: \"/repo-name\" — برای GitHub Pages پروژه‌ای الزامی است",
          "images.unoptimized — بدون سرور تصویرِ Node الزامی است",
          ".nojekyll — باید در پوشه‌ی منتشرشده وجود داشته باشد",
        ],
      },
    ],
  },
};
