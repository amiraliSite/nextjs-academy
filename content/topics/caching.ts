import { Topic } from "../../lib/types";

export const caching: Topic = {
  slug: "caching",
  icon: "⚡",
  part: 3,
  en: {
    title: "Caching in Depth",
    description:
      "The four cache layers — request memoization, Data Cache, Full Route Cache and Router Cache — plus every way to revalidate or opt out.",
    sections: [
      {
        heading: "The four layers, one picture",
        body: [
          "Next.js caches aggressively at four distinct levels, and most confusion comes from treating them as one blob. Request Memoization deduplicates identical fetches within one render pass. The Data Cache persists fetch results across requests and deploys. The Full Route Cache stores the rendered result of a route (HTML + RSC payload). The Router Cache keeps visited route payloads in the browser for instant back/forward navigation.",
          "Reading them as a pipeline helps: a fetch is memoized during the request, may be persisted in the Data Cache, the finished route may live in the Full Route Cache, and the browser may hold a slice of it in the Router Cache. Each layer has its own invalidation switch.",
        ],
        bullets: [
          "Request Memoization — automatic, per request, dedupes identical fetch calls",
          "Data Cache — across requests; controlled by fetch cache options and tags",
          "Full Route Cache — build-time HTML/RSC; invalidated by revalidate or dynamic APIs",
          "Router Cache — client-side; refreshed by navigation, router.refresh() or TTL",
        ],
      },
      {
        heading: "Revalidation — time-based and on-demand",
        body: [
          "Time-based revalidation is the set-and-forget option: next: { revalidate: N } on a fetch, or export const revalidate = N on a route. After N seconds the next request regenerates in the background while users still see the cached version — nobody ever waits.",
          "On-demand revalidation is surgical: after a mutation (say, a published post), call revalidateTag(\"posts\") in a Server Action or Route Handler and every fetch tagged posts — plus every route using them — regenerates on the next request. This is how e-commerce sites keep product pages fresh within seconds of a price change, without rebuilding anything.",
        ],
        code: {
          title: "on-demand revalidation",
          lang: "ts",
          content: `"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function publishPost(id: string) {
  await db.post.update({ where: { id }, data: { status: "published" } });

  revalidateTag("posts");         // by data tag
  revalidatePath("/blog");        // or by path
  return { ok: true };
}`,
        },
      },
      {
        heading: "Opting out when you need freshness",
        body: [
          "Sometimes a route must be truly dynamic: stock levels, per-user feeds, live counters. You opt out per route with export const dynamic = \"force-dynamic\", per fetch with cache: \"no-store\", and per request by reading cookies() or headers().",
          "The Router Cache also has knobs: in Next 15, prefetched pages stay for 5 minutes (previously 30) and visited pages for 30 seconds. Calling router.refresh() re-fetches the current route from the server and updates the cache — the standard move right after a mutation.",
        ],
        code: {
          title: "forcing dynamic behavior",
          lang: "tsx",
          content: `// per-route
export const dynamic = "force-dynamic";

export default async function LiveFeed() {
  // per-fetch
  const res = await fetch("https://api.example.com/live", {
    cache: "no-store",          // never cache this one
  });
  return <Feed data={await res.json()} />;
}`,
        },
      },
    ],
  },
  fa: {
    title: "کش در عمق",
    description:
      "چهار لایه‌ی کش — Request Memoization، Data Cache، Full Route Cache و Router Cache — به‌علاوه‌ی همه‌ی راه‌های revalidate یا انصراف از کش.",
    sections: [
      {
        heading: "چهار لایه، یک تصویر",
        body: [
          "نکست‌جی‌اس در چهار سطح متمایز به‌شدت کش می‌کند و بیشتر سردرگمی‌ها از این است که همه را یک توده فرض می‌کنیم. Request Memoization فراخوان‌های fetch یکسان را در یک پاس رندر، dedupe می‌کند. Data Cache نتایج fetch را بین درخواست‌ها و دیپلوی‌ها نگه می‌دارد. Full Route Cache نتیجه‌ی رندرشده‌ی یک مسیر را ذخیره می‌کند (HTML + RSC payload). Router Cache هم payloadهای مسیرهای بازدیدشده را در مرورگر نگه می‌دارد تا back/forward فوری باشد.",
          "آن‌ها را مثل یک پایپ‌لاین بخوانید: fetch در طول درخواست memoize می‌شود، ممکن است در Data Cache بماند، مسیرِ تمام‌شده ممکن است در Full Route Cache زندگی کند و مرورگر هم تکه‌ای از آن را در Router Cache نگه دارد. هر لایه کلید ابطال خودش را دارد.",
        ],
        bullets: [
          "Request Memoization — خودکار، per request، dedupe فراخوان‌های یکسان fetch",
          "Data Cache — بین درخواست‌ها؛ کنترل با گزینه‌های کش fetch و تگ‌ها",
          "Full Route Cache — HTML/RSC بیلد-تایم؛ ابطال با revalidate یا APIهای داینامیک",
          "Router Cache — سمت کلاینت؛ تازه‌سازی با ناوبری، router.refresh() یا TTL",
        ],
      },
      {
        heading: "Revalidation — زمان‌محور و دستی",
        body: [
          "revalidation زمان‌محور گزینه‌ی «تنظیم کن و فراموش کن» است: next: { revalidate: N } روی fetch، یا export const revalidate = N روی مسیر. بعد از N ثانیه، درخواست بعدی در پس‌زمینه بازتولید می‌کند در حالی که کاربران هنوز نسخه‌ی کش‌شده را می‌بینند — هیچ‌کس هرگز منتظر نمی‌ماند.",
          "revalidation دستی جراحی است: بعد از یک mutation (مثلاً انتشار یک پست)، در یک Server Action یا Route Handler صدا بزنید revalidateTag(\"posts\") و هر fetch تگ‌خورده‌ی posts — و هر مسیری که از آن‌ها استفاده می‌کند — در درخواست بعدی بازتولید می‌شود. فروشگاه‌ها با همین روش صفحات محصول را چند ثانیه بعد از تغییر قیمت تازه نگه می‌دارند، بدون هیچ بیلدی.",
        ],
        code: {
          title: "revalidation دستی",
          lang: "ts",
          content: `"use server";

import { revalidateTag, revalidatePath } from "next/cache";

export async function publishPost(id: string) {
  await db.post.update({ where: { id }, data: { status: "published" } });

  revalidateTag("posts");         // با تگ داده
  revalidatePath("/blog");        // یا با مسیر
  return { ok: true };
}`,
        },
      },
      {
        heading: "وقتی تازگی لازم دارید، از کش خارج شوید",
        body: [
          "گاهی یک مسیر باید واقعاً داینامیک باشد: موجودی انبار، فید مخصوص هر کاربر، شمارنده‌های زنده. per route با export const dynamic = \"force-dynamic\" خارج می‌شوید، per fetch با cache: \"no-store\" و per request با خواندن cookies() یا headers().",
          "Router Cache هم پیچ تنظیم دارد: در نکست ۱۵ صفحات prefetched ۵ دقیقه می‌مانند (قبلاً ۳۰ بود) و صفحات بازدیدشده ۳۰ ثانیه. صدا زدن router.refresh() مسیر فعلی را دوباره از سرور می‌گیرد و کش را به‌روز می‌کند — حرکت استاندارد بلافاصله بعد از هر mutation.",
        ],
        code: {
          title: "اجبار رفتار داینامیک",
          lang: "tsx",
          content: `// per-route
export const dynamic = "force-dynamic";

export default async function LiveFeed() {
  // per-fetch
  const res = await fetch("https://api.example.com/live", {
    cache: "no-store",          // این یکی هرگز کش نشود
  });
  return <Feed data={await res.json()} />;
}`,
        },
      },
    ],
  },
};
