import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS, SITE } from "@/content/site";
import { PageHero } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects built by Wego: data dashboards, monitoring tools, and presentations.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Things we have built"
        intro="A selection of dashboards, monitoring tools, and presentations built by Wego. Each one answers a real question with real data."
        img="/img/projects-hero.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.slug} className="group flex flex-col">
              <div className="card-media block aspect-[16/10] overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.img}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex flex-1 flex-col">
                <p className="eyebrow text-accent">{project.kicker}</p>
                <h3 className="mt-2 text-[24px] md:text-[28px]">
                  {project.name}
                </h3>
                <p className="mt-3 text-[15px] text-body">{project.summary}</p>
                <ul className="mt-4 space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] text-body">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                {project.href ? (
                  <div className="mt-6">
                    {project.href.startsWith("http") || project.href.endsWith(".html") ? (
                      <a
                        href={project.href}
                        className="arrow-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{project.hrefLabel || "Open"}</span>
                      </a>
                    ) : (
                      <Link href={project.href} className="arrow-link">
                        <span>{project.hrefLabel || "Open"}</span>
                      </Link>
                    )}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
