import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { Arrow, CTABand, InsightCard, PageHero, StatRow } from "@/components/Cards";

export function generateStaticParams() {
  return industries.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const practice = industries.find((p) => p.slug === slug);
  if (!practice) return { title: "Industry not found" };
  return {
    title: practice.name,
    description: practice.tagline,
    openGraph: { title: `${practice.name} | McAi`, description: practice.tagline, images: [{ url: practice.img }] },
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = industries.find((p) => p.slug === slug);
  if (!practice) notFound();

  const related = practice.related
    .map((s) => insights.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const others = industries.filter((p) => p.slug !== practice.slug).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={practice.name}
        intro={practice.tagline}
        img={practice.img}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: practice.name }]}
      />

      <section className="container-x grid grid-cols-1 gap-14 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-[28px] md:text-[34px]">Where we start</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-body">
            {practice.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="border border-line bg-surface p-7">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Typical results</h2>
            <dl className="mt-6 space-y-6">
              {practice.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="font-serif text-[30px] leading-none text-accent">{m.value}</dt>
                  <dd className="mt-2 text-[14px] text-body">{m.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-7 text-[12px] text-muted">Illustrative client outcomes, representative of engagements in this sector.</p>
            <Link href="/contact" className="btn btn-primary mt-7 w-full justify-center">
              Talk to this practice
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-[28px] md:text-[34px]">How we help</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {practice.howWeHelp.map((h) => (
              <article key={h.title} className="border-t border-line pt-6">
                <h3 className="text-[21px]">{h.title}</h3>
                <p className="mt-3 text-[16px] text-body">{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">Evidence</p>
          <h2 className="mt-4 text-[28px] md:text-[34px]">What this looks like in practice</h2>
        </div>
        <div className="mt-10">
          <StatRow stats={practice.metrics} />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-line-soft">
          <div className="container-x py-16 md:py-20">
            <h2 className="text-[28px] md:text-[34px]">Related insights</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {related.map((i) => (
                <InsightCard key={i.slug} insight={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line-soft bg-surface">
        <div className="container-x py-14 md:py-16">
          <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Other industries</h2>
          <ul className="mt-6 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-line">
                <Link href={`/industries/${o.slug}`} className="group flex items-center justify-between gap-4 py-4">
                  <span className="text-[17px] text-heading group-hover:text-accent">{o.name}</span>
                  <Arrow className="shrink-0 text-muted group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        eyebrow="Next step"
        title={`Bring us your ${practice.name.toLowerCase()} problem`}
        text="A ninety-minute working session is usually enough to agree the baseline, the owner, and the first evidence gate."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "All industries", href: "/industries" }}
        img={practice.img}
      />
    </>
  );
}
