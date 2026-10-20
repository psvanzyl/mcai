import type { Metadata } from "next";
import Link from "next/link";
import { OFFICES, SITE } from "@/content/site";
import { people, VALUES } from "@/content/people";
import { CTABand, PageHero, PersonCard, StatRow } from "@/components/Cards";

export const metadata: Metadata = {
  title: "About us",
  description:
    "McAi is a global AI consulting firm founded in 2019: our purpose, our history, our offices in 24 cities, our leadership, and the legal notices for this site.",
};

const TIMELINE = [
  { year: "2019", text: "Founded in Amsterdam by eleven partners from industry and academia, with a single commitment: every engagement would start with a written baseline." },
  { year: "2021", text: "First large-scale data platform programme delivered end to end, and the decision-led data product method becomes firm standard." },
  { year: "2023", text: "Agentic operations practice launched after eighteen months of internal deployment on our own delivery workflows." },
  { year: "2024", text: "Responsible AI & governance practice established ahead of the EU AI Act's first obligations, with supervisory-facing evidence tooling." },
  { year: "2026", text: "3,400 colleagues, 24 offices, and more than 600 AI use cases running in client production." },
];

const PURPOSE = [
  "We exist because the gap between what AI can do and what organisations actually run is a management problem, not a modelling problem. Closing that gap is the whole job.",
  "That belief shapes how we work: we quantify before we build, we write the baseline down before anyone gets attached to an outcome, and we hand over decision rights rather than defend them.",
  "We are deliberately sector-deep rather than sector-general. A yield curve, a supervisory regime, and a balancing window are different constraints, and the advice has to respect them.",
];

export default function AboutPage() {
  const regions = Array.from(new Set(OFFICES.map((o) => o.region)));

  return (
    <>
      <PageHero
        eyebrow="About McAi"
        title="A firm built around one measurable promise"
        intro={`${SITE.legalName} has advised clients on AI-driven change since ${SITE.founded}. We are ${SITE.colleagues} colleagues in ${SITE.officesCount} offices, and our promise has not changed: every engagement starts with a number we agree on.`}
        img="/img/about-hero.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent">Our purpose</p>
            <h2 className="mt-4 text-[30px] md:text-[38px]">Management problem, not a modelling problem</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-body">
              {PURPOSE.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="card-media !aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/about-office.jpg" alt="" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="mt-16">
          <StatRow
            stats={[
              { value: String(SITE.founded), label: "founded in Amsterdam" },
              { value: SITE.officesCount.toString(), label: "offices worldwide" },
              { value: SITE.colleagues, label: "colleagues" },
              { value: "600+", label: "AI use cases in client production" },
            ]}
          />
        </div>
      </section>

      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow text-accent">Our history</p>
          <h2 className="mt-4 text-[30px] md:text-[38px]">Seven years, one method</h2>
          <ol className="mt-10 space-y-8 border-l border-line pl-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-serif text-[20px] text-heading">{t.year}</p>
                <p className="mt-2 max-w-3xl text-[16px] text-body">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <p className="eyebrow text-accent">What we believe</p>
        <h2 className="mt-4 text-[30px] md:text-[38px]">Values that survive contact with a deadline</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {VALUES.map((v) => (
            <article key={v.title} className="border-t border-line pt-6">
              <h3 className="text-[21px]">{v.title}</h3>
              <p className="mt-3 text-[16px] text-body">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line-soft bg-surface" id="offices">
        <div className="container-x scroll-mt-24 py-16 md:py-20">
          <p className="eyebrow text-accent">Offices</p>
          <h2 className="mt-4 text-[30px] md:text-[38px]">{SITE.officesCount} offices, {regions.length} regions</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div key={region}>
                <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">{region}</h3>
                <ul className="mt-5 space-y-4">
                  {OFFICES.filter((o) => o.region === region).map((o) => (
                    <li key={o.city} className="border-t border-line pt-3">
                      <p className="font-serif text-[18px] text-heading">
                        {o.city}, {o.country}
                      </p>
                      <p className="mt-1 text-[14px] text-body">{o.address}</p>
                      <p className="text-[14px] text-muted">{o.phone}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">Leadership</p>
            <h2 className="mt-4 text-[30px] md:text-[38px]">Who you will work with</h2>
          </div>
          <Link href="/our-people" className="arrow-link">
            All our people
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {people.slice(0, 4).map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-line-soft" id="alumni">
        <div className="container-x scroll-mt-24 py-14 md:py-16">
          <h2 className="text-[26px] md:text-[30px]">Alumni network</h2>
          <p className="mt-4 max-w-3xl text-[16px] text-body">
            More than 1,800 former colleagues work across industry, academia, and public service. The network meets twice a
            year, shares research, and remains the source of a meaningful share of our referrals. Alumni can request access
            through our contact page.
          </p>
        </div>
      </section>

      <section className="border-t border-line-soft bg-surface" id="legal">
        <div className="container-x scroll-mt-24 py-14 md:py-16">
          <h2 className="text-[26px] md:text-[30px]">Legal notices</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            <div>
              <h3 className="text-[19px]">Privacy notice</h3>
              <p className="mt-3 text-[15px] text-body">
                This demonstration site collects nothing. Forms are validated in the browser and never transmit data to a
                server. No analytics, no advertising identifiers, and no third-party trackers are loaded.
              </p>
            </div>
            <div>
              <h3 className="text-[19px]">Cookie policy</h3>
              <p className="mt-3 text-[15px] text-body">
                We set no cookies. Theme and filter preferences live in page state only and are discarded when you close the tab.
              </p>
            </div>
            <div>
              <h3 className="text-[19px]">Terms of use</h3>
              <p className="mt-3 text-[15px] text-body">
                Content on this site is illustrative. Company names, client outcomes, statistics, and people are fictional and
                provided to demonstrate interface design and content structure.
              </p>
            </div>
            <div>
              <h3 className="text-[19px]">Accessibility & responsible disclosure</h3>
              <p className="mt-3 text-[15px] text-body">
                The site targets WCAG 2.2 AA: semantic landmarks, keyboard-operable navigation, visible focus states, and
                text alternatives for decorative imagery. Security researchers should contact{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
          <p className="mt-10 text-[13px] text-muted">
            {SITE.legalName} is a fictional firm created for this demonstration. Photography is licensed from the free Pexels
            library.
          </p>
        </div>
      </section>

      <CTABand
        eyebrow="Work with us"
        title="Start with a conversation, not a proposal"
        text="We will tell you in the first meeting whether we are the right firm for the problem in front of you."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Careers", href: "/careers" }}
        img="/img/about-office.jpg"
      />
    </>
  );
}
