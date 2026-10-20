import Link from "next/link";
import type { Practice } from "@/content/industries";
import type { Person } from "@/content/people";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowLink({
  href,
  children,
  light = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`arrow-link ${light ? "text-white" : ""} ${className}`}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  href,
  linkLabel,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  href?: string;
  linkLabel?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${align === "center" ? "text-center md:text-left" : ""}`}>
      <div className="max-w-3xl">
        {eyebrow ? <p className={`eyebrow mb-4 ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p> : null}
        <h2 className={`text-3xl md:text-[40px] ${light ? "text-white" : ""}`}>{title}</h2>
        {intro ? <p className={`mt-4 text-[17px] ${light ? "text-white/75" : "text-body"}`}>{intro}</p> : null}
      </div>
      {href && linkLabel ? (
        <div className="shrink-0">
          <ArrowLink href={href} light={light}>
            {linkLabel}
          </ArrowLink>
        </div>
      ) : null}
    </div>
  );
}

export type InsightCardData = {
  slug: string;
  title: string;
  category: string;
  themes: string[];
  excerpt: string;
  date: string;
  readMinutes: number;
  img: string;
};

export function InsightCard({ insight, compact = false }: { insight: InsightCardData; compact?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/insights/${insight.slug}`} className="card-media block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={insight.img} alt="" loading="lazy" width={1600} height={900} />
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <p className="eyebrow text-accent">{insight.category}</p>
        <h3 className={`mt-3 ${compact ? "text-[19px]" : "text-[22px]"}`}>
          <Link href={`/insights/${insight.slug}`} className="headline-link">
            {insight.title}
          </Link>
        </h3>
        {!compact ? <p className="mt-3 text-[15px] text-body">{insight.excerpt}</p> : null}
        <p className="mt-auto pt-4 text-[13px] text-muted">
          {new Date(insight.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {insight.readMinutes} min read
        </p>
      </div>
    </article>
  );
}

export function PracticeCard({
  practice,
  base,
  eyebrow,
}: {
  practice: Practice;
  base: "industries" | "capabilities";
  eyebrow?: string;
}) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/${base}/${practice.slug}`} className="card-media block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={practice.img} alt="" loading="lazy" width={1600} height={900} />
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        {eyebrow ? <p className="eyebrow text-accent">{eyebrow}</p> : null}
        <h3 className="mt-2 text-[21px]">
          <Link href={`/${base}/${practice.slug}`} className="headline-link">
            {practice.name}
          </Link>
        </h3>
        <p className="mt-3 text-[15px] text-body">{practice.tagline}</p>
        <p className="mt-auto pt-4">
          <ArrowLink href={`/${base}/${practice.slug}`}>Learn more</ArrowLink>
        </p>
      </div>
    </article>
  );
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="card-media !aspect-[4/5]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={person.img} alt={person.name} loading="lazy" width={1200} height={1500} />
      </div>
      <h3 className="mt-5 text-[20px]">{person.name}</h3>
      <p className="mt-1 text-[14px] font-medium text-heading">{person.role}</p>
      <p className="text-[14px] text-muted">
        {person.location} · {person.focus}
      </p>
      <p className="mt-3 text-[14px] text-body">{person.bio}</p>
    </article>
  );
}

export function StatRow({ stats, light = false }: { stats: { value: string; label: string }[]; light?: boolean }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 ${light ? "text-white" : ""}`}>
      {stats.map((s) => (
        <div key={s.label} className={light ? "border-t border-white/25 pt-5" : "border-t border-line pt-5"}>
          <dt className={`font-serif text-[34px] leading-none ${light ? "text-white" : "text-heading"}`}>{s.value}</dt>
          <dd className={`mt-2 text-[14px] leading-snug ${light ? "text-white/70" : "text-body"}`}>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-heading hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-heading">{item.label}</span>
            )}
            {i < items.length - 1 ? <span aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  img,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  img?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <header className="border-b border-line-soft bg-surface">
      <div className="container-x py-12 md:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        {eyebrow ? <p className="eyebrow mt-6 text-accent">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl text-[34px] leading-[1.1] md:text-[54px]">{title}</h1>
        {intro ? <p className="mt-6 max-w-3xl text-[18px] text-body">{intro}</p> : null}
      </div>
      {img ? (
        <div className="container-x pb-12 md:pb-16">
          <div className="card-media !aspect-[21/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt="" width={1600} height={686} />
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function CTABand({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  img,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  img?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-band text-white">
      {img ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 -z-10 bg-band/80" />
        </>
      ) : null}
      <div className="container-x py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow eyebrow-light">{eyebrow}</p> : null}
          <h2 className="mt-4 text-3xl text-white md:text-[42px]">{title}</h2>
          {text ? <p className="mt-5 text-[17px] text-white/80">{text}</p> : null}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={primary.href} className="btn btn-light">
              {primary.label}
              <Arrow />
            </Link>
            {secondary ? (
              <Link href={secondary.href} className="btn btn-ghost-light">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stat({ value, label, light = false }: { value: string; label: string; light?: boolean }) {
  return (
    <div className={light ? "border-t border-white/25 pt-5" : "border-t border-line pt-5"}>
      <p className={`font-serif text-[32px] leading-none ${light ? "text-white" : "text-heading"}`}>{value}</p>
      <p className={`mt-2 text-[14px] ${light ? "text-white/70" : "text-body"}`}>{label}</p>
    </div>
  );
}
