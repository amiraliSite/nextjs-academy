import { Topic } from "../../lib/types";

export const dataFetching: Topic = {
  slug: "data-fetching",
  icon: "🌐",
  part: 3,
  en: {
    title: "Data Fetching",
    description:
      "Async Server Components, fetch with caching options, and killing waterfalls with Promise.all — data the App Router way.",
    sections: [
      {
        heading: "Just await it — data fetching in Server Components",
        body: [
          "In the App Router, Server Components can be async functions. There is no useEffect, no loading state to manage by hand, no client-server round trip: you await the data and render it. This works with fetch, ORM queries, databases and any async source.",
          "The extended fetch API is where Next.js adds power: every fetch can carry caching instructions. By default in Next 15, fetch is not cached (a change from 14 — you opt in), and options let you tune exactly how fresh each call is.",
        ],
        bullets: [
          "fetch(url) — no-cache by default in Next 15, always fresh",
          "fetch(url, { cache: \"force-cache\" }) — like the old default, cached indefinitely",
          "fetch(url, { next: { revalidate: 3600 } }) — ISR on the data level",
          "fetch(url, { next: { tags: [\"posts\"] } }) — tag it for on-demand revalidation",
        ],
        code: {
          title: "app/posts/page.tsx",
          lang: "tsx",
          content: `export default async function Posts() {
  // plain ORM / DB usage — no fetch required at all
  // const posts = await db.post.findMany();

  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600, tags: ["posts"] },
  });
  const posts = await res.json();

  return posts.map((p) => <article key={p.id}>{p.title}</article>);
}`,
        },
      },
      {
        heading: "Sequential vs parallel — avoid the waterfall",
        body: [
          "Two awaits written one after the other execute sequentially: the second request waits for the first, doubling latency for no reason. When requests are independent, start them together and await together — the classic Promise.all pattern.",
          "For genuinely dependent calls (fetch user, then fetch that user's orders), sequential awaits are correct. For everything else, parallelize; on a page with five requests, this one-line change is often the difference between a 500ms and a 1500ms load.",
        ],
        code: {
          title: "parallel fetching",
          lang: "tsx",
          content: `export default async function Page() {
  // ❌ waterfall: user waits for artist, then albums wait again
  // const user = await getUser();
  // const albums = await getAlbums();

  // ✅ start both at once, await both together
  const [user, albums] = await Promise.all([getUser(), getAlbums()]);

  return <Profile user={user} albums={albums} />;
}`,
        },
      },
      {
        heading: "Load what matters first — streaming data into the tree",
        body: [
          "Not all data is equally urgent. Wrap the slow, below-the-fold part in <Suspense> and the page renders immediately with a fallback while that section streams in — the fast content never waits for the slow content. This pairs beautifully with the loading.tsx skeleton you saw on this site.",
          "A practical rule: above-the-fold critical data is awaited directly (fast queries), and everything heavy sits inside its own Suspense boundary so it streams independently. You will meet the full mechanics in the Streaming & Suspense topic.",
        ],
        code: {
          title: "suspense for slow data",
          lang: "tsx",
          content: `import { Suspense } from "react";

export default function Dashboard() {
  return (
    <main>
      <Header />                                  {/* instant */}
      <Suspense fallback={<StatsSkeleton />}>
        <SlowStats />                             {/* streams in */}
      </Suspense>
    </main>
  );
}`,
        },
      },
    ],
  },
  fa: {
    title: "دریافت داده",
    description:
      "سرور کامپوننت‌های async، fetch با گزینه‌های کش، و از بین بردن آبشارها با Promise.all — دریافت داده به سبک اپ روتر.",
    sections: [
      {
        heading: "فقط await کن — دریافت داده در سرور کامپوننت‌ها",
        body: [
          "در اپ روتر، سرور کامپوننت‌ها می‌توانند async باشند. نه useEffect لازم است، نه مدیریت دستی state لودینگ، نه رفت‌وبرگشت کلاینت-سرور: داده را await می‌کنید و رندر می‌کنید. این با fetch، کوئری ORM، دیتابیس و هر منبع async کار می‌کند.",
          "قدرت اصلی در API توسعه‌یافته‌ی fetch است: هر fetch می‌تواند دستورات کش ببرد. در نکست ۱۵ به‌صورت پیش‌فرض fetch کش نمی‌شود (برخلاف ۱۴ — خودتان opt-in می‌کنید) و گزینه‌ها اجازه می‌دهند تازگی هر فراخوان را دقیق تنظیم کنید.",
        ],
        bullets: [
          "fetch(url) — در نکست ۱۵ پیش‌فرض no-cache، همیشه تازه",
          "fetch(url, { cache: \"force-cache\" }) — مثل پیش‌فرض قدیمی، کش بی‌نهایت",
          "fetch(url, { next: { revalidate: 3600 } }) — ISR در سطح داده",
          "fetch(url, { next: { tags: [\"posts\"] } }) — تگ بزنید برای revalidation دستی",
        ],
        code: {
          title: "app/posts/page.tsx",
          lang: "tsx",
          content: `export default async function Posts() {
  // استفاده‌ی ساده از ORM / دیتابیس — اصلاً fetch لازم نیست
  // const posts = await db.post.findMany();

  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600, tags: ["posts"] },
  });
  const posts = await res.json();

  return posts.map((p) => <article key={p.id}>{p.title}</article>);
}`,
        },
      },
      {
        heading: "ترتیبی یا موازی — آبشار را بکشید",
        body: [
          "دو await پشت‌سرهم به‌صورت ترتیبی اجرا می‌شوند: درخواست دوم منتظر اولی می‌ماند و بدون هیچ دلیلی تأخیر را دو برابر می‌کند. وقتی درخواست‌ها مستقل‌اند، با هم شروعشان کنید و با هم await کنید — همان الگوی کلاسیک Promise.all.",
          "برای فراخوان‌های واقعاً وابسته (اول کاربر، بعد سفارش‌های همان کاربر) await ترتیبی درست است. برای بقیه‌ی موارد موازی‌سازی کنید؛ در صفحه‌ای با پنج درخواست، همین تغییر یک‌خطی اغلب فرق بین لود ۵۰۰ میلی‌ثانیه و ۱۵۰۰ میلی‌ثانیه است.",
        ],
        code: {
          title: "دریافت موازی",
          lang: "tsx",
          content: `export default async function Page() {
  // ❌ آبشار: albums منتظر user می‌ماند
  // const user = await getUser();
  // const albums = await getAlbums();

  // ✅ هر دو با هم شروع، هر دو با هم await
  const [user, albums] = await Promise.all([getUser(), getAlbums()]);

  return <Profile user={user} albums={albums} />;
}`,
        },
      },
      {
        heading: "اول چیز مهم را لود کن — استریم داده به داخل درخت",
        body: [
          "همه‌ی داده‌ها به یک اندازه فوری نیستند. بخش کندِ زیر فولد را داخل <Suspense> بگذارید تا صفحه فوراً با فال‌بک رندر شود و آن بخش جداگانه استریم شود — محتوای سریع هرگز منتظر محتوای کند نمی‌ماند. با اسکلت loading.tsx که در همین سایت دیدید عالی جفت می‌شود.",
          "قاعده‌ی عملی: داده‌ی حیاتیِ بالای فولد مستقیم await می‌شود (کوئری‌های سریع) و هر چیز سنگین در مرز Suspense خودش می‌نشیند تا مستقل استریم شود. مکانیک کامل را در سرفصل استریمینگ و Suspense می‌بینید.",
        ],
        code: {
          title: "suspense برای داده‌ی کند",
          lang: "tsx",
          content: `import { Suspense } from "react";

export default function Dashboard() {
  return (
    <main>
      <Header />                                  {/* آنی */}
      <Suspense fallback={<StatsSkeleton />}>
        <SlowStats />                             {/* استریم می‌شود */}
      </Suspense>
    </main>
  );
}`,
        },
      },
    ],
  },
};
