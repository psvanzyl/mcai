import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { capabilities } from "@/content/capabilities";
import { insights } from "@/content/insights";
import { Arrow, CTABand, InsightCard, PageHero } from "@/components/Cards";

export function generateStaticParams() {
  return capabilities.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.slug === slug);
  if (!cap) return { title: "Capability not found" };
  return {
    title: cap.name,
    description: cap.tagline,
    openGraph: { title: `${cap.name} | McAi`, description: cap.tagline, images: [{ url: cap.img }] },
  };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.slug === slug);
  if (!cap) notFound();

  const related = cap.related
    .map((s) => insights.find((i) => i.slug === s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const others = capabilities.filter((c) => c.slug !== cap.slug);

  return (
    <>
      <PageHero
        eyebrow="Capability"
        title={cap.name}
        intro={cap.tagline}
        img={cap.img}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capabilities", href: "/capabilities" }, { label: cap.name }]}
      />

      <section className="container-x grid grid-cols-1 gap-14 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-[28px] md:text-[34px]">Our point of view</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-body">
            {cap.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border border-line bg-surface p-7">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">What we commit to</h2>
            <dl className="mt-6 space-y-6">
              {cap.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="font-serif text-[30px] leading-none text-accent">{m.value}</dt>
                  <dd className="mt-2 text-[14px] text-body">{m.label}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className="btn btn-primary mt-7 w-full justify-center">
              Scope an engagement
            </Link>
          </div>
          <nav aria-label="Other capabilities" className="mt-8 border-t border-line pt-6">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Other capabilities</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/capabilities/${o.slug}`} className="group flex items-center justify-between gap-3 text-[15px] text-heading hover:text-accent">
                    <span>{o.name}</span>
                    <Arrow className="shrink-0 text-muted group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>

      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-[28px] md:text-[34px]">What we do inside this capability</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {cap.howWeHelp.map((h, i) => (
              <article key={h.title} className="flex gap-5 border-t border-line pt-6">
                <span className="font-serif text-[15px] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[21px]">{h.title}</h3>
                  <p className="mt-3 text-[16px] text-body">{h.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-x py-16 md:py-20">
          <h2 className="text-[28px] md:text-[34px]">Research behind this work</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
            {related.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </section>
      ) : null}

      <CTABand
        eyebrow="Next step"
        title={`Where would ${cap.name.toLowerCase()} move the needle for you?`}
        text="Bring a live decision. We will bring the pattern from comparable organisations — including the failures."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "All capabilities", href: "/capabilities" }}
        img={cap.img}
      />
    </>
  );
}
