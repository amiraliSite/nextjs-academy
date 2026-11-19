import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Vazirmatn, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./fx.css";
import "./docs.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer, BackToTop } from "@/components/Footer";
import { Preloader, RouteProgress } from "@/components/chrome";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amiralisite.github.io"),
  title: {
    default: "Next.js Academy — Learn the App Router, Beautifully",
    template: "%s · Next.js Academy",
  },
  description:
    "A luxurious, bilingual (English / فارسی) interactive documentation experience that teaches the entire Next.js 15 App Router — from create-next-app to production deployment.",
  keywords: [
    "Next.js",
    "App Router",
    "React",
    "Server Components",
    "RTL",
    "Persian",
    "آموزش نکست‌جی‌اس",
  ],
  authors: [{ name: "amiraliSite" }],
  creator: "amiraliSite",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04050b",
};

/* Sets theme + language before first paint so there is no flash. */
const bootScript = `(function(){try{var t=localStorage.getItem("njs-theme");if(!t){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}if(t==="light"){document.documentElement.classList.add("light")}var l=localStorage.getItem("njs-lang");if(l==="fa"){document.documentElement.lang="fa";document.documentElement.dir="rtl"}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <Providers>
          <Preloader />
          <RouteProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
