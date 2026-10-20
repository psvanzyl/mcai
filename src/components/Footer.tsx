import Link from "next/link";
import { FOOTER_COLUMNS, SITE, SOCIALS } from "@/content/site";
import LangSelect from "./LangSelect";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-band text-white">
      <div className="container-x py-14 md:py-20">
        <div className="flex flex-col gap-10 border-b border-white/15 pb-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="font-serif text-[30px] font-semibold tracking-tight text-white">
              Mc<span className="text-accent">Ai</span>
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">{SITE.description}</p>
          </div>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                rel="noreferrer noopener"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-accent hover:bg-accent hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 md:grid-cols-3 lg:grid-cols-5">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-white">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-white/70 transition hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-white/60">
            <span>
              © {year} {SITE.legalName}. All rights reserved.
            </span>
            <Link href="/about#legal" className="hover:text-white hover:underline">
              Privacy notice
            </Link>
            <Link href="/about#legal" className="hover:text-white hover:underline">
              Cookie policy
            </Link>
            <Link href="/about#legal" className="hover:text-white hover:underline">
              Terms of use
            </Link>
          </div>
          <LangSelect />
        </div>
        <p className="mt-8 text-[12px] leading-relaxed text-white/45">
          McAi is a demonstration website built for illustrative purposes. Company names, client outcomes, statistics,
          and people shown here are fictional, and photography is sourced from the free Pexels stock library. Nothing on
          this site is affiliated with, endorsed by, or derived from any other firm.
        </p>
      </div>
    </footer>
  );
}
