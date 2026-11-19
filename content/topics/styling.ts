import { Topic } from "../../lib/types";

export const styling: Topic = {
  slug: "styling",
  icon: "💅",
  part: 4,
  en: {
    title: "Styling Approaches",
    description:
      "Global CSS, CSS Modules, Tailwind and CSS-in-JS — how each fits the App Router and which one this very site uses.",
    sections: [
      {
        heading: "Global CSS and CSS Modules",
        body: [
          "Plain global CSS (imported once in the root layout) is fully supported and is what this website uses — a token-based design system in three files, no dependencies. For scoped styles, CSS Modules (anything.styles.module.css) hash their class names at build time, so identical class names in different files can never collide.",
          "Modules work in both server and client components, and pairs beautifully with design tokens: define CSS variables on :root in a global file, then consume them from modules. Zero runtime, zero configuration, perfect for a docs or content site.",
        ],
        code: {
          title: "components/card.module.css",
          lang: "css",
          content: `.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}

.title {
  color: var(--text);
  font-weight: 700;
}`,
        },
      },
      {
        heading: "Tailwind CSS — utility-first at scale",
        body: [
          "Tailwind is the most popular choice in the Next.js ecosystem and create-next-app offers it out of the box. Utilities live directly in JSX, are tree-shaken in production, and pair well with component libraries like shadcn/ui that ship Tailwind primitives.",
          "It works fine with Server Components since it is purely a build-time transform — no runtime, no context. If you prefer named classes over long utility strings, the compromise many teams reach is Tailwind for layout/spacing and CSS Modules for distinctive components.",
        ],
        code: {
          title: "Tailwind in a server component",
          lang: "tsx",
          content: `export default function Card() {
  // purely build-time — safe inside Server Components
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold">Styled with utilities</h3>
    </div>
  );
}`,
        },
      },
      {
        heading: "CSS-in-JS and the RSC era",
        body: [
          "Runtime CSS-in-JS libraries (styled-components, Emotion) inject styles via JavaScript and therefore only work inside Client Components in the App Router — they cannot style the server-rendered trunk. React 19 has also deprecated the long-term viability of runtime style injection, and the ecosystem is moving away from it.",
          "The current consensus: for new App Router projects, pick a zero-runtime approach — Tailwind, CSS Modules, vanilla-extract or Panda CSS. This site's entire luxurious look (glass surfaces, 3D cube, aurora background, RTL flips, dark/light themes) is hand-written CSS with variables — proof you do not need a library for a premium UI.",
        ],
        bullets: [
          "Global CSS — design tokens + base styles, imported in the root layout",
          "CSS Modules — scoped, hashed, zero-runtime, RSC-safe",
          "Tailwind — utility-first, build-time, huge ecosystem",
          "CSS-in-JS — client components only; avoid for new projects",
        ],
      },
    ],
  },
  fa: {
    title: "رویکردهای استایل",
    description:
      "CSS سراسری، CSS Modules، Tailwind و CSS-in-JS — هرکدام در اپ روتر چه جایگاهی دارند و همین سایت از کدام استفاده می‌کند.",
    sections: [
      {
        heading: "CSS سراسری و CSS Modules",
        body: [
          "CSS سراسری ساده (که یک بار در root layout ایمپورت می‌شود) کاملاً پشتیبانی می‌شود و همین وب‌سایت از آن استفاده می‌کند — یک سیستم طراحی توکن‌محور در سه فایل، بدون هیچ وابستگی. برای استایل محدود، CSS Modules (هر فایل .module.css) نام کلاس‌ها را در زمان بیلد هش می‌کنند، پس نام‌های یکسان در فایل‌های مختلف هرگز برخورد نمی‌کنند.",
          "ماژول‌ها هم در سرور و هم در کلاینت کامپوننت‌ها کار می‌کنند و با توکن‌های طراحی عالی جفت می‌شوند: متغیرهای CSS را در :root در یک فایل سراسری تعریف کنید و از داخل ماژول‌ها مصرفشان کنید. صفر ران‌تایم، صفر تنظیمات، انتخاب بی‌نقص برای سایت مستندات یا محتوایی.",
        ],
        code: {
          title: "components/card.module.css",
          lang: "css",
          content: `.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}

.title {
  color: var(--text);
  font-weight: 700;
}`,
        },
      },
      {
        heading: "Tailwind CSS — utility-first در مقیاس",
        body: [
          "Tailwind محبوب‌ترین انتخاب در اکوسیستم نکست‌جی‌اس است و create-next-app آن را از پیش ارائه می‌دهد. utilityها مستقیم داخل JSX می‌نشینند، در محیط تولید tree-shake می‌شوند و با کتابخانه‌هایی مثل shadcn/ui که پریمیتیوهای Tailwind می‌فرستند خوب جفت می‌شوند.",
          "با سرور کامپوننت‌ها هم مشکلی ندارد چون صرفاً یک ترنسفورم بیلد-تایم است — بدون ران‌تایم، بدون context. اگر به‌جای رشته‌های طولانی utility، کلاس‌های اسم‌دار می‌خواهید، مصالحه‌ی رایجِ تیم‌ها این است: Tailwind برای لی‌آوت/فاصله‌ها و CSS Modules برای کامپوننت‌های متمایز.",
        ],
        code: {
          title: "Tailwind در سرور کامپوننت",
          lang: "tsx",
          content: `export default function Card() {
  // کاملاً بیلد-تایم — داخل سرور کامپوننت امن است
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold">استایل با utilityها</h3>
    </div>
  );
}`,
        },
      },
      {
        heading: "CSS-in-JS در دوران RSC",
        body: [
          "کتابخانه‌های CSS-in-JS ران‌تایمی (styled-components، Emotion) استایل‌ها را با جاوااسکریپت تزریق می‌کنند و در نتیجه در اپ روتر فقط داخل کلاینت کامپوننت‌ها کار می‌کنند — نمی‌توانند تنِ سروری را استایل بدهند. React 19 هم دوام بلندمدت تزریق استایل ران‌تایم را منسوخ اعلام کرده و اکوسیستم در حال دور شدن از آن است.",
          "اجماع فعلی: برای پروژه‌های جدید اپ روتر، رویکرد بدون ران‌تایم انتخاب کنید — Tailwind، CSS Modules، vanilla-extract یا Panda CSS. کل ظاهر لوکس همین سایت (سطوح شیشه‌ای، مکعب سه‌بعدی، پس‌زمینه‌ی شفق، فلیپ‌های RTL، تم‌های شب و روز) CSS دست‌نویس با متغیرهاست — اثبات اینکه برای UI پرمیوم به کتابخانه نیاز نیست.",
        ],
        bullets: [
          "CSS سراسری — توکن‌های طراحی + استایل پایه، ایمپورت در root layout",
          "CSS Modules — محدود، هش‌شده، بدون ران‌تایم، سازگار با RSC",
          "Tailwind — utility-first، بیلد-تایم، اکوسیستم عظیم",
          "CSS-in-JS — فقط کلاینت کامپوننت‌ها؛ برای پروژه‌های جدید توصیه نمی‌شود",
        ],
      },
    ],
  },
};
