import { Topic } from "../../lib/types";

export const apiRoutes: Topic = {
  slug: "api-routes",
  icon: "🔌",
  part: 4,
  en: {
    title: "Route Handlers (API Routes)",
    description:
      "Build REST endpoints inside the app directory with route.ts — webhooks, public APIs and when to prefer Server Actions instead.",
    sections: [
      {
        heading: "route.ts — an endpoint in a file",
        body: [
          "A route.ts file turns its folder into an HTTP endpoint: export functions named after the methods you support (GET, POST, PUT, DELETE) and return a standard Web Response. No Express server, no separate backend repo — your API lives next to your UI.",
          "Like pages, handlers can be static (exported at build time, perfect for generated feeds) or dynamic (reading params, headers or cookies marks them per-request). Dynamic handlers receive awaited params in Next 15, exactly like pages do.",
        ],
        code: {
          title: "app/api/posts/route.ts",
          lang: "ts",
          content: `import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const posts = await db.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await db.post.create({ data: { title: body.title } });
  return NextResponse.json(post, { status: 201 });
}`,
        },
      },
      {
        heading: "Dynamic handlers, streaming and auth",
        body: [
          "Handlers nest under dynamic folders like pages: app/api/posts/[id]/route.ts receives (await params).id. You can also return streams — a ReadableStream for SSE endpoints feeding live updates into a client component is a few lines.",
          "Authorization works with anything you use elsewhere: read a session cookie via request.cookies, verify a token from headers, and return 401 before touching the database. Remember the rule from the Server Actions topic: every handler is a public endpoint.",
        ],
        code: {
          title: "app/api/posts/[id]/route.ts",
          lang: "ts",
          content: `export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;          // Next 15: params is a Promise

  const session = request.cookies.get("session");
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await db.post.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}`,
        },
      },
      {
        heading: "Route Handlers or Server Actions?",
        body: [
          "The modern split is simple: mutations from your own UI belong in Server Actions (typed calls, automatic FormData handling, no client-side fetch plumbing), while Route Handlers are for third parties — webhooks from Stripe or GitHub, a public REST API consumed by mobile apps, RSS feeds and health checks.",
          "If both call the same logic, put it in a lib/ function and let both surfaces call it. That keeps the boundary clean: Actions are for you, Handlers are for the world.",
        ],
        bullets: [
          "Server Actions — internal form submits and mutations from your UI",
          "Route Handlers — webhooks, public API, RSS/sitemap, health checks",
          "Shared logic lives in lib/, called by either surface",
        ],
      },
    ],
  },
  fa: {
    title: "Route Handler ها (API Routes)",
    description:
      "با route.ts داخل پوشه‌ی app اندپوینت REST بسازید — وب‌هوک‌ها، APIهای عمومی و اینکه کجا بهتر است از Server Action استفاده کنید.",
    sections: [
      {
        heading: "route.ts — یک اندپوینت در یک فایل",
        body: [
          "یک فایل route.ts پوشه‌اش را به یک اندپوینت HTTP تبدیل می‌کند: توابعی به نام متدهایی که پشتیبانی می‌کنید خروجی بدهید (GET، POST، PUT، DELETE) و یک Response استاندارد وب برگردانید. نه سرور Express لازم است، نه ریپوی بک‌اند جدا — API کنار UI شما زندگی می‌کند.",
          "مثل صفحات، هندلرها می‌توانند استاتیک باشند (در زمان بیلد خروجی گرفته می‌شوند؛ برای فیدهای تولیدی عالی) یا داینامیک (خواندن params و headers یا cookies آن‌ها را per-request می‌کند). هندلرهای داینامیک در نکست ۱۵ دقیقاً مثل صفحات، params را await می‌گیرند.",
        ],
        code: {
          title: "app/api/posts/route.ts",
          lang: "ts",
          content: `import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const posts = await db.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await db.post.create({ data: { title: body.title } });
  return NextResponse.json(post, { status: 201 });
}`,
        },
      },
      {
        heading: "هندلرهای داینامیک، استریم و احراز هویت",
        body: [
          "هندلرها مثل صفحات زیر پوشه‌های داینامیک می‌نشینند: app/api/posts/[id]/route.ts مقدار (await params).id را می‌گیرد. می‌توانید استریم هم برگردانید — یک ReadableStream برای اندپوینت‌های SSE که آپدیت‌های زنده را به یک کلاینت کامپوننت می‌فرستند، چند خط بیشتر نیست.",
          "احراز هویت با هر ابزاری که جای دیگر استفاده می‌کنید کار می‌کند: کوکی سشن را با request.cookies بخوانید، توکن را از headers تأیید کنید و قبل از دست زدن به دیتابیس 401 برگردانید. قاعده‌ی سرفصل Server Actions را یادتان نرود: هر هندلر یک اندپوینت عمومی است.",
        ],
        code: {
          title: "app/api/posts/[id]/route.ts",
          lang: "ts",
          content: `export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;          // نکست ۱۵: params یک Promise است

  const session = request.cookies.get("session");
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await db.post.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}`,
        },
      },
      {
        heading: "Route Handler یا Server Action؟",
        body: [
          "تفکیک مدرن ساده است: mutationهایی که از UI خودتان می‌آیند جایشان Server Action است (فراخوان تایپ‌دار، مدیریت خودکار FormData، بدون سیم‌کشی fetch سمت کلاینت)، در حالی که Route Handler ها برای ثالث‌ها هستند — وب‌هوک‌های Stripe یا GitHub، یک REST API عمومی برای اپ‌های موبایل، فیدهای RSS و health check ها.",
          "اگر هر دو منطق مشترکی را صدا می‌زنند، آن را در یک تابع در lib/ بگذارید و هر دو سطح صدا بزنند. مرز تمیز می‌ماند: Action ها برای خودتان، Handler ها برای دنیا.",
        ],
        bullets: [
          "Server Action ها — ارسال فرم‌های داخلی و mutationهای UI خودتان",
          "Route Handler ها — وب‌هوک‌ها، API عمومی، RSS/sitemap، health check",
          "منطق مشترک در lib/ می‌نشیند و از هر دو سطح صدا زده می‌شود",
        ],
      },
    ],
  },
};
