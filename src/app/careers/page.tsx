import type { Metadata } from "next";
import { jobs } from "@/content/people";
import CareersBrowser, { type JobItem } from "@/components/CareersBrowser";
import ApplyForm from "@/components/ApplyForm";
import { CTABand, PageHero, StatRow } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at McAi across AI strategy, data and platform engineering, agentic automation, responsible AI, security, product design, and research.",
};

const WHY = [
  {
    title: "Work that ends in production",
    text: "You will see your work run in a real system with a named owner, not just in a report. We measure ourselves on what changed.",
  },
  {
    title: "Small teams, senior exposure",
    text: "Two to four people per engagement, with the partner who sold the work still in the room. You will be client-facing in week one.",
  },
  {
    title: "Teach or leave",
    text: "Every engagement includes capability transfer. If the client cannot run it without us, we have not finished.",
  },
  {
    title: "Time to think",
    text: "Ten per cent of every week is protected for research, publication, or tooling. It is how our insights stay real.",
  },
];

const PROCESS = [
  { step: "01", title: "Application", text: "We read every application ourselves. Expect a reply within one business day." },
  { step: "02", title: "Conversation", text: "A 30-minute call about your work, not a competency grid." },
  { step: "03", title: "Case", text: "A paid, two-hour working session on a real (anonymised) client problem." },
  { step: "04", title: "Partner interview", text: "A discussion about judgement, trade-offs, and where you want to specialise." },
];

export default function CareersPage() {
  const items: JobItem[] = jobs.map((j) => ({
    title: j.title,
    practice: j.practice,
    location: j.location,
    type: j.type,
    level: j.level,
    summary: j.summary,
  }));

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the operating models everyone else will copy"
        intro="We are a firm of people who would rather write down a baseline than make a bold claim. If that sounds like a constraint, we are not the right fit. If it sounds like relief, read on."
        img="/img/careers-hero.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="container-x py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent">Why McAi</p>
          <h2 className="mt-4 text-[30px] md:text-[38px]">Four reasons people stay</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {WHY.map((w) => (
            <article key={w.title} className="border-t border-line pt-6">
              <h3 className="text-[21px]">{w.title}</h3>
              <p className="mt-3 text-[16px] text-body">{w.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <StatRow
            stats={[
              { value: "24", label: "offices, plus remote roles across the EU" },
              { value: "10%", label: "protected research time each week" },
              { value: "2-4", label: "people per engagement" },
              { value: "12", label: "open roles right now" },
            ]}
          />
        </div>
      </section>

      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">Open roles</p>
            <h2 className="mt-4 text-[30px] md:text-[38px]">Where you could land</h2>
            <p className="mt-4 text-[16px] text-body">
              Filter by practice or location. Everything listed is live; if a role closes, it disappears from this page the same week.
            </p>
          </div>
          <div className="mt-10">
            <CareersBrowser jobs={items} />
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20" id="apply">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">Apply</p>
            <h2 className="mt-4 text-[30px] md:text-[38px]">One form, no portal account</h2>
            <p className="mt-5 text-[17px] text-body">
              We do not use an applicant tracking system that hides you behind a keyword filter. Tell us what you have built
              and what you want to get better at.
            </p>
            <p className="mt-4 text-[15px] text-muted">
              McAi is an equal-opportunity employer. We welcome applications from people of all backgrounds, and we
              accommodate adjustments at every stage of the process.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ApplyForm roles={jobs.map((j) => j.title)} />
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft">
        <div className="container-x py-16 md:py-20">
          <h2 className="text-[30px] md:text-[38px]">How our process works</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="border-t border-line pt-6">
                <p className="font-serif text-[15px] text-accent">{p.step}</p>
                <h3 className="mt-3 text-[20px]">{p.title}</h3>
                <p className="mt-3 text-[15px] text-body">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Not seeing your role?"
        title="Send a speculative application"
        text="We hire ahead of demand in data engineering, agent architecture, and responsible AI. Tell us what you would build."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "About McAi", href: "/about" }}
        img="/img/band-careers.jpg"
      />
    </>
  );
}
