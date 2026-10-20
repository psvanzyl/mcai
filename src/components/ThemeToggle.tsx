"use client";

import { useEffect, useState, type ReactNode } from "react";
import { THEME_KEY } from "@/lib/theme";

type Mode = "light" | "dark" | "system";

function Sun() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </svg>
  );
}

function Moon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function Monitor() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState<Mode>("dark");

  const apply = (m: Mode) => {
    const dark = m === "dark" || (m === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const r = document.documentElement;
    r.classList.toggle("light", !dark);
    r.classList.toggle("dark", dark);
    r.style.colorScheme = dark ? "dark" : "light";
  };

  // Sync from storage after mount (SSR and the first client render must agree).
  useEffect(() => {
    let stored: Mode = "dark";
    try {
      const v = localStorage.getItem(THEME_KEY);
      if (v === "light" || v === "dark" || v === "system") stored = v;
    } catch {
      /* private mode */
    }
    setMode(stored);
    apply(stored);
  }, []);

  // Follow the OS while in system mode, with focus/visibility re-checks as insurance
  // (a media-query change event can be missed by some engines).
  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => apply("system");
    mq.addEventListener("change", sync);
    window.addEventListener("focus", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("focus", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [mode]);

  const pick = (m: Mode) => {
    setMode(m);
    apply(m);
    try {
      localStorage.setItem(THEME_KEY, m);
    } catch {
      /* private mode */
    }
  };

  const options: { m: Mode; label: string; icon: ReactNode }[] = [
    { m: "dark", label: "Dark theme", icon: <Moon /> },
    { m: "light", label: "Light theme", icon: <Sun /> },
    { m: "system", label: "Match system theme", icon: <Monitor /> },
  ];

  return (
    <div
      className={`inline-flex items-center gap-0.5 border border-line p-0.5 ${className}`}
      role="group"
      aria-label="Colour theme"
    >
      {options.map((o) => (
        <button
          key={o.m}
          type="button"
          onClick={() => pick(o.m)}
          aria-pressed={mode === o.m}
          aria-label={o.label}
          title={o.label}
          data-testid={`theme-${o.m}`}
          className={`grid h-7 w-7 place-items-center transition-colors ${
            mode === o.m ? "bg-accent text-accent-fg" : "text-muted hover:bg-raised hover:text-heading"
          }`}
        >
          {o.icon}
        </button>
      ))}
    </div>
  );
}
