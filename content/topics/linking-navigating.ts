import { Topic } from "../../lib/types";

export const linkingNavigating: Topic = {
  slug: "linking-navigating",
  icon: "🧲",
  part: 2,
  en: {
    title: "Linking & Navigating",
    description:
      "The Link component, useRouter, prefetching, pending states with useLinkStatus — how users actually move through your app.",
    sections: [
      {
        heading: "Link — never use a plain <a> for internal navigation",
        body: [
          "The <Link> component enables client-side navigation: Next.js fetches only the changed route segments, keeps shared layouts mounted, and swaps in the new page without a full document reload. A plain <a> tag would discard the whole document and the client router cache.",
          "Links are also smart about prefetching: in production, any Link that enters the viewport is prefetched in the background, so by the time the user clicks, the route is usually already in memory. This is why Next.js apps feel instant even on modest connections.",
        ],
        code: {
          title: "components/nav-link.tsx",
          lang: "tsx",
          content: `import Link from "next/link";

export function NavLink() {
  return (
    <Link href="/docs/caching" replace={false} prefetch={true}>
      Caching guide
    </Link>
  );
}`,
        },
      },
      {
        heading: "useRouter, usePathname and useSearchParams",
        body: [
          "For imperative navigation — after a mutation, after login, inside an event handler — import useRouter from next/navigation. It exposes push (add to history), replace (swap current entry), back, forward, and refresh (re-fetch the current route from the server, ideal right after a Server Action changed data).",
          "usePathname returns the current path for active-link styling, and useSearchParams reads the query string inside client components. A common pattern combines all three: highlight the active tab and react to ?tab= values without server round trips.",
        ],
        code: {
          title: "app/login/page.tsx",
          lang: "tsx",
          content: `"use client";

import { useRouter, usePathname } from "next/navigation";

export function AfterLogin() {
  const router = useRouter();
  const pathname = usePathname();

  const go = () => {
    router.push("/dashboard");     // navigate
    // router.refresh();           // re-fetch current route
  };

  return <button onClick={go}>Enter dashboard ({pathname})</button>;
}`,
        },
      },
      {
        heading: "Pending states with useLinkStatus",
        body: [
          "Navigation to a route that must be rendered on demand can take a moment. Next 15.3 added useLinkStatus, a hook used inside the children of a <Link>, which reports whether that specific link is currently pending — perfect for showing a subtle spinner on the clicked nav item.",
          "Pair it with loading.tsx: the skeleton fills the screen while the progress bar runs, and the link itself glows until the transition completes. Small detail, big perceived-performance win.",
        ],
        code: {
          title: "components/pending-link.tsx",
          lang: "tsx",
          content: `"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link-status";

export function PendingLink({ href, children }) {
  return (
    <Link href={href}>
      {children}
      <PendingDot />
    </Link>
  );
}

function PendingDot() {
  const { pending } = useLinkStatus();
  return pending ? <span className="spinner" /> : null;
}`,
        },
      },
    ],
  },
  fa: {
    title: "لینک‌دهی و ناوبری",
    description:
      "کامپوننت Link، هوک useRouter، prefetch و حالت‌های pending با useLinkStatus — کاربر واقعاً چطور در اپ شما حرکت می‌کند.",
    sections: [
      {
        heading: "Link — برای ناوبری داخلی هرگز <a> خالی نزنید",
        body: [
          "کامپوننت <Link> ناوبری سمت کلاینت را فعال می‌کند: نکست‌جی‌اس فقط سگمنت‌های تغییرکرده را می‌گیرد، لی‌آوت‌های مشترک را mount نگه می‌دارد و بدون reload کامل سند، صفحه‌ی جدید را جاگذاری می‌کند. یک تگ <a> ساده کل سند و کش روتر کلاینت را دور می‌ریزد.",
          "لینک‌ها در prefetch هم باهوش‌اند: در محیط تولید هر Linkی که وارد viewport شود در پس‌زمینه پیش‌واکشی می‌شود، پس تا کاربر کلیک می‌کند معمولاً مسیر از قبل در حافظه است. به همین دلیل اپ‌های نکست‌جی‌اس حتی روی اینترنت‌های معمولی هم فوری حس می‌شوند.",
        ],
        code: {
          title: "components/nav-link.tsx",
          lang: "tsx",
          content: `import Link from "next/link";

export function NavLink() {
  return (
    <Link href="/docs/caching" replace={false} prefetch={true}>
      راهنمای کش
    </Link>
  );
}`,
        },
      },
      {
        heading: "useRouter، usePathname و useSearchParams",
        body: [
          "برای ناوبری دستوری — بعد از یک mutation، بعد از لاگین، داخل event handler — useRouter را از next/navigation ایمپورت کنید. متدهایش: push (اضافه به تاریخچه)، replace (جایگزینی همین entry)، back و forward و refresh (دریافت دوباره‌ی مسیر فعلی از سرور؛ بعد از تغییر داده با Server Action عالی است).",
          "usePathname مسیر فعلی را برای استایل لینک فعال برمی‌گرداند و useSearchParams در کلاینت کامپوننت‌ها query string را می‌خواند. الگوی رایج ترکیب هر سه است: هایلایت تب فعال و واکنش به مقادیر ?tab= بدون رفت‌وبرگشت به سرور.",
        ],
        code: {
          title: "app/login/page.tsx",
          lang: "tsx",
          content: `"use client";

import { useRouter, usePathname } from "next/navigation";

export function AfterLogin() {
  const router = useRouter();
  const pathname = usePathname();

  const go = () => {
    router.push("/dashboard");     // ناوبری
    // router.refresh();           // دریافت دوباره‌ی مسیر فعلی
  };

  return <button onClick={go}>ورود به داشبورد ({pathname})</button>;
}`,
        },
      },
      {
        heading: "حالت‌های pending با useLinkStatus",
        body: [
          "ناوبری به مسیری که باید در لحظه رندر شود ممکن است کمی طول بکشد. نکست ۱۵.۳ هوک useLinkStatus را اضافه کرد که داخل فرزندان یک <Link> استفاده می‌شود و می‌گوید آیا همان لینک مشخص در حالت pending است — عالی برای نشان دادن اسپینر ظریف روی همان آیتم منوی کلیک‌شده.",
          "آن را با loading.tsx ترکیب کنید: اسکلت صفحه را پر می‌کند در حالی که نوار پیشرفت می‌دود و خود لینک تا پایان ترنزیشن می‌درخشد. جزئیات کوچک، برد بزرگ در کارایی حس‌شده.",
        ],
        code: {
          title: "components/pending-link.tsx",
          lang: "tsx",
          content: `"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link-status";

export function PendingLink({ href, children }) {
  return (
    <Link href={href}>
      {children}
      <PendingDot />
    </Link>
  );
}

function PendingDot() {
  const { pending } = useLinkStatus();
  return pending ? <span className="spinner" /> : null;
}`,
        },
      },
    ],
  },
};
