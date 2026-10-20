"use client";

import { useState } from "react";
import { OFFICES } from "@/content/site";

const TOPICS = [
  "AI strategy & transformation",
  "Data & platform engineering",
  "Agentic automation & operations",
  "Responsible AI & governance",
  "Something else",
];

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", office: OFFICES[0].city, topic: TOPICS[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function set(key: string, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(values.email.trim())) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 20) next.message = "A little more detail helps us route your enquiry (20+ characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface p-8">
        <p className="eyebrow text-accent">Enquiry received</p>
        <h2 className="mt-3 text-[26px]">Thank you, {values.name.split(" ")[0]}.</h2>
        <p className="mt-3 text-[16px] text-body">
          This demonstration site does not send email, so nothing has left your browser. In a live deployment, your enquiry
          would route to our {values.office} office with the subject line “{values.topic}”.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setValues({ name: "", email: "", company: "", office: OFFICES[0].city, topic: TOPICS[0], message: "" });
          }}
          className="btn btn-outline mt-7"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = "mt-2 w-full border border-line bg-panel px-4 py-3 text-[15px] outline-none focus:border-accent";

  return (
    <form onSubmit={submit} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="c-name" className="text-[14px] font-medium text-heading">
          Name *
        </label>
        <input id="c-name" value={values.name} onChange={(e) => set("name", e.target.value)} className={field} aria-invalid={!!errors.name} />
        {errors.name ? <p className="mt-2 text-[13px] text-[#c0392b]">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="c-email" className="text-[14px] font-medium text-heading">
          Work email *
        </label>
        <input id="c-email" type="email" value={values.email} onChange={(e) => set("email", e.target.value)} className={field} aria-invalid={!!errors.email} />
        {errors.email ? <p className="mt-2 text-[13px] text-[#c0392b]">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="c-company" className="text-[14px] font-medium text-heading">
          Organisation
        </label>
        <input id="c-company" value={values.company} onChange={(e) => set("company", e.target.value)} className={field} />
      </div>
      <div>
        <label htmlFor="c-office" className="text-[14px] font-medium text-heading">
          Nearest office
        </label>
        <select id="c-office" value={values.office} onChange={(e) => set("office", e.target.value)} className={field}>
          {OFFICES.map((o) => (
            <option key={o.city} value={o.city}>
              {o.city}, {o.country}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-topic" className="text-[14px] font-medium text-heading">
          What can we help with?
        </label>
        <select id="c-topic" value={values.topic} onChange={(e) => set("topic", e.target.value)} className={field}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-message" className="text-[14px] font-medium text-heading">
          Your enquiry *
        </label>
        <textarea id="c-message" rows={6} value={values.message} onChange={(e) => set("message", e.target.value)} className={field} aria-invalid={!!errors.message} />
        {errors.message ? <p className="mt-2 text-[13px] text-[#c0392b]">{errors.message}</p> : null}
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary">
          Send enquiry
        </button>
        <p className="text-[13px] text-muted">We reply within two business days. This demo does not transmit data.</p>
      </div>
    </form>
  );
}
