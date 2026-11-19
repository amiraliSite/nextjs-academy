import { Topic } from "../../lib/types";

export const envVars: Topic = {
  slug: "env-vars",
  icon: "🔑",
  part: 4,
  en: {
    title: "Environment Variables",
    description:
      ".env files, the NEXT_PUBLIC trap, and build-time vs runtime secrets — keep your keys on the server where they belong.",
    sections: [
      {
        heading: "The .env family and loading order",
        body: [
          "Next.js loads environment files automatically in a precise order: .env (always), .env.local (all environments except test, git-ignored), then .env.development or .env.production depending on the phase, and finally .env.development.local / .env.production.local which override everything.",
          "Variables become available on process.env in server code immediately — restart the dev server after editing, because env files are read at startup, not hot-reloaded. Committing .env.local to Git is the classic rookie leak; it is already ignored by create-next-app's .gitignore, keep it that way.",
        ],
        bullets: [
          ".env — safe defaults, can be committed",
          ".env.local — personal overrides, never commit (git-ignored by default)",
          ".env.production — production-phase values for build and start",
          "Order — .local files always win over the rest",
        ],
      },
      {
        heading: "The NEXT_PUBLIC trap",
        body: [
          "Only variables prefixed with NEXT_PUBLIC_ are inlined into the client bundle at build time — everything else stays server-only. The trap: any secret that becomes NEXT_PUBLIC_ is now literally readable in the browser source, permanently, for everyone.",
          "The safe pattern is the proxy: expose a public value (site URL, analytics key) with NEXT_PUBLIC_, and keep real secrets unprefixed, consumed only in Server Components, Server Actions or Route Handlers. The client never needs your database password — it needs your API.",
        ],
        code: {
          title: "environment usage",
          lang: "ts",
          content: `// next.config / .env
// DATABASE_URL=postgres://...      ← server-only secret
// NEXT_PUBLIC_SITE_URL=https://…   ← safe to expose

// server-side (action / handler / server component)
await fetch(process.env.DATABASE_URL!);

// client-side — only public values exist here
const site = process.env.NEXT_PUBLIC_SITE_URL;`,
        },
      },
      {
        heading: "Build-time vs runtime",
        body: [
          "NEXT_PUBLIC_ values are baked into the bundle when next build runs, and regular variables are read when server code executes. For self-hosted Node servers, plain variables can therefore be changed per deployment without rebuilding — Docker users inject them at container start.",
          "Static exports (like this site) have no runtime at all: everything is build-time, so only NEXT_PUBLIC_ values reach the shipped files — another reason static sites must never carry secrets. Hosts like Vercel inject env values at build and runtime from their dashboard, which is the modern workflow.",
        ],
        bullets: [
          "Secrets stay unprefixed and server-side only",
          "NEXT_PUBLIC_ is compile-time — changing it requires a rebuild",
          "Static export: no runtime, public values only, never secrets",
          "Never log process.env or dump it to the client",
        ],
      },
    ],
  },
  fa: {
    title: "متغیرهای محیطی",
    description:
      "فایل‌های .env، تله‌ی NEXT_PUBLIC، و زمان بیلد در برابر زمان اجرا — کلیدها را روی سرور نگه دارید که مال آنجاست.",
    sections: [
      {
        heading: "خانواده‌ی .env و ترتیب لود",
        body: [
          "نکست‌جی‌اس فایل‌های محیطی را با ترتیب دقیقی خودکار لود می‌کند: .env (همیشه)، .env.local (همه‌ی محیط‌ها به‌جز test، از گیت حذف‌شده)، بعد .env.development یا .env.production بسته به فاز، و در نهایت .env.development.local / .env.production.local که روی همه چیز غلبه می‌کنند.",
          "متغیرها بلافاصله در process.env کد سروری در دسترس‌اند — بعد از ویرایش، سرور dev را ری‌استارت کنید چون فایل‌های env در startup خوانده می‌شوند نه با hot reload. کامیت‌کردن .env.local به گیت نشت کلاسیک تازه‌کارهاست؛ .gitignore مربوط به create-next-app از قبل نادیده‌اش گرفته، همین‌طور نگهش دارید.",
        ],
        bullets: [
          ".env — پیش‌فرض‌های امن، قابل کامیت",
          ".env.local — overrideهای شخصی، هرگز کامیت نکنید (به‌صورت پیش‌فرض در gitignore است)",
          ".env.production — مقادیر فاز تولید برای build و start",
          "ترتیب — فایل‌های .local همیشه از بقیه برنده‌اند",
        ],
      },
      {
        heading: "تله‌ی NEXT_PUBLIC",
        body: [
          "فقط متغیرهایی که با NEXT_PUBLIC_ شروع می‌شوند در زمان بیلد داخل باندل کلاینت درج می‌شوند — بقیه فقط سروری می‌مانند. تله‌ی اینجاست: هر رازى که NEXT_PUBLIC_ شود، دیگر به‌صورت متنی در سورس مرورگر خواندنی است، دائمی، برای همه.",
          "الگوی امن، پروکسی است: مقدار عمومی را با NEXT_PUBLIC_ منتشر کنید (URL سایت، کلید آنالیتیکس) و رازهای واقعی را بدون پیشوند نگه دارید و فقط در سرور کامپوننت‌ها، Server Action ها یا Route Handler ها مصرف کنید. کلاینت هرگز به پسورد دیتابیس شما نیاز ندارد — به API شما نیاز دارد.",
        ],
        code: {
          title: "استفاده از متغیرهای محیطی",
          lang: "ts",
          content: `// next.config / .env
// DATABASE_URL=postgres://...      ← رازِ فقط-سروری
// NEXT_PUBLIC_SITE_URL=https://…   ← انتشارش امن است

// سمت سرور (action / handler / سرور کامپوننت)
await fetch(process.env.DATABASE_URL!);

// سمت کلاینت — فقط مقادیر عمومی اینجا وجود دارند
const site = process.env.NEXT_PUBLIC_SITE_URL;`,
        },
      },
      {
        heading: "زمان بیلد در برابر زمان اجرا",
        body: [
          "مقادیر NEXT_PUBLIC_ هنگام اجرای next build داخل باندل پخته می‌شوند و متغیرهای معمولی هنگام اجرای کد سروری خوانده می‌شوند. پس برای سرورهای Node سلف‌هاست، متغیرهای ساده را می‌توان بدون بیلد دوباره، به ازای هر دیپلوی عوض کرد — کاربران Docker هنگام start کانتینر تزریقشان می‌کنند.",
          "خروجی‌های استاتیک (مثل همین سایت) اصلاً ران‌تایم ندارند: همه‌چیز بیلد-تایم است، پس فقط مقادیر NEXT_PUBLIC_ به فایل‌های منتشرشده می‌رسند — یک دلیل دیگر که سایت‌های استاتیک هرگز نباید راز حمل کنند. هاست‌هایی مثل Vercel مقادیر env را از داشبوردشان در زمان بیلد و اجرا تزریق می‌کنند که گردش‌کار مدرن همین است.",
        ],
        bullets: [
          "رازها بدون پیشوند و فقط سمت سرور می‌مانند",
          "NEXT_PUBLIC_ کامپایل-تایم است — تغییرش یعنی بیلد دوباره",
          "خروجی استاتیک: بدون ران‌تایم، فقط مقادیر عمومی، هرگز راز",
          "هرگز process.env را لاگ یا dump به سمت کلاینت نکنید",
        ],
      },
    ],
  },
};
