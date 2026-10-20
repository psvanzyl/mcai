"use client";

import { useState } from "react";

export default function Subscribe({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setState("done");
    setMessage(`Thanks — ${value} is on the list for The McAi Quarterly.`);
    setEmail("");
  }

  const dark = variant === "dark";

  return (
    <form onSubmit={submit} noValidate className="w-full max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`sub-${variant}`}>
          Email address
        </label>
        <input
          id={`sub-${variant}`}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "idle") setState("idle");
          }}
          placeholder="you@company.com"
          aria-invalid={state === "error"}
          className={`w-full border px-4 py-3 text-[15px] outline-none ${
            dark
              ? "border-white/30 bg-white/5 text-white placeholder:text-white/50 focus:border-accent"
              : "border-line bg-panel text-heading placeholder:text-muted focus:border-accent"
          } ${state === "error" ? "!border-[#ff8a8a]" : ""}`}
        />
        <button type="submit" className={`btn ${dark ? "btn-light" : "btn-primary"} shrink-0 justify-center`}>
          Subscribe
        </button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={`mt-3 min-h-[20px] text-[13px] ${
          state === "error" ? "text-[#ffb3b3]" : dark ? "text-white/70" : "text-body"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
