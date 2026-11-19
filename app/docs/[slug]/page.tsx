import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { topics } from "@/lib/topics";
import { TopicView } from "@/components/TopicView";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);
  if (!topic) return { title: "Not found" };
  return {
    title: topic.en.title,
    description: topic.en.description,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);
  if (!topic) notFound();
  return (
    <main>
      <TopicView topic={topic} />
    </main>
  );
}
