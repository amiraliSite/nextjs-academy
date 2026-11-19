import { Topic } from "../../lib/types";

export const serverActions: Topic = {
  slug: "server-actions",
  icon: "🛠️",
  part: 3,
  en: {
    title: "Server Actions & Mutations",
    description:
      "Mutate data without building an API: the use server directive, form actions, pending states and revalidating after writes.",
    sections: [
      {
        heading: "Functions that run on the server",
        body: [
          "A Server Action is an async function marked with the use server directive. You call it like any other function from client code, but its body executes on the server — database writes, emails, payment calls — with no API endpoint to design, version or protect.",
          "Server Actions integrate directly with forms: pass the function to the form's action attribute and the FormData arrives on the server automatically, progressively enhanced so the form even works before hydration finishes.",
        ],
        code: {
          title: "app/posts/actions.ts",
          lang: "ts",
          content: `"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") || "");

  if (!title.trim()) {
    return { error: "Title is required" };
  }

  await db.post.create({ data: { title } });
  revalidatePath("/posts");        // show the new post immediately
  return { ok: true };
}`,
        },
      },
      {
        heading: "React 19 hooks: useActionState and useFormStatus",
        body: [
          "useActionState wraps an action and gives you its return value plus a pending flag — the return value is how you send validation errors back to the UI without any state management library.",
          "useFormStatus reads the pending state of the enclosing form, which makes 'disable the submit button while submitting' a one-liner in a child component. Together they cover 90% of form UX: errors, pending spinners and success feedback.",
        ],
        code: {
          title: "app/posts/new/page.tsx",
          lang: "tsx",
          content: `"use client";

import { useActionState } from "react";
import { createPost } from "../actions";

export default function NewPost() {
  const [state, formAction, pending] = useActionState(
    async (prev, formData) => await createPost(formData),
    { error: undefined }
  );

  return (
    <form action={formAction}>
      <input name="title" placeholder="Post title" />
      {state?.error && <p>{state.error}</p>}
      <button disabled={pending}>
        {pending ? "Saving…" : "Publish"}
      </button>
    </form>
  );
}`,
        },
      },
      {
        heading: "Validation and staying safe",
        body: [
          "Server Actions are public endpoints — anyone with the client bundle can call them, so treat every argument as hostile input. Validate on the server with a schema library like Zod, check authorization inside the action itself (who is calling?), and never trust data that came only from the client.",
          "Actions also compose with the caching system: revalidateTag or revalidatePath after a successful write keeps your Full Route Cache honest, and redirect() at the end of an action is the idiomatic way to send the user to the new resource.",
        ],
        bullets: [
          "Validate all inputs server-side (Zod is the de-facto standard)",
          "Check auth inside the action — the client is never the source of truth",
          "Call revalidateTag / revalidatePath after writes",
          "Use redirect() or the return value to communicate results",
        ],
      },
    ],
  },
  fa: {
    title: "Server Actions و تغییر داده",
    description:
      "بدون ساختن API داده را تغییر دهید: دایرکتیو use server، فرم اکشن‌ها، حالت‌های pending و revalidate بعد از نوشتن.",
    sections: [
      {
        heading: "توابعی که روی سرور اجرا می‌شوند",
        body: [
          "یک Server Action تابع async ای است که با دایرکتیو use server علامت خورده است. از کد کلاینت مثل هر تابع دیگری صدا می‌زنید، اما بدنه‌اش روی سرور اجرا می‌شود — نوشتن در دیتابیس، ایمیل، پرداخت — بدون آنکه مجبور به طراحی، ورژن‌گذاری یا امن‌سازی یک اندپوینت API باشید.",
          "Server Action ها مستقیم با فرم‌ها هماهنگ‌اند: تابع را به attribute/action فرم بدهید و FormData به‌صورت خودکار روی سرور می‌رسد؛ با progressive enhancement هم فرم حتی قبل از اتمام hydrate کار می‌کند.",
        ],
        code: {
          title: "app/posts/actions.ts",
          lang: "ts",
          content: `"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") || "");

  if (!title.trim()) {
    return { error: "عنوان الزامی است" };
  }

  await db.post.create({ data: { title } });
  revalidatePath("/posts");        // پست جدید فوراً دیده شود
  return { ok: true };
}`,
        },
      },
      {
        heading: "هوک‌های React 19: useActionState و useFormStatus",
        body: [
          "useActionState یک اکشن را می‌پوشاند و مقدار بازگشتی آن به‌علاوه‌ی فلگ pending را می‌دهد — مقدار بازگشتی همان راهی است که خطاهای validation را بدون هیچ کتابخانه‌ی مدیریت state به UI برمی‌گردانید.",
          "useFormStatus وضعیت pending فرمِ والد را می‌خواند، پس «غیرفعال کردن دکمه‌ی submit حین ارسال» در یک کامپوننت فرزند، یک‌خطی می‌شود. این دو با هم ۹۰٪ تجربه‌ی فرم را پوشش می‌دهند: خطاها، اسپینر pending و پیام موفقیت.",
        ],
        code: {
          title: "app/posts/new/page.tsx",
          lang: "tsx",
          content: `"use client";

import { useActionState } from "react";
import { createPost } from "../actions";

export default function NewPost() {
  const [state, formAction, pending] = useActionState(
    async (prev, formData) => await createPost(formData),
    { error: undefined }
  );

  return (
    <form action={formAction}>
      <input name="title" placeholder="عنوان پست" />
      {state?.error && <p>{state.error}</p>}
      <button disabled={pending}>
        {pending ? "در حال ذخیره…" : "انتشار"}
      </button>
    </form>
  );
}`,
        },
      },
      {
        heading: "اعتبارسنجی و امن ماندن",
        body: [
          "Server Action ها اندپوینت عمومی‌اند — هر کسی که باندل کلاینت را دارد می‌تواند صدا بزندشان، پس هر آرگومان را ورودیِ خصمانه ببینید. روی سرور با یک کتابخانه‌ی اسکیمای مثل Zod اعتبارسنجی کنید، مجوز را داخل خود اکشن چک کنید (چه کسی صدا می‌زند؟) و هرگز به داده‌ای که فقط از کلاینت آمده اعتماد نکنید.",
          "اکشن‌ها با سیستم کش هم ترکیب می‌شوند: بعد از نوشتنِ موفق، revalidateTag یا revalidatePath صداقت Full Route Cache شما را حفظ می‌کند و redirect() در انتهای اکشن، روش اصیل فرستادن کاربر به منبع جدید است.",
        ],
        bullets: [
          "همه‌ی ورودی‌ها را سمت سرور اعتبارسنجی کنید (Zod استاندارد بالفعل است)",
          "احراز هویت را داخل اکشن چک کنید — کلاینت هرگز منبع حقیقت نیست",
          "بعد از نوشتن، revalidateTag یا revalidatePath را صدا بزنید",
          "برای اعلام نتیجه از redirect() یا مقدار بازگشتی استفاده کنید",
        ],
      },
    ],
  },
};
