import Link from "next/link";
import { insights } from "@/content/insights";
import { industries } from "@/content/industries";
import { capabilities } from "@/content/capabilities";
import { people, VALUES } from "@/content/people";
import { HOME_STATS, SITE } from "@/content/site";
import { Arrow, ArrowLink, CTABand, InsightCard, PersonCard, SectionHeading, StatRow } from "@/components/Cards";
import Subscribe from "@/components/Subscribe";

const CASES = [
  {
    client: "European specialty chemicals producer",
    img: "/img/case-plant.jpg",
    metric: "+4.6 pts",
    metricLabel: "first-pass yield",
    text: "Trajectory models put the best historical run in front of every operator shift, early enough to intervene. Nine months from first pilot to group standard.",
    tags: ["Advanced industries", "Operations"],
  },
  {
    client: "National grid operator",
    img: "/img/case-grid.jpg",
    metric: "€41m",
    metricLabel: "annual avoided curtailment",
    text: "Network data products and forecasting models moved constraint decisions from weekly planning to day-ahead, with a published quality score on every input.",
    tags: ["Energy & materials", "Data"],
  },
  {
    client: "Pan-European insurer",
    img: "/img/case-cycling.jpg",
    metric: "-38%",
    metricLabel: "claims cycle time",
    text: "An agentic claims triage with bounded action space and a human escalation path, backed by an evidence trail that satisfied the supervisor on first review.",
    tags: ["Financial services", "Responsible AI"],
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Quantify",
    text: "We anchor every opportunity to a line in the P&L and write down the baseline before anyone builds anything.",
  },
  {
    step: "02",
    title: "Prove",
    text: "Ninety-day evidence gates: production usage against the agreed baseline, not a slide deck at the end of a programme.",
  },
  {
    step: "03",
    title: "Industrialise",
    text: "The boring middle — identity, monitoring, drift, rollback — is budgeted as a first-class workstream, not overhead.",
  },
  {
    step: "04",
    title: "Hand over",
    text: "A named business owner, a documented playbook, and a team that can run it without us. That is the finish line.",
  },
];

export default function HomePage() {
  const featured = insights[0];
  const secondary = insights.slice(1, 4);
  const rest = insights.slice(4, 7);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-band text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/hero.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-band via-band/90 to-band/45" />
        <div className="container-x grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-light">Featured insight</p>
            <h1 className="mt-5 text-[36px] leading-[1.08] text-white md:text-[56px]">{featured.title}</h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/80">{featured.excerpt}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={`/insights/${featured.slug}`} className="btn btn-light">
                Read the article
                <Arrow />
              </Link>
              <Link href="/capabilities" className="btn btn-ghost-light">
                What we do
              </Link>
            </div>
            <p className="mt-8 text-[13px] text-white/55">
              {SITE.tagline} · {SITE.colleagues} colleagues · {SITE.officesCount} offices · since {SITE.founded}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border-t border-white/25 pt-6">
              <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">In this quarter&rsquo;s edition</h2>
              <ul className="mt-5 divide-y divide-white/15">
                {secondary.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/insights/${i.slug}`} className="group flex items-start gap-4 py-4">
                      <span className="mt-1 text-[13px] text-accent">{i.category}</span>
                      <span className="font-serif text-[17px] leading-snug text-white group-hover:underline">{i.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ArrowLink href="/insights" light className="mt-6">
                All insights
              </ArrowLink>
            </div>
          </div>
        </div>

        <div className="container-x pb-14">
          <StatRow stats={HOME_STATS} light />
        </div>
      </section>

      {/* What we do */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Advice that ends in production, not in a deck"
          intro="Three ways in: sector expertise, the capabilities that build AI into the operating model, and the technology practice that keeps it running."
        />
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            { href: "/industries", img: "/img/tile-industries.jpg", label: "Industries", text: "Nine sectors, from advanced industries to public services, each with its own economics and constraints." },
            { href: "/capabilities", img: "/img/tile-capabilities.jpg", label: "Capabilities", text: "Strategy, data, agents, governance, security, talent — assembled per problem rather than sold as packages." },
            { href: "/capabilities/data-and-platform-engineering", img: "/img/tile-tech.jpg", label: "Tech & AI", text: "Decision-led data products, platform engineering, and the delivery discipline that makes them durable." },
          ].map((tile) => (
            <Link key={tile.label} href={tile.href} className="group block">
              <div className="card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tile.img} alt="" loading="lazy" />
              </div>
              <h3 className="mt-5 text-[22px]">{tile.label}</h3>
              <p className="mt-3 text-[15px] text-body">{tile.text}</p>
              <span className="arrow-link mt-5">
                <span>Explore</span>
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest thinking */}
      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="Latest thinking"
            title="Research our clients act on"
            href="/insights"
            linkLabel="All insights"
            intro="Our published work is written by the same people who deliver the programmes. No ghostwritten thought leadership."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
            {secondary.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          eyebrow="Sectors"
          title="Deep knowledge, sector by sector"
          href="/industries"
          linkLabel="All industries"
        />
        <ul className="mt-10 grid grid-cols-1 border-t border-line-strong sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <li key={ind.slug} className="border-b border-line-strong transition-colors hover:bg-raised/50">
              <Link href={`/industries/${ind.slug}`} className="group flex items-center justify-between gap-6 py-5">
                <span className="font-serif text-[20px] text-heading group-hover:text-accent">{ind.name}</span>
                <Arrow className="shrink-0 text-body transition-colors group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Approach */}
      <section className="bg-band text-white">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="How we work"
            title="Four moves, repeated until the capability is yours"
            light
          />
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a) => (
              <div key={a.step} className="border-t border-white/25 pt-6">
                <p className="font-serif text-[15px] text-accent">{a.step}</p>
                <h3 className="mt-3 text-[21px] text-white">{a.title}</h3>
                <p className="mt-3 text-[15px] text-white/75">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Client impact" title="Where AI changed a number someone owns" />
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {CASES.map((c) => (
            <article key={c.client} className="group flex h-full flex-col">
              <div className="card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" loading="lazy" />
              </div>
              <p className="mt-5 font-serif text-[34px] leading-none text-accent">{c.metric}</p>
              <p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-muted">{c.metricLabel}</p>
              <h3 className="mt-4 text-[19px]">{c.client}</h3>
              <p className="mt-3 text-[15px] text-body">{c.text}</p>
              <p className="mt-auto pt-4 text-[13px] text-muted">{c.tags.join(" · ")}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-[13px] text-muted">
          Illustrative engagements. Figures shown are representative examples used for demonstration purposes.
        </p>
      </section>

      {/* Capabilities list */}
      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="Build it, assure it, or hand it over"
            href="/capabilities"
            linkLabel="All capabilities"
          />
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.slug} className="flex gap-5 border-t border-line pt-6">
                <div className="card-media !aspect-square w-24 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-[19px]">
                    <Link href={`/capabilities/${c.slug}`} className="headline-link">
                      {c.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-[15px] text-body">{c.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values + people */}
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">Our values</p>
            <h2 className="mt-4 text-[32px] md:text-[40px]">Four commitments we can be held to</h2>
            <dl className="mt-9 space-y-7">
              {VALUES.map((v) => (
                <div key={v.title} className="border-t border-line pt-5">
                  <dt className="font-serif text-[19px] text-heading">{v.title}</dt>
                  <dd className="mt-2 text-[15px] text-body">{v.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Our people" title="Partners you will actually work with" href="/our-people" linkLabel="Meet our people" />
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {people.slice(0, 4).map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative isolate overflow-hidden bg-band text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/band-podcast.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-band/75" />
        <div className="container-x grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow eyebrow-light">The McAi Quarterly</p>
            <h2 className="mt-4 text-[30px] text-white md:text-[38px]">Four issues a year. Every claim sourced.</h2>
            <p className="mt-4 max-w-lg text-[16px] text-white/75">
              Where AI is actually creating value, what failed and why, and the operating-model decisions behind both.
            </p>
          </div>
          <div className="flex items-center">
            <Subscribe />
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="card-media !aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/band-careers.jpg" alt="" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow text-accent">Careers</p>
            <h2 className="mt-4 text-[32px] md:text-[40px]">Build the operating models everyone else will copy</h2>
            <p className="mt-5 text-[17px] text-body">
              We hire people who prefer a measured baseline to a bold claim. Consultants, engineers, designers, and
              researchers — in {SITE.officesCount} offices and remotely across the EU.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/careers#roles" className="btn btn-primary">
                See open roles
                <Arrow />
              </Link>
              <Link href="/about" className="btn btn-outline">
                About McAi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining insights */}
      {rest.length > 0 ? (
        <section className="border-t border-line-soft">
          <div className="container-x py-16 md:py-20">
            <SectionHeading eyebrow="Also published" title="More from our research desk" href="/insights" linkLabel="All insights" />
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {rest.map((i) => (
                <InsightCard key={i.slug} insight={i} compact />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTABand
        eyebrow="Start a conversation"
        title="Tell us which number you want to move"
        text="We will tell you honestly whether AI is the right tool for it, what the baseline would be, and what a ninety-day proof looks like."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Read our insights", href: "/insights" }}
        img="/img/contact-hero.jpg"
      />
    </>
  );
}
