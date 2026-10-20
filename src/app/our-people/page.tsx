import type { Metadata } from "next";
import { people, VALUES } from "@/content/people";
import { SITE } from "@/content/site";
import { CTABand, PageHero, PersonCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Our people",
  description:
    "McAi's partners and practice leaders — the people who lead the work, from AI operating models to data platforms, agents, security, and workforce transition.",
};

export default function OurPeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="The partners who lead the work"
        intro={`${SITE.colleagues} colleagues across ${SITE.officesCount} offices, and a partnership model where the person who sold the work stays on it.`}
        img="/img/people-hero.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our people" }]}
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-line-soft bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow text-accent">How we behave</p>
          <h2 className="mt-4 text-[30px] md:text-[38px]">Four commitments, applied to our own firm</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {VALUES.map((v) => (
              <article key={v.title} className="border-t border-line pt-6">
                <h3 className="text-[21px]">{v.title}</h3>
                <p className="mt-3 text-[16px] text-body">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Join us"
        title="We are hiring across every practice"
        text="Consultants, engineers, designers, and researchers who would rather measure than assert."
        primary={{ label: "See open roles", href: "/careers#roles" }}
        secondary={{ label: "Contact us", href: "/contact" }}
        img="/img/band-careers.jpg"
      />
    </>
  );
}
