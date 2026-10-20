"use client";

import { useMemo, useState } from "react";

export type JobItem = {
  title: string;
  practice: string;
  location: string;
  type: string;
  level: string;
  summary: string;
};

export default function CareersBrowser({ jobs }: { jobs: JobItem[] }) {
  const [practice, setPractice] = useState("All");
  const [location, setLocation] = useState("All");
  const [q, setQ] = useState("");

  const practices = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j) => j.practice))).sort()], [jobs]);
  const locations = useMemo(() => ["All", ...Array.from(new Set(jobs.map((j) => j.location))).sort()], [jobs]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return jobs.filter(
      (j) =>
        (practice === "All" || j.practice === practice) &&
        (location === "All" || j.location === location) &&
        (term.length === 0 || `${j.title} ${j.summary} ${j.practice} ${j.location}`.toLowerCase().includes(term)),
    );
  }, [jobs, practice, location, q]);

  const select = "border border-line bg-panel px-3 py-2.5 text-[14px] outline-none focus:border-accent";

  return (
    <div id="roles" className="scroll-mt-24">
      <div className="flex flex-col gap-4 border-y border-line-soft py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-[14px] text-muted" htmlFor="job-practice">
            Practice
          </label>
          <select id="job-practice" value={practice} onChange={(e) => setPractice(e.target.value)} className={select}>
            {practices.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <label className="text-[14px] text-muted" htmlFor="job-location">
            Location
          </label>
          <select id="job-location" value={location} onChange={(e) => setLocation(e.target.value)} className={select}>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="sr-only" htmlFor="job-search">
            Search roles
          </label>
          <input
            id="job-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search roles"
            className="w-full border border-line px-4 py-2.5 text-[15px] outline-none focus:border-accent lg:w-72"
          />
        </div>
      </div>

      <p className="mt-6 text-[14px] text-muted" role="status" aria-live="polite">
        {filtered.length} open {filtered.length === 1 ? "role" : "roles"}
      </p>

      <ul className="mt-6 divide-y divide-line-soft border-y border-line-soft">
        {filtered.map((j) => (
          <li key={j.title + j.location} className="group">
            <div className="flex flex-col gap-3 py-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-[21px]">{j.title}</h3>
                <p className="mt-2 text-[15px] text-body">{j.summary}</p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-muted">
                  <span>{j.practice}</span>
                  <span>{j.location}</span>
                  <span>{j.level}</span>
                  <span>{j.type}</span>
                </p>
              </div>
              <a href="#apply" className="btn btn-outline shrink-0 self-start">
                Apply
              </a>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <div className="mt-8 border border-line bg-surface p-10 text-center">
          <p className="font-serif text-[22px] text-heading">No roles match those filters.</p>
          <button
            onClick={() => {
              setPractice("All");
              setLocation("All");
              setQ("");
            }}
            className="btn btn-outline mt-6"
          >
            Clear filters
          </button>
        </div>
      ) : null}
    </div>
  );
}
