import { Topic } from "../../lib/types";

export const serverComponents: Topic = {
  slug: "server-components",
  icon: "🧩",
  part: 3,
  en: {
    title: "Server & Client Components",
    description:
      "React Server Components explained: what runs where, the use client boundary, and how to compose them correctly.",
    sections: [
      {
        heading: "The mental model: two runtimes, one tree",
        body: [
          "In the App Router every component is a Server Component by default. Server Components run only on the server: they can query a database, read files, use secret keys, and their JavaScript never ships to the browser. What the browser receives is a serialized result — the RSC payload — which React renders into the existing tree.",
          "Client Components are the components you already know from classic React: they hydrate in the browser, can use state, effects and browser APIs, and they add to your JavaScript bundle. The trick is that both live in the same component tree; the boundary between them is drawn by a single string.",
        ],
        bullets: [
          "Server Component: async/await, direct DB access, zero client JS — default",
          "Client Component: useState, useEffect, event handlers — opt in with use client",
          "Only the boundary crosses: pass serializable props (or children) downward",
        ],
      },
      {
        heading: "The use client boundary",
        body: [
          'Writing "use client" at the top of a file marks it — and everything it imports — as a client bundle. The boundary is a cliff edge, not a gradient: everything below it is client. That is why you keep client components small and push them to the leaves of the tree, around a mostly-server trunk.',
          "Props crossing the boundary must be serializable. You cannot pass a component from a Server Component into a Client Component as a normal prop and expect it to run on the server — but you can pass it as children, because the client component receives already-rendered output. This children-slotting pattern is how interactive wrappers (like this site's TiltCard) stay tiny.",
        ],
        code: {
          title: "server wraps client",
          lang: "tsx",
          content: `// app/page.tsx — Server Component (default)
import { Counter } from "./counter";

export default async function Page() {
  const posts = await db.post.findMany();   // server-only, no fetch needed
  return (
    <main>
      {/* passing rendered output as children is always allowed */}
      <Counter initial={posts.length}>
        <PostList posts={posts} />
      </Counter>
    </main>
  );
}`,
        },
      },
      {
        heading: "Choosing the right component for the job",
        body: [
          "The decision rule is short: if a piece needs interactivity — state, effects, event listeners, browser APIs — it is a Client Component; everything else should stay a Server Component. Every component you keep on the server is bundle weight deleted and work moved closer to the database.",
          "A realistic page is a server tree with small client islands: a server-rendered article with a client copy button, a server-rendered table with a client filter input. Notice how this website is built — the entire topic content is server data, and only the toggles, search and code-block copy buttons hydrate.",
        ],
        code: {
          title: "components/counter.tsx",
          lang: "tsx",
          content: `"use client";

import { useState } from "react";

export function Counter({ initial, children }) {
  const [n, setN] = useState(initial);
  return (
    <div onClick={() => setN(n + 1)}>
      clicked {n} times
      {children}  {/* still server-rendered content */}
    </div>
  );
}`,
        },
      },
    ],
  },
  fa: {
    title: "کامپوننت‌های سرور و کلاینت",
    description:
      "توضیح React Server Component: چه چیزی کجا اجرا می‌شود، مرز use client، و ترکیب درست این دو.",
    sections: [
      {
        heading: "مدل ذهنی: دو ران‌تایم، یک درخت",
        body: [
          "در اپ روتر هر کامپوننتی به‌صورت پیش‌فرض یک Server Component است. سرور کامپوننت‌ها فقط روی سرور اجرا می‌شوند: می‌توانند به دیتابیس کوئری بزنند، فایل بخوانند، از کلیدهای مخفی استفاده کنند و جاوااسکریپتشان هرگز به مرورگر نمی‌رسد. مرورگر یک خروجی سری‌شده می‌گیرد — همان RSC payload — که ری‌اکت آن را در درخت موجود رندر می‌کند.",
          "کلاینت کامپوننت‌ها همان کامپوننت‌های کلاسیک ری‌اکت شما هستند: در مرورگر hydrate می‌شوند، می‌توانند state و effect و APIهای مرورگر داشته باشند و به باندل جاوااسکریپت اضافه می‌شوند. نکته این است که هر دو در همان درخت کامپوننت زندگی می‌کنند؛ مرز بینشان فقط یک رشته‌ی متنی است.",
        ],
        bullets: [
          "سرور کامپوننت: async/await، دسترسی مستقیم به دیتابیس، صفر JS کلاینت — پیش‌فرض",
          "کلاینت کامپوننت: useState و useEffect و event handler — با use client انتخابش کنید",
          "فقط از مرز عبور می‌کند: props قابل سری‌شدن (یا children) به سمت پایین",
        ],
      },
      {
        heading: "مرز use client",
        body: [
          'نوشتن "use client" در بالای یک فایل آن را — و هر چیزی که ایمپورت می‌کند — به باندل کلاینت علامت می‌زند. این مرز یک پرتگاه است، نه یک شیب: همه‌چیز زیرش کلاینت است. به همین دلیل کلاینت کامپوننت‌ها را کوچک نگه دارید و به برگ‌های درخت ببرید، دور از تنِ عمدتاً سروری.',
          "props که از مرز رد می‌شوند باید قابل سری‌شدن باشند. نمی‌توانید یک کامپوننت را از سرور به کلاینت به‌عنوان prop معمولی بدهید و انتظار داشته باشید روی سرور اجرا شود — اما می‌توانید آن را به‌صورت children بدهید، چون کلاینت کامپوننت خروجیِ از پیش رندرشده می‌گیرد. همین الگوی اسلات children است که رپرهای تعاملی (مثل TiltCard همین سایت) را فوق‌العاده کوچک نگه می‌دارد.",
        ],
        code: {
          title: "سرور، کلاینت را می‌پوشاند",
          lang: "tsx",
          content: `// app/page.tsx — سرور کامپوننت (پیش‌فرض)
import { Counter } from "./counter";

export default async function Page() {
  const posts = await db.post.findMany();   // فقط سرور؛ fetch لازم نیست
  return (
    <main>
      {/* دادن خروجی رندرشده به‌صورت children همیشه مجاز است */}
      <Counter initial={posts.length}>
        <PostList posts={posts} />
      </Counter>
    </main>
  );
}`,
        },
      },
      {
        heading: "انتخاب کامپوننت درست برای هر کار",
        body: [
          "قاعده‌ی تصمیم کوتاه است: اگر یک تکه به تعامل نیاز دارد — state، effect، event listener، APIهای مرورگر — کلاینت کامپوننت است؛ هر چیز دیگری باید سرور کامپوننت بماند. هر کامپوننتی که روی سرور بماند یعنی وزن باندلِ حذف‌شده و کاری که نزدیک‌تر به دیتابیس انجام می‌شود.",
          "یک صفحه‌ی واقعی، درختی سروری با جزایر کوچک کلاینت است: مقاله‌ای که روی سرور رندر شده با یک دکمه‌ی کپی کلاینتی، جدولی سروری با فیلتر کلاینتی. توجه کنید همین وب‌سایت هم این‌طور ساخته شده — کل محتوای سرفصل‌ها داده‌ی سروری است و فقط تاگل‌ها، جست‌وجو و دکمه‌ی کپی بلاک‌های کد hydrate می‌شوند.",
        ],
        code: {
          title: "components/counter.tsx",
          lang: "tsx",
          content: `"use client";

import { useState } from "react";

export function Counter({ initial, children }) {
  const [n, setN] = useState(initial);
  return (
    <div onClick={() => setN(n + 1)}>
      {n} بار کلیک شد
      {children}  {/* همچنان محتوای رندرشده‌ی سرور */}
    </div>
  );
}`,
        },
      },
    ],
  },
};
