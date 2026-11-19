import { Topic } from "../../lib/types";

export const appRouter: Topic = {
  slug: "app-router",
  icon: "🧭",
  part: 2,
  en: {
    title: "The App Router",
    description:
      "The seven special files that define a route: page, layout, template, loading, error, not-found and route handlers.",
    sections: [
      {
        heading: "Special files and what they do",
        body: [
          "The App Router is built around a small set of reserved file names. Each one attaches a specific behavior to the route it lives in, and Next.js wires them together automatically — you never register routes by hand.",
          "Understanding these seven names is most of the learning curve: page and route decide what responds to a URL, layout and template wrap UI, and loading, error and not-found are the built-in UI states that make routes feel polished under real conditions.",
        ],
        bullets: [
          "page.tsx — the unique UI of a route; makes the path publicly reachable",
          "layout.tsx — shared wrapper that preserves state across navigations",
          "template.tsx — like layout, but remounts on every navigation",
          "loading.tsx — instant Suspense fallback shown while a segment loads",
          "error.tsx — error boundary with a reset() to retry the segment",
          "not-found.tsx — UI thrown by notFound() for missing content",
          "route.ts — API endpoint (GET/POST/…) instead of a UI page",
        ],
      },
      {
        heading: "Layouts and nesting",
        body: [
          "Layouts nest: the root layout wraps every page, a blog/layout.tsx wraps only blog pages, and deeper folders can add more layers. Because layouts do not unmount when you navigate between their children, they are the natural home for navigation chrome, sidebars and providers — state inside a layout survives the trip.",
          "A layout receives its children as a prop and must render them; it cannot know its exact child route. This is what makes the same layout compose with any future sibling segment. Note that the root layout is the only one allowed to render the html and body tags.",
        ],
        code: {
          title: "app/blog/layout.tsx",
          lang: "tsx",
          content: `export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <aside>Blog nav</aside>
      {/* page.tsx renders here; state persists on navigation */}
      {children}
    </section>
  );
}`,
        },
      },
      {
        heading: "Loading, error and not-found in practice",
        body: [
          "Dropping a loading.tsx into a folder gives that segment an instant fallback: the page shell appears immediately while the actual content streams in. error.tsx must be a client component; it catches render failures below it and offers a reset button to retry. not-found.tsx renders whenever you call the notFound() function in a page or layout.",
          "These files compose with Suspense boundaries: loading.tsx is essentially an automatic Suspense wrapper around the segment. This trio is the cheapest way to make a Next.js app feel fast and resilient — and this website uses all three (see the orbit spinner you met while navigating).",
        ],
        code: {
          title: "app/blog/error.tsx",
          lang: "tsx",
          content: `"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}`,
        },
      },
    ],
  },
  fa: {
    title: "اپ روتر",
    description:
      "هفت فایل ویژه‌ای که یک مسیر را تعریف می‌کنند: page، layout، template، loading، error، not-found و route handler.",
    sections: [
      {
        heading: "فایل‌های مخصوص و کارشان",
        body: [
          "اپ روتر حول مجموعه‌ی کوچکی از نام‌های فایل رزروشده ساخته شده است. هر کدام رفتار خاصی به مسیری که در آن قرار دارد می‌چسبانند و نکست‌جی‌اس آن‌ها را خودکار به هم وصل می‌کند — شما هرگز مسیرها را دستی ثبت نمی‌کنید.",
          "فهمیدن همین هفت نام، بیشترِ منحنی یادگیری است: page و route تعیین می‌کنند چه چیزی به یک URL جواب بدهد، layout و template رابط را می‌پوشانند، و loading و error و not-found همان حالت‌های رابط آماده‌اند که مسیرها را در شرایط واقعی پولیش‌شده و مقاوم نشان می‌دهند.",
        ],
        bullets: [
          "page.tsx — UI یکتای مسیر؛ مسیر را عمومی و قابل دسترسی می‌کند",
          "layout.tsx — پوسته‌ی مشترک که در ناوبری state را حفظ می‌کند",
          "template.tsx — مثل layout اما در هر ناوبری از نو mount می‌شود",
          "loading.tsx — فال‌بک آنی Suspense تا سگمنت لود شود",
          "error.tsx — مرز خطا با دکمه‌ی reset() برای تلاش دوباره",
          "not-found.tsx — رابطی که با فراخوانی notFound() نمایش داده می‌شود",
          "route.ts — اندپوینت API (GET/POST/…) به‌جای صفحه‌ی UI",
        ],
      },
      {
        heading: "لی‌آوت‌ها و تو در تویی",
        body: [
          "لی‌آوت‌ها تو در تو هستند: root layout همه‌ی صفحه‌ها را می‌پوشاند، blog/layout.tsx فقط صفحات بلاگ را می‌پوشاند و پوشه‌های عمیق‌تر لایه‌های بیشتری اضافه می‌کنند. چون لی‌آوت‌ها هنگام جابه‌جایی بین فرزندان unmount نمی‌شوند، خانه‌ی طبیعی نوار ناوبری، سایدبار و Providerها هستند — state داخل لی‌آوت از سفر جان سالم به در می‌برد.",
          "لی‌آوت فرزندانش را به‌صورت prop می‌گیرد و باید آن‌ها را رندر کند؛ نمی‌داند دقیقاً کدام مسیر فرزند است. همین باعث می‌شود یک لی‌آوت با هر سگمنت آینده‌ای هم ترکیب شود. توجه کنید که فقط root layout مجاز به رندر تگ‌های html و body است.",
        ],
        code: {
          title: "app/blog/layout.tsx",
          lang: "tsx",
          content: `export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <aside>منوی بلاگ</aside>
      {/* page.tsx اینجا رندر می‌شود؛ state در ناوبری می‌ماند */}
      {children}
    </section>
  );
}`,
        },
      },
      {
        heading: "loading، error و not-found در عمل",
        body: [
          "گذاشتن یک loading.tsx داخل یک پوشه به آن سگمنت فال‌بک آنی می‌دهد: پوسته‌ی صفحه بلافاصله ظاهر می‌شود تا محتوای واقعی استریم شود. error.tsx باید کلاینت کامپوننت باشد؛ خطاهای رندر زیر خودش را می‌گیرد و دکمه‌ی reset برای تلاش دوباره می‌گذارد. not-found.tsx هر وقت در صفحه یا لی‌آوت تابع notFound() را صدا بزنید رندر می‌شود.",
          "این فایل‌ها با مرزهای Suspense ترکیب می‌شوند: loading.tsx عملاً یک پوشش Suspense خودکار دور سگمنت است. این سه‌گانه ارزان‌ترین راه برای این است که اپ نکست‌جی‌اس شما سریع و مقاوم حس شود — و همین وب‌سایت از هر سه استفاده می‌کند (اسپینر مداری را که موقع ناوبری دیدید ببینید).",
        ],
        code: {
          title: "app/blog/error.tsx",
          lang: "tsx",
          content: `"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>مشکلی پیش آمد</h2>
      <button onClick={() => reset()}>تلاش دوباره</button>
    </div>
  );
}`,
        },
      },
    ],
  },
};
