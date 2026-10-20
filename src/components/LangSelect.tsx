"use client";

import { useState } from "react";
import { SITE } from "@/content/site";

export default function LangSelect() {
  const [lang, setLang] = useState(SITE.languages[0]);

  return (
    <label className="flex items-center gap-3 text-[13px] text-white/70">
      <span className="sr-only">Choose a language</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="cursor-pointer border border-white/25 bg-transparent px-3 py-2 text-white/85 outline-none"
      >
        {SITE.languages.map((l) => (
          <option key={l} value={l} className="text-heading">
            {l}
          </option>
        ))}
      </select>
    </label>
  );
}
