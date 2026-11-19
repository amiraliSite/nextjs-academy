/** UI strings for the whole site — every key must exist in both languages. */

const en = {
  brand: "Next.js Academy",
  nav_home: "Home",
  nav_docs: "Curriculum",
  nav_github: "GitHub",

  hero_badge: "Next.js 15 · App Router · Interactive Edition",
  hero_title_1: "Learn Next.js",
  hero_title_2: "Beautifully.",
  hero_sub:
    "A luxurious, fully bilingual, interactive academy that walks you through the entire Next.js App Router — from your first create-next-app to production deployment, with real code and gorgeous visuals.",
  cta_start: "Start Learning",
  cta_browse: "Browse Curriculum",
  scroll_hint: "scroll to explore",

  stat_topics: "Core Topics",
  stat_sections: "Deep Sections",
  stat_examples: "Code Examples",
  stat_langs: "Languages",

  features_kicker: "Why Next.js Academy",
  features_title: "A docs site that feels like a product",
  features_sub:
    "Not another wall of text — every topic is designed, animated and translated with the same care you would put into your own product.",
  f1t: "Complete App Router Coverage",
  f1d: "Layouts, dynamic routes, route groups, parallel and intercepting routes — every file convention explained with runnable examples.",
  f2t: "Server Components, Demystified",
  f2d: "A crystal-clear mental model for RSC, the use client boundary, and composing server with client components the right way.",
  f3t: "Caching Without Confusion",
  f3d: "Request memoization, Data Cache, Full Route Cache and Router Cache — the four layers finally drawn as one simple picture.",
  f4t: "Two Languages, One Click",
  f4d: "Switch between English and فارسی instantly — the entire interface flips to RTL, fonts change, and your choice is remembered.",
  f5t: "Night & Day, Silky Smooth",
  f5d: "A hand-tuned dark and light theme with glass surfaces, aurora backgrounds and buttery theme transitions everywhere.",
  f6t: "Loading as a Feature",
  f6d: "A cinematic preloader, route progress bar, skeleton states and orbit spinners — every wait is a delight, never a delay.",

  curr_kicker: "The Curriculum",
  curr_title: "Everything Next.js, in four parts",
  curr_sub:
    "Twenty deep-dive topics ordered as a real learning path — foundations, routing, rendering and data, then production polish.",
  p1: "Foundations",
  p2: "Routing & Navigation",
  p3: "Rendering & Data",
  p4: "Production & Polish",

  roadmap_kicker: "Learning Path",
  roadmap_title: "From zero to deployed",
  roadmap_sub:
    "The curriculum is grouped into four parts. Follow them in order and you will ship a production Next.js app by the last topic.",
  r1t: "Set up your foundations",
  r1d: "Understand what Next.js is, scaffold a project and learn the file conventions that power everything else.",
  r2t: "Master routing",
  r2d: "Layouts, dynamic segments, route groups, middleware and navigation — the skeleton of every real application.",
  r3t: "Own rendering & data",
  r3d: "Server vs client components, fetching strategies, the caching stack, mutations with Server Actions and streaming.",
  r4t: "Polish & ship it",
  r4d: "Images, fonts, SEO metadata, styling, API handlers, i18n, performance and deploying — including this very site on GitHub Pages.",

  code_kicker: "Real Code",
  code_title: "Learn by reading real examples",
  code_sub:
    "Every topic ships with copy-ready snippets — layouts, loaders, server actions, caching — the actual patterns you will use at work.",
  code_note:
    "This is the real root layout of this website: theme bootstrapping, three optimized fonts and global providers in a few lines.",

  cta_title: "Ready to master Next.js?",
  cta_sub: "Twenty topics. Two languages. One unforgettable interface.",
  cta_btn: "Begin the journey",

  docs_title: "Full Curriculum",
  docs_sub:
    "All twenty topics of the academy, ordered as a learning path. Filter, pick a card, and start reading — your progress in routing starts with the App Router.",
  search_ph: "Search topics…",
  no_results: "No topics match your search.",
  topics_count: "topics",

  read_min: "min read",
  sections_label: "sections",
  examples_label: "code examples",
  part_label: "Part",
  prev_topic: "Previous",
  next_topic: "Next",
  back_to_docs: "All topics",
  copy: "Copy",
  copied: "Copied!",
  breadcrumb_home: "Academy",

  footer_tag:
    "A luxurious, bilingual Next.js 15 documentation experience — hand-crafted with custom CSS, no UI libraries.",
  footer_built: "Built with Next.js 15 · App Router",
  footer_deployed: "Deployed on GitHub Pages",
  footer_rights: "© 2026 Next.js Academy — MIT License",

  theme_aria: "Toggle night / day theme",
  lang_aria: "Switch language",
  preloader_note: "Preparing the experience",
  menu_aria: "Open menu",
};

export type Dict = typeof en;

const fa: Dict = {
  brand: "آکادمی نکست‌جی‌اس",
  nav_home: "خانه",
  nav_docs: "سرفصل‌ها",
  nav_github: "گیت‌هاب",

  hero_badge: "نکست‌جی‌اس ۱۵ · اپ روتر · نسخه تعاملی",
  hero_title_1: "یادگیری نکست‌جی‌اس،",
  hero_title_2: "دیوانه‌وار زیبا.",
  hero_sub:
    "آکادمی‌ای لوکس، کاملاً دوزبانه و تعاملی که کل اپ روتر نکست‌جی‌اس را با شما مرور می‌کند — از اولین create-next-app تا استقرار در محیط تولید، همراه با کد واقعی و ظاهری چشم‌نواز.",
  cta_start: "شروع یادگیری",
  cta_browse: "مشاهده سرفصل‌ها",
  scroll_hint: "برای کشف، اسکرول کنید",

  stat_topics: "سرفصل اصلی",
  stat_sections: "بخش عمیق",
  stat_examples: "نمونه کد",
  stat_langs: "زبان",

  features_kicker: "چرا آکادمی نکست‌جی‌اس؟",
  features_title: "یک سایت مستندات که مثل یک محصول حس می‌شود",
  features_sub:
    "نه یک دیوار متن خسته‌کننده — هر سرفصل با همان وسواسی که برای محصول خودتان می‌گذارید، طراحی، انیمیت و ترجمه شده است.",
  f1t: "پوشش کامل اپ روتر",
  f1d: "لی‌آوت‌ها، مسیرهای داینامیک، گروه‌های مسیر، مسیرهای موازی و رهگیر — همه قراردادهای فایل با مثال قابل اجرا توضیح داده شده‌اند.",
  f2t: "سرور کامپوننت‌ها، بالاخره ساده",
  f2d: "یک مدل ذهنی شفاف برای RSC، مرز use client و ترکیب درست کامپوننت‌های سرور و کلاینت.",
  f3t: "کش، بدون سردرگمی",
  f3d: "Request Memoization، Data Cache، Full Route Cache و Router Cache — چهار لایه‌ای که بالاخره یک تصویر ساده ازشان می‌بینید.",
  f4t: "دو زبان، با یک کلیک",
  f4d: "بین انگلیسی و فارسی لحظه‌ای جابه‌جا شوید — کل رابط به RTL می‌چرخد، فونت‌ها عوض می‌شوند و انتخاب شما به خاطر سپرده می‌شود.",
  f5t: "شب و روز، لطیف و روان",
  f5d: "تم تیره و روشن دست‌ساز با سطوح شیشه‌ای، پس‌زمینه‌های شفق قطبی و ترنزیشن‌های لطیف در همه‌جا.",
  f6t: "لودینگ به‌عنوان یک ویژگی",
  f6d: "پری‌لودر سینمایی، نوار پیشرفت مسیر، حالت‌های اسکلتونی و اسپینرهای مداری — هر انتظار، یک لذت است نه یک تأخیر.",

  curr_kicker: "سرفصل‌های کامل",
  curr_title: "همه‌ی نکست‌جی‌اس، در چهار بخش",
  curr_sub:
    "بیست سرفصل عمیق و مرتب‌شده مثل یک مسیر یادگیری واقعی — اول مبانی، بعد مسیریابی، بعد رندر و داده، و در آخر پالایش محصول.",
  p1: "مبانی",
  p2: "مسیریابی و ناوبری",
  p3: "رندر و داده",
  p4: "تولید و پالایش",

  roadmap_kicker: "مسیر یادگیری",
  roadmap_title: "از صفر تا استقرار",
  roadmap_sub:
    "سرفصل‌ها در چهار بخش دسته‌بندی شده‌اند. به ترتیب جلو بروید و در سرفصل آخر یک اپلیکیشن نکست‌جی‌اس واقعی را منتشر خواهید کرد.",
  r1t: "مبانی را محکم کن",
  r1d: "بفهم نکست‌جی‌اس چیست، یک پروژه بساز و قراردادهای فایل را یاد بگیر که همه‌چیز روی آن‌ها بنا شده است.",
  r2t: "مسیریابی را مسلط شو",
  r2d: "لی‌آوت‌ها، سگمنت‌های داینامیک، گروه‌های مسیر، middleware و ناوبری — اسکلت هر اپلیکیشن واقعی.",
  r3t: "رندر و داده را مالک شو",
  r3d: "کامپوننت‌های سرور و کلاینت، استراتژی‌های دریافت داده، پشته‌ی کش، تغییر داده با Server Actions و استریمینگ.",
  r4t: "پالایش کن و منتشر کن",
  r4d: "تصاویر، فونت‌ها، متادیتای سئو، استایل، API، چندزبانه بودن، کارایی و استقرار — از جمله همین سایت روی GitHub Pages.",

  code_kicker: "کد واقعی",
  code_title: "با خواندن نمونه‌های واقعی یاد بگیر",
  code_sub:
    "هر سرفصل با snippetهای آماده‌ی کپی همراه است — لی‌آوت، لودر، Server Action، کش — دقیقاً همان الگوهایی که در کار واقعی استفاده می‌کنید.",
  code_note:
    "این همان root layout واقعی همین وب‌سایت است: بوت‌استرپ تم، سه فونت بهینه‌شده و Providerهای سراسری، در چند خط.",

  cta_title: "آماده‌ی تسلط بر نکست‌جی‌اس هستی؟",
  cta_sub: "بیست سرفصل. دو زبان. یک رابط فراموش‌نشدنی.",
  cta_btn: "سفر را شروع کن",

  docs_title: "سرفصل‌های کامل",
  docs_sub:
    "هر بیست سرفصل آکادمی، مرتب‌شده مثل یک مسیر یادگیری. فیلتر کن، یک کارت انتخاب کن و شروع به خواندن کن — مسیر مسیریابی از اپ روتر شروع می‌شود.",
  search_ph: "جستجوی سرفصل‌ها…",
  no_results: "هیچ سرفصلی با جستجوی شما مطابقت ندارد.",
  topics_count: "سرفصل",

  read_min: "دقیقه مطالعه",
  sections_label: "بخش",
  examples_label: "نمونه کد",
  part_label: "بخش",
  prev_topic: "قبلی",
  next_topic: "بعدی",
  back_to_docs: "همه سرفصل‌ها",
  copy: "کپی",
  copied: "کپی شد!",
  breadcrumb_home: "آکادمی",

  footer_tag:
    "یک تجربه‌ی مستندسازی لوکس و دوزبانه برای نکست‌جی‌اس ۱۵ — دست‌ساز با CSS سفارشی، بدون هیچ کتابخانه‌ی UI.",
  footer_built: "ساخته‌شده با Next.js 15 · App Router",
  footer_deployed: "منتشرشده روی GitHub Pages",
  footer_rights: "© ۲۰۲۶ آکادمی نکست‌جی‌اس — مجوز MIT",

  theme_aria: "تغییر تم شب و روز",
  lang_aria: "تغییر زبان",
  preloader_note: "در حال آماده‌سازی تجربه",
  menu_aria: "باز کردن منو",
};

export const dictionaries: Record<"en" | "fa", Dict> = { en, fa };
