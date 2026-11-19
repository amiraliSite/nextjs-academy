import { Hero } from "@/components/Hero";
import {
  Features,
  CurriculumGrid,
  CodeShowcase,
  Roadmap,
  CTABanner,
} from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <CurriculumGrid />
      <CodeShowcase />
      <Roadmap />
      <CTABanner />
    </main>
  );
}
