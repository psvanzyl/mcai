import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/content/insights";
import { ArrowLink, Breadcrumbs, CTABand, InsightCard, StatRow } from "@/components/Cards";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return { title: "Insight not found" };
  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: { title: insight.title, description: insight.excerpt, images: [{ url: insight.img }], type: "article" },
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = insights.filter((i) => i.slug !== insight.slug && i.themes.some((t) => insight.themes.includes(t))).slice(0, 3);
  const fallback = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);
  const more = related.length > 0 ? related : fallback;
  const dateLabel = new Date(insight.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <article>
        <header className="border-b border-line-soft bg-surface">
          <div className="container-x py-10 md:py-14">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: insight.category }]} />
            <p className="eyebrow mt-7 text-accent">{insight.category}</p>
            <h1 className="mt-4 max-w-4xl text-[32px] leading-[1.1] md:text-[50px]">{insight.title}</h1>
            <p className="mt-6 max-w-3xl text-[19px] text-body">{insight.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-muted">
              <span>{dateLabel}</span>
              <span>{insight.readMinutes} min read</span>
              <span>By {insight.authors.join(", ")}</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {insight.themes.map((t) => (
                <Link
                  key={t}
                  href={`/insights?theme=${encodeURIComponent(t)}`}
                  className="border border-line bg-panel px-3 py-1.5 text-[13px] text-heading hover:border-heading"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <div className="container-x pb-10 md:pb-14">
            <div className="card-media !aspect-[21/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={insight.img} alt="" width={1600} height={686} />
            </div>
          </div>
        </header>

        <div className="container-x grid grid-cols-1 gap-14 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <div className="article-body">
              {insight.body.map((para, i) => (
                <div key={i}>
                  <p>{para}</p>
                  {insight.pullQuote && i === 1 ? (
                    <blockquote className="my-10 border-l-4 border-accent pl-6 font-serif text-[24px] leading-snug text-heading">
                      “{insight.pullQuote}”
                    </blockquote>
                  ) : null}
                </div>
              ))}
            </div>

            {insight.stats?.length ? (
              <div className="mt-14 border-t border-line pt-10">
                <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">The numbers behind this piece</h2>
                <div className="mt-8">
                  <StatRow stats={insight.stats} />
                </div>
              </div>
            ) : null}

            <div className="mt-14 border-t border-line pt-8">
              <h2 className="text-[22px]">Authors</h2>
              <ul className="mt-5 space-y-3">
                {insight.authors.map((a) => (
                  <li key={a}>
                    <Link href="/our-people" className="arrow-link">
                      <span>{a}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-3">
            <div className="border-t border-line pt-6">
              <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Share</h2>
              <ul className="mt-4 space-y-3 text-[15px]">
                <li>
                  <a className="arrow-link" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://mcai.laserraptorai.duckdns.org/insights/${insight.slug}`)}`} rel="noreferrer noopener" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="arrow-link" href={`https://x.com/intent/post?url=${encodeURIComponent(`https://mcai.laserraptorai.duckdns.org/insights/${insight.slug}`)}`} rel="noreferrer noopener" target="_blank">
                    X
                  </a>
                </li>
                <li>
                  <Link className="arrow-link" href="/contact">
                    Ask us about this research
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 border-t border-line pt-6">
              <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">The McAi Quarterly</h2>
              <p className="mt-4 text-[15px] text-body">
                Four issues a year, with the baselines and datasets behind each piece.
              </p>
              <ArrowLink href="/contact#newsletter" className="mt-4">
                Subscribe
              </ArrowLink>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-line-soft bg-surface">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-[30px]">Related thinking</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {more.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Work with us"
        title="Want this applied to your P&L?"
        text="Bring us the decision you are stuck on. We will scope the baseline and the ninety-day proof with you."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "All insights", href: "/insights" }}
        img="/img/contact-hero.jpg"
      />
    </>
  );
}
