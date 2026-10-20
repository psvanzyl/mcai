"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV, SITE } from "@/content/site";
import { insights } from "@/content/insights";
import { industries } from "@/content/industries";
import { capabilities } from "@/content/capabilities";
import { people } from "@/content/people";
import { jobs } from "@/content/people";

type Hit = { title: string; href: string; kind: string; sub?: string };

const SEARCH_INDEX: Hit[] = [
  ...insights.map((i) => ({ title: i.title, href: `/insights/${i.slug}`, kind: "Insight", sub: i.themes.join(", ") })),
  ...industries.map((i) => ({ title: i.name, href: `/industries/${i.slug}`, kind: "Industry", sub: i.tagline })),
  ...capabilities.map((c) => ({ title: c.name, href: `/capabilities/${c.slug}`, kind: "Capability", sub: c.tagline })),
  ...people.map((p) => ({ title: p.name, href: "/our-people", kind: "Person", sub: `${p.role} · ${p.location}` })),
  ...jobs.map((j) => ({ title: j.title, href: "/careers#roles", kind: "Role", sub: `${j.practice} · ${j.location}` })),
  { title: "Contact McAi", href: "/contact", kind: "Page", sub: "Talk to a partner" },
  { title: "About McAi", href: "/about", kind: "Page", sub: "Purpose, offices, leadership" },
];

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4.5 6 8.5l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return SEARCH_INDEX.slice(0, 6);
    return SEARCH_INDEX.filter(
      (h) => h.title.toLowerCase().includes(term) || (h.sub ?? "").toLowerCase().includes(term) || h.kind.toLowerCase().includes(term),
    ).slice(0, 12);
  }, [q]);

  return (
    <div className="fixed inset-0 z-50 bg-scrim" role="dialog" aria-modal="true" aria-label="Search McAi">
      <button className="absolute inset-0 h-full w-full cursor-default" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto mt-0 w-full bg-panel shadow-2xl md:mt-24 md:max-w-3xl">
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span className="text-muted">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search insights, industries, capabilities, people, roles"
            aria-label="Search"
            className="w-full border-0 text-[17px] outline-none placeholder:text-muted"
          />
          <button onClick={onClose} className="text-[13px] uppercase tracking-widest text-muted hover:text-heading">
            Esc
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <li className="px-5 py-8 text-[15px] text-muted">
              No results for “{q}”. Try “agents”, “energy”, “governance”, or “data”.
            </li>
          ) : (
            results.map((h) => (
              <li key={h.kind + h.href + h.title} className="border-b border-line-soft last:border-0">
                <Link href={h.href} onClick={onClose} className="flex items-start gap-4 px-5 py-4 hover:bg-surface">
                  <span className="eyebrow mt-1 w-20 shrink-0 text-accent">{h.kind}</span>
                  <span>
                    <span className="block font-serif text-[17px] font-semibold text-heading">{h.title}</span>
                    {h.sub ? <span className="mt-0.5 block text-[13px] text-muted">{h.sub}</span> : null}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = NAV.find((n) => n.label === open);

  return (
    <>
      <div className="hidden bg-band text-white md:block">
        <div className="container-x flex h-10 items-center justify-between text-[13px]">
          <p className="text-white/70">
            {SITE.tagline} · {SITE.officesCount} offices · {SITE.colleagues} colleagues
          </p>
          <div className="flex items-center gap-6">
            <Link href="/insights" className="text-white/70 hover:text-white">
              Insights
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-white">
              Contact
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Sign in
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b border-line-soft bg-panel transition-shadow ${scrolled ? "shadow-[0_6px_18px_rgba(0,0,0,0.35)]" : ""}`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-baseline gap-2" aria-label="McAi home">
            <span className="font-serif text-[27px] font-bold tracking-tight text-heading">
              Mc<span className="text-accent">Ai</span>
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted lg:inline">&amp; Company</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const isOpen = open === item.label;
              const hasMenu = !!item.columns?.length;
              return (
                <div key={item.label} className="relative" onMouseEnter={() => setOpen(hasMenu ? item.label : null)}>
                  <Link
                    href={item.href}
                    aria-expanded={hasMenu ? isOpen : undefined}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[15px] font-medium transition ${
                      isOpen ? "text-accent" : "text-heading hover:text-accent"
                    }`}
                  >
                    {item.label}
                    {hasMenu ? <Chevron open={isOpen} /> : null}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="flex h-10 w-10 items-center justify-center text-heading transition hover:text-accent"
            >
              <SearchIcon />
            </button>
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link href="/contact" className="btn btn-outline hidden !py-2.5 !text-[14px] sm:inline-flex">
              Get in touch
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className={`h-[2px] w-6 bg-heading transition ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-6 bg-heading transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-6 bg-heading transition ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        {active?.columns?.length ? (
          <div className="mega-panel absolute inset-x-0 top-full hidden border-t border-line-soft bg-panel lg:block">
            <div className="container-x grid grid-cols-12 gap-10 py-10">
              <div className="col-span-3">
                {active.columns.map((col) => (
                  <div key={col.title} className="mb-8 last:mb-0">
                    <h2 className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{col.title}</h2>
                    <ul className="mt-4 space-y-2.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link href={l.href} className="text-[15px] text-heading hover:text-accent hover:underline">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-span-4 col-start-5">
                <p className="text-[15px] leading-relaxed text-body">
                  Every sector we serve gets the same treatment: quantified opportunity, decision-led data, and an operating model
                  that keeps working after we leave.
                </p>
                <Link href={active.href} className="arrow-link mt-6">
                  <span>See all {active.label.toLowerCase()}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
              {active.feature ? (
                <Link href={active.feature.href} className="group col-span-4">
                  <div className="card-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={active.feature.img} alt="" loading="lazy" />
                  </div>
                  <p className="eyebrow mt-4 text-accent">{active.feature.label}</p>
                  <p className="mt-2 text-[15px] text-body">{active.feature.text}</p>
                </Link>
              ) : null}
            </div>
          </div>
        ) : null}

        {/* Mobile drawer */}
        {mobileOpen ? (
          <div className="border-t border-line-soft bg-panel lg:hidden">
            <div className="container-x max-h-[70vh] overflow-y-auto py-4">
              {NAV.map((item) => {
                const isOpen = mobileSection === item.label;
                return (
                  <div key={item.label} className="border-b border-line-soft last:border-0">
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className="py-4 text-[17px] font-medium text-heading">
                        {item.label}
                      </Link>
                      {item.columns?.length ? (
                        <button
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={isOpen}
                          onClick={() => setMobileSection(isOpen ? null : item.label)}
                          className="p-3 text-heading"
                        >
                          <Chevron open={isOpen} />
                        </button>
                      ) : null}
                    </div>
                    {isOpen && item.columns ? (
                      <div className="pb-4">
                        {item.columns.map((col) => (
                          <ul key={col.title} className="mb-3 space-y-2">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link href={l.href} className="block py-1 text-[15px] text-body">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <div className="flex flex-wrap items-center justify-between gap-3 py-5">
                <ThemeToggle />
                <div className="flex gap-3">
                  <Link href="/contact" className="btn btn-primary">
                    Get in touch
                  </Link>
                  <Link href="/careers" className="btn btn-outline">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {searchOpen ? <SearchOverlay onClose={() => setSearchOpen(false)} /> : null}
    </>
  );
}
