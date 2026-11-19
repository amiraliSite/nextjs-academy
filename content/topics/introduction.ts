import { Topic } from "../../lib/types";

export const introduction: Topic = {
  slug: "introduction",
  icon: "🚀",
  part: 1,
  en: {
    title: "Introduction to Next.js",
    description:
      "What Next.js actually is, why the React team recommends it, and how it upgrades plain React into a full production framework.",
    sections: [
      {
        heading: "What is Next.js?",
        body: [
          "Next.js is a full-stack React framework created and maintained by Vercel. On top of React's component model it adds everything a production web app needs: file-system routing, multiple rendering strategies, data fetching primitives, caching, and a build pipeline tuned for performance.",
          "The mental shift is simple: with plain React you assemble libraries yourself (a router, a bundler, an image optimizer, a server), while Next.js ships those pieces already integrated and tested together. You write components and pages — the framework orchestrates the rest.",
          "Next.js 15 is built on React 19 and centers on the App Router, a routing system where every folder inside the app directory becomes a URL, and every file inside it has a reserved, meaningful name like page.tsx or layout.tsx.",
        ],
        bullets: [
          "Routing — the file system is the router: create a folder, get a URL.",
          "Rendering — Static, Server-Side, Incremental Static and client rendering can be mixed per page.",
          "Data — async Server Components fetch data directly, no useEffect gymnastics required.",
          "Optimizations — images, fonts, scripts and metadata are optimized automatically.",
          "Full stack — Route Handlers and Server Actions let the same project run backend logic.",
        ],
      },
      {
        heading: "Why not just plain React?",
        body: [
          "A client-side-only React app (a classic Vite or CRA setup) sends a nearly empty HTML shell to the browser, then builds the UI with JavaScript. That hurts two things at once: search engines may index an empty page, and users stare at a blank screen until the bundle arrives.",
          "Next.js fixes this by rendering your components on the server first. The user receives meaningful HTML immediately — fast First Contentful Paint and fully crawlable markup — and then React takes over for interactivity. This hybrid model, plus fine-grained caching, is the core reason teams move to Next.js.",
          "There is also the economics of team velocity: conventions for routing, data, and metadata mean new files instead of new configuration, and fewer decisions to argue about. The official React documentation now explicitly recommends using a framework like Next.js for any production React app.",
        ],
        code: {
          title: "create-next-app",
          lang: "bash",
          content: `# Start a production-grade Next.js app in one command
npx create-next-app@latest my-app

# Answer the prompts:
# ✔ TypeScript?        → Yes  (recommended)
# ✔ App Router?        → Yes  (this academy teaches App Router)
# ✔ Tailwind CSS?      → optional
# ✔ src/ directory?    → optional`,
        },
      },
      {
        heading: "Who uses it, and where does it shine?",
        body: [
          "Next.js powers marketing sites, e-commerce storefronts, dashboards, documentation portals and AI product UIs — anywhere a team wants React ergonomics with server-grade performance. This very website is a live example: a fully static Next.js 15 export running on GitHub Pages.",
          "It shines when SEO or first-paint matters (landing pages, stores, content sites), when you need multiple rendering modes in one app (a static blog next to a live dashboard), or when you want a unified codebase for UI and API. For a purely internal SPA with no server needs, a simpler tool can still be reasonable — Next.js trades a little simplicity for a lot of capability.",
        ],
      },
    ],
  },
  fa: {
    title: "معرفی نکست‌جی‌اس",
    description:
      "نکست‌جی‌اس واقعاً چیست، چرا تیم ری‌اکت آن را توصیه می‌کند، و چگونه ری‌اکت ساده را به یک فریم‌ورک کامل تولیدی تبدیل می‌کند.",
    sections: [
      {
        heading: "نکست‌جی‌اس چیست؟",
        body: [
          "نکست‌جی‌اس یک فریم‌ورک کامل ری‌اکت است که توسط Vercel ساخته و نگهداری می‌شود. این فریم‌ورک روی مدل کامپوننتی ری‌اکت، هر چیزی را که یک وب‌اپ تولیدی نیاز دارد اضافه می‌کند: مسیریابی مبتنی بر فایل‌سیستم، استراتژی‌های متنوع رندر، ابزارهای دریافت داده، کش و پایپ‌لاین بیلدی که برای کارایی تنظیم شده است.",
          "تغییر نگاه ذهنی ساده است: با ری‌اکت خالی، خودتان کتابخانه‌ها را سر هم می‌کنید (روتر، باندلر، بهینه‌ساز تصویر، سرور)؛ اما نکست‌جی‌اس همه‌ی این قطعات را از قبل یکپارچه و تست‌شده تحویل می‌دهد. شما فقط کامپوننت و صفحه می‌نویسید — بقیه را فریم‌ورک هماهنگ می‌کند.",
          "نکست‌جی‌اس ۱۵ روی React 19 بنا شده و مرکز آن اپ روتر است؛ سیستمی که در آن هر پوشه‌ی داخل پوشه‌ی app یک URL می‌شود و هر فایل داخل آن نامی رزروشده و معنادار دارد مثل page.tsx یا layout.tsx.",
        ],
        bullets: [
          "مسیریابی — فایل‌سیستم همان روتر است: یک پوشه بساز، یک URL بگیر.",
          "رندر — رندر استاتیک، سمت سرور، استاتیک افزایشی و سمت کلاینت می‌توانند در یک اپ با هم باشند.",
          "داده — سرور کامپوننت‌های async مستقیم داده می‌گیرند؛ دیگر نیازی به ترفندهای useEffect نیست.",
          "بهینه‌سازی — تصویر، فونت، اسکریپت و متادیتا به‌صورت خودکار بهینه می‌شوند.",
          "فول‌استک — Route Handler ها و Server Action ها اجازه می‌دهند منطق بک‌اند هم در همان پروژه باشد.",
        ],
      },
      {
        heading: "چرا فقط ری‌اکت ساده کافی نیست؟",
        body: [
          "یک اپ ری‌اکتِ کاملاً سمت کلاینت (ست‌آپ کلاسیک Vite یا CRA) تقریباً یک پوسته‌ی HTML خالی به مرورگر می‌فرستد و بعد با جاوااسکریپت UI را می‌سازد. این همزمان دو چیز را ضعیف می‌کند: موتورهای جست‌وجو ممکن است صفحه‌ای خالی را ایندکس کنند و کاربر تا رسیدن باندل به صفحه‌ی سفید خیر می‌ماند.",
          "نکست‌جی‌اس این را با رندر کامپوننت‌ها روی سرور حل می‌کند. کاربر بلافاصله HTML معنادار می‌گیرد — First Contentful Paint سریع و مارک‌آپی که کاملاً قابل کرال است — و بعد ری‌اکت برای تعاملات کنترل را می‌گیرد. همین مدل ترکیبی، به‌علاوه‌ی کش ریزدانه، دلیل اصلی مهاجرت تیم‌ها به نکست‌جی‌اس است.",
          "از نظر سرعت تیم هم مقرون‌به‌صرفه است: قراردادهای آماده برای مسیریابی، داده و متادیتا یعنی به‌جای تنظیمات جدید، فقط فایل جدید می‌سازید و بحث‌های بی‌پایان تصمیم‌گیری کمتر می‌شود. مستندات رسمی ری‌اکت هم حالا صریحاً برای هر اپ تولیدی، استفاده از فریم‌ورکی مثل نکست‌جی‌اس را توصیه می‌کند.",
        ],
        code: {
          title: "ساخت اولین پروژه",
          lang: "bash",
          content: `# یک اپ تولیدی نکست‌جی‌اس با یک دستور بسازید
npx create-next-app@latest my-app

# به سوال‌ها جواب بدهید:
# ✔ TypeScript?        → Yes  (توصیه می‌شود)
# ✔ App Router?        → Yes  (همین آکادمی اپ روتر را درس می‌دهد)
# ✔ Tailwind CSS?      → اختیاری
# ✔ src/ directory?    → اختیاری`,
        },
      },
      {
        heading: "چه کسانی استفاده می‌کنند و کجا می‌درخشد؟",
        body: [
          "نکست‌جی‌اس نیروی محرکه‌ی سایت‌های معرفی محصول، فروشگاه‌های اینترنتی، داشبوردها، پرتال‌های مستندات و رابط محصولات هوش مصنوعی است — هر جا تیمی ارگونومی ری‌اکت را با کارایی در حد سرور می‌خواهد. همین وب‌سایت هم یک نمونه‌ی زنده است: یک خروجی کاملاً استاتیک از Next.js 15 که روی GitHub Pages اجرا می‌شود.",
          "جایی می‌درخشد که سئو یا نمایش اولیه اهمیت دارد (لندینگ‌ها، فروشگاه‌ها، سایت‌های محتوایی)، وقتی چند حالت رندر در یک اپ لازم است (یک بلاگ استاتیک کنار یک داشبورد زنده)، یا وقتی می‌خواهید UI و API در یک کدبیس واحد باشند. برای یک SPA داخلیِ بدون نیاز به سرور، ابزار ساده‌تر همچنان منطقی است — نکست‌جی‌اس کمی سادگی را با خیلی توانمندی معامله می‌کند.",
        ],
      },
    ],
  },
};
