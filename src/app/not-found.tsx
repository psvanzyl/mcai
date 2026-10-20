import Link from "next/link";
import { Arrow } from "@/components/Cards";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-start py-24 md:py-32">
      <p className="eyebrow text-accent">Error 404</p>
      <h1 className="mt-5 max-w-3xl text-[34px] md:text-[52px]">That page has moved, or never existed</h1>
      <p className="mt-6 max-w-2xl text-[18px] text-body">
        Try one of these instead — or search the site from the header.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Home
          <Arrow />
        </Link>
        <Link href="/insights" className="btn btn-outline">
          Insights
        </Link>
        <Link href="/capabilities" className="btn btn-outline">
          Capabilities
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Contact
        </Link>
      </div>
    </section>
  );
}
