import type { Metadata } from "next";
import { capabilities } from "@/content/capabilities";
import { CTABand, PageHero, PracticeCard } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Eight capabilities, assembled per problem: AI strategy, data and platform engineering, agentic automation, AI-native product, responsible AI, cybersecurity, talent, and emerging technology.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Assembled per problem, not sold as packages"
        intro="Most programmes fail at the seams: strategy without delivery, models without governance, platforms without owners. We bring the capabilities that have to move together."
        img="/img/tile-capabilities.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
      />
      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <PracticeCard key={c.slug} practice={c} base="capabilities" eyebrow="Capability" />
          ))}
        </div>
      </section>
      <CTABand
        eyebrow="How we engage"
        title="From a two-week diagnostic to a two-year capability build"
        text="We are happy to start small — most of our long relationships began with one decision and one ninety-day proof."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "See industries", href: "/industries" }}
        img="/img/app-band.jpg"
      />
    </>
  );
}
