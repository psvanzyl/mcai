"use client";

import { useMemo, useState } from "react";
import { InsightCard } from "@/components/Cards";

export type InsightListItem = {
  slug: string;
  title: string;
  category: string;
  themes: string[];
  excerpt: string;
  date: string;
  readMinutes: number;
  img: string;
};

export default function InsightsBrowser({ items, themes, initialTheme }: { items: InsightListItem[]; themes: string[]; initialTheme?: string }) {
  const [theme, setTheme] = useState<string>(initialTheme && themes.includes(initialTheme) ? initialTheme : "All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = items.filter((i) => {
      const matchesTheme = theme === "All" || i.themes.includes(theme);
      const matchesTerm =
        term.length === 0 ||
        i.title.toLowerCase().includes(term) ||
        i.excerpt.toLowerCase().includes(term) ||
        i.themes.join(" ").toLowerCase().includes(term);
      return matchesTheme && matchesTerm;
    });
    return list.sort((a, b) => (sort === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
  }, [items, theme, q, sort]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-y border-line-soft py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by theme">
          {["All", ...themes].map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={theme === t}
              onClick={() => setTheme(t)}
              className={`border px-4 py-2 text-[14px] transition ${
                theme === t ? "border-heading bg-band text-white" : "border-line text-heading hover:border-heading"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="insight-search">
            Search insights
          </label>
          <input
            id="insight-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search insights"
            className="w-full border border-line px-4 py-2.5 text-[15px] outline-none focus:border-accent sm:w-64"
          />
          <label className="sr-only" htmlFor="insight-sort">
            Sort order
          </label>
          <select
            id="insight-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
            className="border border-line px-3 py-2.5 text-[14px] outline-none focus:border-accent"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-[14px] text-muted" role="status" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "result" : "results"}
        {theme !== "All" ? ` in ${theme}` : ""}
        {q ? ` for “${q}”` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 border border-line bg-surface p-10 text-center">
          <p className="font-serif text-[22px] text-heading">Nothing matches that filter yet.</p>
          <button
            onClick={() => {
              setTheme("All");
              setQ("");
            }}
            className="btn btn-outline mt-6"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i) => (
            <InsightCard key={i.slug} insight={i} />
          ))}
        </div>
      )}
    </div>
  );
}
