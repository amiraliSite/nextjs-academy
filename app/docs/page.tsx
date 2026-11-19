import type { Metadata } from "next";
import { DocsIndex } from "@/components/docs";

export const metadata: Metadata = {
  title: "Curriculum — 20 Topics",
  description:
    "All twenty Next.js Academy topics: foundations, routing and navigation, rendering and data, then production polish.",
};

export default function DocsPage() {
  return (
    <main>
      <DocsIndex />
    </main>
  );
}
