import { Topic } from "../../lib/types";

export const projectStructure: Topic = {
  slug: "project-structure",
  icon: "📁",
  part: 1,
  en: {
    title: "Project Structure",
    description:
      "Top-level files, the app directory conventions, private folders and route groups — the map you will navigate every day.",
    sections: [
      {
        heading: "Top-level files and folders",
        body: [
          "A Next.js project keeps its surface area deliberately small. At the root you find next.config.mjs (framework configuration), tsconfig.json (TypeScript settings), package.json (scripts and dependencies) and next-env.d.ts (auto-generated types — do not edit).",
          "Two folders matter most: public/ holds static assets served verbatim from the root URL (images, fonts, robots.txt), and app/ holds the entire routing tree. Everything else — components, hooks, utilities — is plain code that lives wherever your team decides.",
        ],
        code: {
          title: "project tree",
          lang: "bash",
          content: `my-app/
├── app/              # routing tree: pages, layouts, loaders
├── public/           # static assets served from "/"
├── next.config.mjs   # framework config (export, basePath, images)
├── tsconfig.json     # TypeScript configuration
├── next-env.d.ts     # generated types (do not edit)
└── package.json      # scripts & dependencies`,
        },
      },
      {
        heading: "Inside the app directory",
        body: [
          "Every folder in app/ becomes a route segment, and special file names define behavior: page.tsx makes a route publicly accessible, layout.tsx wraps its children with shared UI, route.ts exposes an API endpoint, and loading.tsx / error.tsx / not-found.tsx add ready-made UI states.",
          "Two naming tricks control visibility and grouping. A folder prefixed with an underscore (like _components) is a private folder — colocated code that never becomes a URL. Parentheses create a route group — (marketing) and (shop) can both contain a home page, each with a different layout, without the group name appearing in the URL.",
        ],
        code: {
          title: "app/ conventions",
          lang: "bash",
          content: `app/
├── layout.tsx        # root layout — wraps EVERY route
├── page.tsx          # the home page: "/"
├── globals.css       # global styles
├── blog/
│   ├── layout.tsx    # wraps all /blog/* routes
│   └── page.tsx      # /blog
├── dashboard/
│   ├── _components/  # private: no URL is created
│   └── page.tsx      # /dashboard
└── (shop)/
    └── checkout/
        └── page.tsx  # /checkout — group name is invisible`,
        },
      },
      {
        heading: "Organizing the rest of your code",
        body: [
          "The app directory is for routes; your building blocks do not have to live there. Most teams keep components/, lib/ (utilities and clients like a Prisma singleton) and content or config folders at the root, then import them with an alias such as @/components — configured in tsconfig.json paths.",
          "This website follows exactly that pattern: app/ holds routes and global styles, components/ holds the UI, lib/ holds types and the topic registry, and content/topics/ holds the bilingual lessons you are reading. It is a boring, battle-tested layout that scales well past twenty routes.",
        ],
        bullets: [
          "components/ — shared UI, imported by pages and layouts",
          "lib/ — pure logic, types, third-party client singletons",
          "content/ or data/ — structured content, MDX or JSON",
          "styles/ — only if you split global CSS beyond app/",
        ],
      },
    ],
  },
  fa: {
    title: "ساختار پروژه",
    description:
      "فایل‌های ریشه، قراردادهای پوشه‌ی app، پوشه‌های خصوصی و گروه‌های مسیر — نقشه‌ای که هر روز در آن حرکت می‌کنید.",
    sections: [
      {
        heading: "فایل‌ها و پوشه‌های سطح ریشه",
        body: [
          "یک پروژه‌ی نکست‌جی‌اس سطح تماس خود را عمداً کوچک نگه می‌دارد. در ریشه فقط چند فایل دارید: next.config.mjs (پیکربندی فریم‌ورک)، tsconfig.json (تنظیمات TypeScript)، package.json (اسکریپت‌ها و وابستگی‌ها) و next-env.d.ts (تایپ‌های خودکار — دست نزنید).",
          "دو پوشه مهم‌تر از بقیه‌اند: public/ فایل‌های استاتیک را از ریشه‌ی URL عیناً سرو می‌کند (تصاویر، فونت‌ها، robots.txt) و app/ کل درخت مسیریابی را نگه می‌دارد. بقیه‌ی چیزها — کامپوننت‌ها، هوک‌ها، ابزارها — کد معمولی‌اند و هر جا که تیم تصمیم بگیرد می‌نشینند.",
        ],
        code: {
          title: "درخت پروژه",
          lang: "bash",
          content: `my-app/
├── app/              # درخت مسیریابی: صفحه، لی‌آوت، لودر
├── public/           # فایل‌های استاتیک از "/"
├── next.config.mjs   # پیکربندی (export، basePath، images)
├── tsconfig.json     # تنظیمات TypeScript
├── next-env.d.ts     # تایپ‌های خودکار (دست نزنید)
└── package.json      # اسکریپت‌ها و وابستگی‌ها`,
        },
      },
      {
        heading: "داخل پوشه‌ی app",
        body: [
          "هر پوشه در app/ یک سگمنت مسیر می‌شود و نام‌های فایل مخصوص، رفتار را تعیین می‌کنند: page.tsx مسیر را عمومی می‌کند، layout.tsx فرزندانش را با UI مشترک می‌پوشاند، route.ts یک اندپوینت API می‌سازد و loading.tsx و error.tsx و not-found.tsx حالت‌های آماده‌ی رابط اضافه می‌کنند.",
          "دو ترفند نام‌گذاری، دید و گروه‌بندی را کنترل می‌کنند. پوشه‌ای که با آندرلاین شروع شود (مثل _components) خصوصی است — کد هم‌مکان‌شده که هرگز URL نمی‌شود. پرانتز یک گروه مسیر می‌سازد — (marketing) و (shop) می‌توانند هرکدام صفحه‌ی خانه با لی‌آوت متفاوت داشته باشند، بدون اینکه نام گروه در URL ظاهر شود.",
        ],
        code: {
          title: "قراردادهای app/",
          lang: "bash",
          content: `app/
├── layout.tsx        # root layout — همه‌ی مسیرها را می‌پوشاند
├── page.tsx          # صفحه‌ی خانه: "/"
├── globals.css       # استایل سراسری
├── blog/
│   ├── layout.tsx    # پوشش همه‌ی /blog/*
│   └── page.tsx      # /blog
├── dashboard/
│   ├── _components/  # خصوصی: هیچ URL‌ای ساخته نمی‌شود
│   └── page.tsx      # /dashboard
└── (shop)/
    └── checkout/
        └── page.tsx  # /checkout — نام گروه دیده نمی‌شود`,
        },
      },
      {
        heading: "سازمان‌دهی بقیه‌ی کد",
        body: [
          "پوشه‌ی app برای مسیرهاست؛ بلوک‌های سازنده‌تان مجبور نیستند آنجا باشند. بیشتر تیم‌ها components/ و lib/ (ابزارها و کلاینت‌هایی مثل یک Singleton پرایسما) و پوشه‌های محتوا یا تنظیمات را در ریشه نگه می‌دارند و با الیاس‌هایی مثل @/components ایمپورت می‌کنند — که در paths داخل tsconfig.json تنظیم می‌شود.",
          "همین وب‌سایت دقیقاً همین الگو را دنبال می‌کند: app/ مسیرها و استایل سراسری، components/ رابط کاربری، lib/ تایپ‌ها و رجیستری سرفصل‌ها، و content/topics/ درس‌های دوزبانه‌ای که دارید می‌خوانید. یک ساختار ساده و تست‌شده که برای خیلی بیشتر از بیست مسیر هم مقیاس‌پذیر است.",
        ],
        bullets: [
          "components/ — UI مشترک که صفحه‌ها و لی‌آوت‌ها ایمپورت می‌کنند",
          "lib/ — منطق خالص، تایپ‌ها، Singletonهای کلاینت ثالث",
          "content/ یا data/ — محتوای ساخت‌یافته، MDX یا JSON",
          "styles/ — فقط اگر CSS سراسری را از app/ جدا می‌کنید",
        ],
      },
    ],
  },
};
