import { Topic } from "../../lib/types";

export const streamingSuspense: Topic = {
  slug: "streaming-suspense",
  icon: "🌊",
  part: 3,
  en: {
    title: "Streaming & Suspense",
    description:
      "How the App Router streams UI progressively: loading.tsx, Suspense boundaries, and making slow data invisible to users.",
    sections: [
      {
        heading: "Why streaming changes the feel of an app",
        body: [
          "Without streaming, a page that mixes fast and slow data renders only when everything is ready — the user stares at a blank screen while the slowest query finishes. With streaming, the server sends the static shell immediately and pushes UI pieces over the same response as each piece becomes ready.",
          "The result is a lower Time To First Byte, instant visual feedback, and a page that fills in progressively instead of popping in at once. Streaming is built on React Suspense — no extra library, no state machines.",
        ],
        bullets: [
          "Better TTFB — shell arrives before slow data is even fetched",
          "Progressive fill — sections appear as their data resolves",
          "Isolated loading — one slow widget no longer blocks the page",
        ],
      },
      {
        heading: "loading.tsx — automatic Suspense for a segment",
        body: [
          "The simplest streaming is a file: add loading.tsx to any folder and Next.js wraps that segment in a Suspense boundary automatically. While the segment's server work happens, its fallback shows instantly — on first load and on every client-side navigation to that route.",
          "This website puts a loader in the docs segment: the orbit spinner and skeleton you see while switching topics is exactly this mechanism. Design the fallback as carefully as the page itself — a thoughtful skeleton makes a slow page feel fast.",
        ],
        code: {
          title: "app/docs/loading.tsx",
          lang: "tsx",
          content: `export default function DocsLoading() {
  return (
    <div className="loader">
      <div className="spinner" />
      <div className="skeleton" />
      <div className="skeleton short" />
    </div>
  );
}`,
        },
      },
      {
        heading: "Fine-grained control with <Suspense>",
        body: [
          "For surgical control, drop raw <Suspense> boundaries inside a page around slow components. Each boundary streams independently: the page renders its fast parts instantly, and every slow island replaces its own fallback as soon as its data resolves.",
          "A useful pattern is the shell-plus-stream layout: await only the data you truly need for the shell (title, layout decisions), then let everything below the fold stream inside its own boundary. Combine with priority hints and this is as close as web UI gets to a native-app feel.",
        ],
        code: {
          title: "per-section streaming",
          lang: "tsx",
          content: `import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <ArticleHeader />                            {/* instant */}
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments />                               {/* streams */}
      </Suspense>
      <Suspense fallback={<RelatedSkeleton />}>
        <Related />                                {/* streams */}
      </Suspense>
    </main>
  );
}`,
        },
      },
    ],
  },
  fa: {
    title: "استریمینگ و Suspense",
    description:
      "اپ روتر چطور UI را تدریجی استریم می‌کند: loading.tsx، مرزهای Suspense، و نامرئی‌کردن داده‌های کند برای کاربر.",
    sections: [
      {
        heading: "چرا استریمینگ حس اپ را عوض می‌کند",
        body: [
          "بدون استریمینگ، صفحه‌ای که داده‌ی سریع و کند را با هم ترکیب می‌کند فقط وقتی رندر می‌شود که همه‌چیز آماده باشد — کاربر تا تمام‌شدن کندترین کوئری به صفحه‌ی خالی خیر می‌ماند. با استریمینگ، سرور پوسته‌ی استاتیک را فوراً می‌فرستد و تکه‌های UI را همان‌طور که هر تکه آماده می‌شود روی همان پاسخ می‌راند.",
          "نتیجه: Time To First Byte پایین‌تر، بازخورد بصری آنی، و صفحه‌ای که تدریجی پر می‌شود نه اینکه یک‌باره ظاهر شود. استریمینگ روی React Suspense بنا شده — بدون کتابخانه‌ی اضافه، بدون ماشین‌حالت.",
        ],
        bullets: [
          "TTFB بهتر — پوسته قبل از حتی گرفتن داده‌ی کند می‌رسد",
          "پر شدن تدریجی — بخش‌ها هر وقت داده‌شان رسید ظاهر می‌شوند",
          "لود ایزوله — یک ویجت کند دیگر صفحه را بلاک نمی‌کند",
        ],
      },
      {
        heading: "loading.tsx — Suspense خودکار برای یک سگمنت",
        body: [
          "ساده‌ترین استریمینگ یک فایل است: loading.tsx را به هر پوشه اضافه کنید و نکست‌جی‌اس آن سگمنت را خودکار در مرز Suspense می‌پیچد. تا کارهای سروری سگمنت انجام می‌شود، فال‌بکش فوراً نمایش داده می‌شود — هم در لود اول و هم در هر ناوبری کلاینتی به آن مسیر.",
          "همین وب‌سایت در سگمنت docs یک loader گذاشته: اسپینر مداری و اسکلتی که هنگام تعویض سرفصل می‌بینید دقیقاً همین مکانیزم است. فال‌بک را با همان دقتی طراحی کنید که خود صفحه را — یک اسکلت خوب، صفحه‌ی کند را سریع حس می‌کند.",
        ],
        code: {
          title: "app/docs/loading.tsx",
          lang: "tsx",
          content: `export default function DocsLoading() {
  return (
    <div className="loader">
      <div className="spinner" />
      <div className="skeleton" />
      <div className="skeleton short" />
    </div>
  );
}`,
        },
      },
      {
        heading: "کنترل ریزدانه با <Suspense>",
        body: [
          "برای کنترل جراحی، مرزهای خام <Suspense> را داخل صفحه دور کامپوننت‌های کند بگذارید. هر مرز مستقل استریم می‌شود: صفحه بخش‌های سریعش را آنی رندر می‌کند و هر جزیره‌ی کند، فال‌بک خودش را به‌محض رسیدن داده عوض می‌کند.",
          "الگوی مفید «پوسته به‌علاوه استریم» است: فقط داده‌ای را await کنید که واقعاً برای پوسته لازم است (عنوان، تصمیم‌های لی‌آوت)، و بقیه‌ی زیر فولد را داخل مرز خودش استریم کنید. با اولویت‌دهی‌های لود ترکیبش کنید؛ نزدیک‌ترین حالت وب به حس اپلیکیشن نیتیو همین است.",
        ],
        code: {
          title: "استریم per-section",
          lang: "tsx",
          content: `import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <ArticleHeader />                            {/* آنی */}
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments />                               {/* استریم */}
      </Suspense>
      <Suspense fallback={<RelatedSkeleton />}>
        <Related />                                {/* استریم */}
      </Suspense>
    </main>
  );
}`,
        },
      },
    ],
  },
};
