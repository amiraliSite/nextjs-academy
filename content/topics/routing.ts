import { Topic } from "../../lib/types";

export const routing: Topic = {
  slug: "routing",
  icon: "🔀",
  part: 2,
  en: {
    title: "Routing & Dynamic Segments",
    description:
      "Dynamic brackets, catch-all routes, route groups, parallel routes and middleware — building the URL space of a real product.",
    sections: [
      {
        heading: "Dynamic segments and catch-alls",
        body: [
          "Folders wrapped in square brackets become dynamic parameters: app/blog/[slug]/page.tsx matches /blog/hello, /blog/anything, and receives params.slug in the page. In Next.js 15, params (and searchParams) are Promises that you await in Server Components.",
          "Catch-all segments extend this: [...slug] matches any depth (blog/a/b/c), and the optional variant [[...slug]] also matches the empty case — perfect for a docs engine where /docs and /docs/a/b should hit the same page.",
        ],
        code: {
          title: "app/blog/[slug]/page.tsx",
          lang: "tsx",
          content: `export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;   // Next 15: params is a Promise
  return <h1>Post: {slug}</h1>;
}`,
        },
      },
      {
        heading: "Route groups, parallel and intercepting routes",
        body: [
          "Route groups — folders in parentheses — organize routes without affecting URLs. The classic use is two different layouts in one app: (marketing) for the landing pages and (app) for the logged-in dashboard, each with its own navigation and theme.",
          "Parallel routes let one layout render several independent children simultaneously using slots like @analytics — each slot has its own loading and error state, so one slow panel never blocks the whole dashboard. Intercepting routes (like (.)photo) let you show a modal over the current page on soft navigation, while keeping a full page for direct links — the Instagram-style pattern.",
        ],
        bullets: [
          "(marketing)/(app) — separate layouts, invisible in the URL",
          "@slot — parallel children in one layout, independent loading/error",
          "(.) / (..) / (…) — intercept same / parent / root levels",
        ],
      },
      {
        heading: "Middleware — the gate before every request",
        body: [
          "middleware.ts sits at the project root and runs before any route is served. It can rewrite URLs, redirect, set headers, or gate access — the canonical use is auth: check a session cookie and redirect unauthenticated visitors to /login before the page even starts rendering.",
          "Keep middleware lean: it runs on every matching request, and its bundle runs on the edge runtime — no heavy Node APIs. For simple static sites like this one, middleware is usually unnecessary, but it is the tool of choice for A/B tests, geolocation routing and auth walls in larger apps.",
        ],
        code: {
          title: "middleware.ts",
          lang: "ts",
          content: `import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.has("session");
  if (!hasSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],  // run only for dashboard routes
};`,
        },
      },
    ],
  },
  fa: {
    title: "مسیریابی و سگمنت‌های داینامیک",
    description:
      "براکت‌های داینامیک، مسیرهای catch-all، گروه‌های مسیر، مسیرهای موازی و middleware — ساخت فضای URL یک محصول واقعی.",
    sections: [
      {
        heading: "سگمنت‌های داینامیک و catch-all",
        body: [
          "پوشه‌هایی که در براکت مربع می‌نشینند، پارامتر داینامیک می‌شوند: app/blog/[slug]/page.tsx با /blog/hello و /blog/anything مطابقت دارد و در صفحه params.slug را دریافت می‌کند. در نکست‌جی‌اس ۱۵، params (و searchParams) Promise هستند و در سرور کامپوننت‌ها باید await شوند.",
          "سگمنت‌های catch-all این را گسترش می‌دهند: [...slug] هر عمقی را می‌گیرد (blog/a/b/c) و حالت اختیاری‌اش [[...slug]] حالت خالی را هم می‌گیرد — عالی برای موتور مستنداتی که /docs و /docs/a/b باید به یک صفحه برسند.",
        ],
        code: {
          title: "app/blog/[slug]/page.tsx",
          lang: "tsx",
          content: `export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;   // نکست ۱۵: params یک Promise است
  return <h1>Post: {slug}</h1>;
}`,
        },
      },
      {
        heading: "گروه‌های مسیر، مسیرهای موازی و رهگیر",
        body: [
          "گروه‌های مسیر — پوشه‌های پرانتزی — مسیرها را بدون تأثیر روی URL سازمان می‌دهند. استفاده‌ی کلاسیک، دو لی‌آوت متفاوت در یک اپ است: (marketing) برای لندینگ‌ها و (app) برای داشبورد کاربر لاگین‌شده، هرکدام با ناوبری و تم خودش.",
          "مسیرهای موازی اجازه می‌دهند یک لی‌آوت چند فرزند مستقل را همزمان رندر کند با اسلات‌هایی مثل @analytics — هر اسلات loading و error خودش را دارد، پس یک پنل کند هیچ‌وقت کل داشبورد را بلاک نمی‌کند. مسیرهای رهگیر (مثل (.)photo) اجازه می‌دهند روی ناوبری نرم یک مودال روی صفحه‌ی فعلی باز شود، ولی لینک مستقل همچنان صفحه‌ی کامل باز کند — همان الگوی سبک اینستاگرام.",
        ],
        bullets: [
          "(marketing)/(app) — دو لی‌آوت جدا، نامرئی در URL",
          "@slot — فرزندان موازی در یک لی‌آوت با loading/error مستقل",
          "(.) / (..) / (…) — رهگیری همان سطح / والد / ریشه",
        ],
      },
      {
        heading: "Middleware — دروازه‌ی قبل از هر درخواست",
        body: [
          "فایل middleware.ts در ریشه‌ی پروژه قرار می‌گیرد و قبل از سرو شدن هر مسیر اجرا می‌شود. می‌تواند URL را بازنویسی کند، ریدایرکت کند، هدر بگذارد یا دسترسی را کنترل کند — کاربرد کلاسیک، احراز هویت است: چک کردن کوکی سشن و ریدایرکت بازدیدکننده‌ی بدون لاگین به /login، قبل از اینکه رندر صفحه شروع شود.",
          "middleware را سبک نگه دارید: روی هر درخواست مطابق اجرا می‌شود و باندلش روی edge runtime اجرا می‌شود — بدون APIهای سنگین Node. برای سایت‌های استاتیک ساده مثل همین سایت معمولاً لازم نیست، اما در اپ‌های بزرگ ابزار اول برای تست‌های A/B، مسیریابی جغرافیایی و دیوارهای احراز هویت است.",
        ],
        code: {
          title: "middleware.ts",
          lang: "ts",
          content: `import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hasSession = request.cookies.has("session");
  if (!hasSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],  // فقط برای مسیرهای داشبورد
};`,
        },
      },
    ],
  },
};
