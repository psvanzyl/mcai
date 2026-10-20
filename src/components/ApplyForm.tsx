"use client";

import { useState } from "react";

export default function ApplyForm({ roles }: { roles: string[] }) {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", role: roles[0] ?? "", link: "", note: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const field = "mt-2 w-full border border-line bg-panel px-4 py-3 text-[15px] outline-none focus:border-accent";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(values.email.trim())) next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-panel p-8">
        <p className="eyebrow text-accent">Application recorded</p>
        <h3 className="mt-3 text-[24px]">Thanks, {values.name.split(" ")[0]}.</h3>
        <p className="mt-3 text-[16px] text-body">
          This demonstration site does not transmit data, so nothing has been sent. In a live deployment your application
          for “{values.role}” would reach our recruiting team within one business day.
        </p>
        <button onClick={() => setSent(false)} className="btn btn-outline mt-6">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid grid-cols-1 gap-6 border border-line bg-panel p-8 sm:grid-cols-2">
      <div>
        <label htmlFor="a-name" className="text-[14px] font-medium text-heading">
          Name *
        </label>
        <input id="a-name" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} className={field} />
        {errors.name ? <p className="mt-2 text-[13px] text-[#c0392b]">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="a-email" className="text-[14px] font-medium text-heading">
          Email *
        </label>
        <input id="a-email" type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} className={field} />
        {errors.email ? <p className="mt-2 text-[13px] text-[#c0392b]">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="a-role" className="text-[14px] font-medium text-heading">
          Role
        </label>
        <select id="a-role" value={values.role} onChange={(e) => setValues({ ...values, role: e.target.value })} className={field}>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
          <option value="Speculative application">Speculative application</option>
        </select>
      </div>
      <div>
        <label htmlFor="a-link" className="text-[14px] font-medium text-heading">
          LinkedIn or portfolio
        </label>
        <input id="a-link" value={values.link} onChange={(e) => setValues({ ...values, link: e.target.value })} className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="a-note" className="text-[14px] font-medium text-heading">
          Anything we should know?
        </label>
        <textarea id="a-note" rows={4} value={values.note} onChange={(e) => setValues({ ...values, note: e.target.value })} className={field} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary">
          Submit application
        </button>
      </div>
    </form>
  );
}
