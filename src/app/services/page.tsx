import Link from "next/link";
import { getAllServices } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "Junk removal services in Concord, Kannapolis, Harrisburg and Huntersville.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold">Junk Removal Services</h1>
        <p className="mt-3 text-zinc-700">
          Full-service junk removal for homes and businesses in Concord and nearby
          cities.
        </p>
        <ul className="mt-8 space-y-4">
          {services.map(({ frontmatter }) => (
            <li key={frontmatter.slug} className="rounded-lg border border-zinc-200 bg-white p-4">
              <h2 className="text-xl font-semibold">
                <Link href={`/services/${frontmatter.slug}`} className="hover:underline">
                  {frontmatter.title}
                </Link>
              </h2>
              {frontmatter.metaDescription && (
                <p className="mt-1 text-sm text-zinc-700">
                  {frontmatter.metaDescription}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
