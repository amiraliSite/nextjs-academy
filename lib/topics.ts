import { Topic } from "./types";
import { introduction } from "@/content/topics/introduction";
import { installation } from "@/content/topics/installation";
import { projectStructure } from "@/content/topics/project-structure";
import { appRouter } from "@/content/topics/app-router";
import { routing } from "@/content/topics/routing";
import { linkingNavigating } from "@/content/topics/linking-navigating";
import { serverComponents } from "@/content/topics/server-components";
import { renderingPatterns } from "@/content/topics/rendering-patterns";
import { dataFetching } from "@/content/topics/data-fetching";
import { caching } from "@/content/topics/caching";
import { serverActions } from "@/content/topics/server-actions";
import { streamingSuspense } from "@/content/topics/streaming-suspense";
import { imagesFonts } from "@/content/topics/images-fonts";
import { metadataSeo } from "@/content/topics/metadata-seo";
import { styling } from "@/content/topics/styling";
import { apiRoutes } from "@/content/topics/api-routes";
import { envVars } from "@/content/topics/env-vars";
import { i18n } from "@/content/topics/i18n";
import { performance } from "@/content/topics/performance";
import { deployment } from "@/content/topics/deployment";

/** All topics, in the recommended learning order. */
export const topics: Topic[] = [
  introduction,
  installation,
  projectStructure,
  appRouter,
  routing,
  linkingNavigating,
  serverComponents,
  renderingPatterns,
  dataFetching,
  caching,
  serverActions,
  streamingSuspense,
  imagesFonts,
  metadataSeo,
  styling,
  apiRoutes,
  envVars,
  i18n,
  performance,
  deployment,
];

export interface PartMeta {
  id: 1 | 2 | 3 | 4;
  en: string;
  fa: string;
}

export const parts: PartMeta[] = [
  { id: 1, en: "Foundations", fa: "مبانی" },
  { id: 2, en: "Routing & Navigation", fa: "مسیریابی و ناوبری" },
  { id: 3, en: "Rendering & Data", fa: "رندر و داده" },
  { id: 4, en: "Production & Polish", fa: "تولید و پالایش" },
];

export function partLabel(id: 1 | 2 | 3 | 4, lang: "en" | "fa"): string {
  const p = parts.find((x) => x.id === id);
  return p ? p[lang] : "";
}

/** Lightweight metadata for grids/search (keeps client bundles small). */
export const topicMeta = topics.map((t, i) => ({
  slug: t.slug,
  icon: t.icon,
  index: i + 1,
  part: t.part,
  sections: t.en.sections.length,
  en: { title: t.en.title, description: t.en.description },
  fa: { title: t.fa.title, description: t.fa.description },
}));

export type TopicMetaItem = (typeof topicMeta)[number];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getNeighbors(slug: string) {
  const i = topics.findIndex((t) => t.slug === slug);
  return {
    index: i,
    prev: i > 0 ? topics[i - 1] : undefined,
    next: i >= 0 && i < topics.length - 1 ? topics[i + 1] : undefined,
  };
}

export const siteStats = {
  topics: topics.length,
  sections: topics.reduce((n, t) => n + t.en.sections.length, 0),
  examples: topics.reduce((n, t) => n + t.en.sections.filter((s) => s.code).length, 0),
  langs: 2,
};
