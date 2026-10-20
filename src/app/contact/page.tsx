import type { Metadata } from "next";
import Link from "next/link";
import { OFFICES, SITE } from "@/content/site";
import ContactForm from "@/components/ContactForm";
import Subscribe from "@/components/Subscribe";
import { PageHero } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact McAi: 24 offices worldwide, client service, vendor enquiries, media requests, and subscriptions to The McAi Quarterly.",
};

const ROUTES = [
  {
    title: "Client service",
    text: "Existing engagements, delivery questions, and escalations. Routed to the engagement partner within four hours.",
    contact: SITE.email,
  },
  {
    title: "New business",
    text: "Tell us the decision you are stuck on. A partner replies within two business days, with a view on whether we can help.",
    contact: SITE.email,
  },
  {
    title: "Vendor & procurement",
    text: "If you supply technology or data services, send a one-page summary. We review quarterly and reply either way.",
    contact: SITE.email,
  },
  {
    title: "Media & research",
    text: "Press enquiries, data requests, and requests to reproduce our research or charts.",
    contact: SITE.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the people who do the work"
        intro="No gatekeeping, no lead-scoring. Tell us what you are trying to move and we will route you to the partner who has done it before."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-x grid grid-cols-1 gap-14 py-16 md:py-20 lg:grid-cols-12" id="clients">
        <div className="scroll-mt-24 lg:col-span-7">
          <h2 className="text-[28px] md:text-[34px]">Send us an enquiry</h2>
          <p className="mt-4 text-[16px] text-body">
            Fields marked with an asterisk are required. This demonstration site validates in the browser and does not
            transmit anything to a server.
          </p>
          <div className="mt-9">
            <ContactForm />
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="border border-line bg-surface p-7">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Direct</h2>
            <dl className="mt-5 space-y-4 text-[15px]">
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="text-heading underline">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Telephone</dt>
                <dd className="text-heading">{SITE.phone}</dd>
              </div>
              <div>
                <dt className="text-muted">Amsterdam (global HQ)</dt>
                <dd className="text-heading">{OFFICES[0].address}</dd>
              </div>
            </dl>
            <p className="mt-6 text-[13px] text-muted">
              Languages: {SITE.languages.join(", ")}. We answer in the language you write in.
            </p>
          </div>

          <nav aria-label="Enquiry routes" className="mt-8 border-t border-line pt-6">
            <h2 className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Enquiry routes</h2>
            <ul className="mt-5 space-y-5">
              {ROUTES.map((r) => (
                <li key={r.title}>
                  <p className="font-serif text-[17px] text-heading">{r.title}</p>
                  <p className="mt-1 text-[14px] text-body">{r.text}</p>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>

      <section className="border-y border-line-soft bg-surface" id="offices">
        <div className="container-x scroll-mt-24 py-16 md:py-20">
          <h2 className="text-[28px] md:text-[34px]">Find your nearest office</h2>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((o) => (
              <li key={o.city} className="border-t border-line pt-4">
                <p className="font-serif text-[18px] text-heading">{o.city}</p>
                <p className="text-[14px] text-muted">
                  {o.country} · {o.phone}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-band text-white" id="newsletter">
        <div className="container-x scroll-mt-24 grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="eyebrow eyebrow-light">The McAi Quarterly</p>
            <h2 className="mt-4 text-[30px] text-white md:text-[38px]">Four issues a year</h2>
            <p className="mt-4 max-w-lg text-[16px] text-white/75">
              Subscribe for our research, the baselines behind it, and an honest account of what did not work. Unsubscribe
              in one click.
            </p>
          </div>
          <div className="flex items-center">
            <Subscribe />
          </div>
        </div>
      </section>

      <section className="container-x py-14 md:py-16">
        <p className="text-[15px] text-body">
          Looking for a role rather than a project?{" "}
          <Link href="/careers#roles" className="underline">
            See our open positions
          </Link>
          .
        </p>
      </section>
    </>
  );
}
