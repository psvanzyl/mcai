import type { Metadata } from "next";
import { industries } from "@/content/industries";
import { CTABand, PageHero, PracticeCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "McAi works across nine sectors — advanced industries, financial services, healthcare, retail, energy, technology, public sector, logistics, agriculture, and telecom.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector economics first, technology second"
        intro="AI value is created inside a sector's constraints: a plant's yield curve, an insurer's supervisory regime, a grid's balancing window. We start there."
        img="/img/tile-industries.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />
      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <PracticeCard key={ind.slug} practice={ind} base="industries" eyebrow="Sector" />
          ))}
        </div>
      </section>
      <CTABand
        eyebrow="Not sure where you fit?"
        title="Tell us your sector and the number that is hurting"
        text="We will tell you what has worked elsewhere in your industry and what has quietly failed."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "See our capabilities", href: "/capabilities" }}
        img="/img/case-plant.jpg"
      />
    </>
  );
}
