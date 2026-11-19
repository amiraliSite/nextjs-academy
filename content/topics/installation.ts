import { Topic } from "../../lib/types";

export const installation: Topic = {
  slug: "installation",
  icon: "⚙️",
  part: 1,
  en: {
    title: "Installation & Setup",
    description:
      "Prerequisites, scaffolding a project with create-next-app, and the dev/build/start scripts you will use every day.",
    sections: [
      {
        heading: "Prerequisites",
        body: [
          "You need Node.js 18.18 or newer installed — 20 LTS or later is recommended, since several optimizations assume a modern runtime. Any package manager works: npm ships with Node, while pnpm and yarn are fine alternatives that save disk space and install time.",
          "TypeScript is optional but strongly recommended: Next.js generates its types automatically and the App Router's file conventions are much easier to navigate with types. A basic understanding of React components and props is assumed throughout this academy.",
        ],
        bullets: [
          "Node.js ≥ 18.18 (20+ recommended) — check with: node -v",
          "A package manager: npm, pnpm, yarn or bun",
          "Recommended: VS Code with the official TypeScript support built in",
          "Optional: Git for pushing projects like this one to GitHub",
        ],
      },
      {
        heading: "Scaffolding with create-next-app",
        body: [
          "create-next-app is the official interactive scaffolder. It generates a complete, working project: Next.js configured with the App Router, TypeScript settings, linting, fonts already wired up, and a small demo page to verify everything runs.",
          "You can also pass every choice as CLI flags, which is handy for scripting or when you want to skip the prompts. The command below is what most teams use as a standard starting point.",
        ],
        code: {
          title: "terminal",
          lang: "bash",
          content: `# Interactive mode — answer the prompts
npx create-next-app@latest my-app

# Non-interactive, all flags at once
npx create-next-app@latest my-app \\
  --typescript \\
  --app \\
  --eslint \\
  --no-tailwind \\
  --no-src-dir \\
  --import-alias "@/*"

cd my-app
npm run dev`,
        },
      },
      {
        heading: "Dev, build, start — the three scripts",
        body: [
          "npm run dev starts a development server on http://localhost:3000 with hot reloading: edit a file and the browser updates almost instantly. Next 15 can run dev with Turbopack (next dev --turbopack) for significantly faster refresh on large projects.",
          "npm run build compiles and pre-renders the whole app for production, and npm start serves that build locally. During build you will see a summary of every route and whether it was prerendered as static (○) or rendered on demand (ƒ) — a quick health check of your rendering strategy.",
        ],
        code: {
          title: "package.json",
          lang: "json",
          content: `{
  "scripts": {
    "dev": "next dev",            // fast refresh dev server
    "build": "next build",        // production compile + prerender
    "start": "next start"         // serve the production build
  }
}`,
        },
      },
    ],
  },
  fa: {
    title: "نصب و راه‌اندازی",
    description:
      "پیش‌نیازها، ساخت پروژه با create-next-app و اسکریپت‌های dev و build و start که هر روز با آن‌ها کار می‌کنید.",
    sections: [
      {
        heading: "پیش‌نیازها",
        body: [
          "به Node.js نسخه‌ی ۱۸.۱۸ یا بالاتر نیاز دارید — نسخه‌ی ۲۰ LTS یا جدیدتر توصیه می‌شود، چون چند بهینه‌سازی فرض می‌کنند ران‌تامر مدرن دارید. هر پکیج منیجری جواب می‌دهد: npm همراه Node می‌آید و pnpm و yarn هم گزینه‌های خوبی برای صرفه‌جویی در دیسک و زمان نصب هستند.",
          "TypeScript اختیاری است اما به‌شدت توصیه می‌شود: نکست‌جی‌اس تایپ‌ها را خودکار تولید می‌کند و پیمودن قراردادهای فایل اپ روتر با تایپ خیلی راحت‌تر است. در کل این آکادمی، آشنایی مقدماتی با کامپوننت‌ها و props در ری‌اکت فرض شده است.",
        ],
        bullets: [
          "Node.js ≥ 18.18 (نسخه‌ی ۲۰ به بالا توصیه می‌شود) — چک کنید با: node -v",
          "یک پکیج منیجر: npm، pnpm، yarn یا bun",
          "توصیه‌شده: VS Code با پشتیبانی رسمی TypeScript",
          "اختیاری: Git برای پوش کردن پروژه‌هایی مثل همین سایت به GitHub",
        ],
      },
      {
        heading: "ساخت پروژه با create-next-app",
        body: [
          "create-next-app ابزار رسمی و تعاملی ساخت پروژه است. یک پروژه‌ی کامل و قابل اجرا تولید می‌کند: نکست‌جی‌اس با اپ روتر پیکربندی‌شده، تنظیمات TypeScript، لینت، فونت‌های متصل و یک صفحه‌ی دمو کوچک برای اطمینان از درست بودن همه‌چیز.",
          "می‌توانید همه‌ی انتخاب‌ها را به‌صورت فلگ CLI هم بدهید که برای اسکریپت‌نویسی یا رد کردن سوال‌ها مفید است. دستور زیر نقطه‌ی شروع استاندارد بیشتر تیم‌هاست.",
        ],
        code: {
          title: "ترمینال",
          lang: "bash",
          content: `# حالت تعاملی — به سوال‌ها جواب بدهید
npx create-next-app@latest my-app

# غیرتعاملی، همه‌ی فلگ‌ها با هم
npx create-next-app@latest my-app \\
  --typescript \\
  --app \\
  --eslint \\
  --no-tailwind \\
  --no-src-dir \\
  --import-alias "@/*"

cd my-app
npm run dev`,
        },
      },
      {
        heading: "سه اسکریپت: dev، build و start",
        body: [
          "دستور npm run dev یک سرور توسعه روی http://localhost:3000 با hot reloading بالا می‌آورد: فایل را ویرایش کنید و مرورگر تقریباً همان لحظه به‌روز می‌شود. نکست ۱۵ می‌تواند dev را با Turbopack اجرا کند (next dev --turbopack) تا در پروژه‌های بزرگ سرعت رفرش چشمگیرتر شود.",
          "دستور npm run build کل اپ را برای محیط تولید کامپایل و pre-render می‌کند و npm start همان بیلد را به‌صورت محلی سرو می‌کند. در زمان بیلد خلاصه‌ای از همه‌ی مسیرها را می‌بینید و اینکه هر کدام استاتیک (○) یا در لحظه‌ی درخواست (ƒ) رندر شده — یک چک سریع از وضعیت استراتژی رندر شما.",
        ],
        code: {
          title: "package.json",
          lang: "json",
          content: `{
  "scripts": {
    "dev": "next dev",            // سرور توسعه با fast refresh
    "build": "next build",        // کامپایل و pre-render تولیدی
    "start": "next start"         // سرو کردن بیلد تولیدی
  }
}`,
        },
      },
    ],
  },
};
