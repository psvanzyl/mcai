import type { Metadata } from "next";
import { insights } from "@/content/insights";
import InsightsBrowser, { type InsightListItem } from "@/components/InsightsBrowser";
import { CTABand, PageHero } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research and perspectives from McAi on AI strategy, data platforms, agentic operations, responsible AI, and the operating-model decisions behind them.",
};

export default async function InsightsPage({ searchParams }: { searchParams: Promise<{ theme?: string }> }) {
  const { theme } = await searchParams;

  const items: InsightListItem[] = insights.map((i) => ({
    slug: i.slug,
    title: i.title,
    category: i.category,
    themes: i.themes,
    excerpt: i.excerpt,
    date: i.date,
    readMinutes: i.readMinutes,
    img: i.img,
  }));

  const themes = Array.from(new Set(insights.flatMap((i) => i.themes))).sort();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Research our clients act on"
        intro="Every article, report, and interview here is written by the people who deliver the work. Filter by theme, or search across the full library."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />
      <section className="container-x py-12 md:py-16">
        <InsightsBrowser items={items} themes={themes} initialTheme={theme} />
      </section>
      <CTABand
        eyebrow="The McAi Quarterly"
        title="Get the next issue before it is published"
        text="One email, four times a year, with the datasets and baselines behind each piece."
        primary={{ label: "Subscribe", href: "/contact#newsletter" }}
        secondary={{ label: "Talk to a partner", href: "/contact" }}
        img="/img/newsroom.jpg"
      />
    </>
  );
}
