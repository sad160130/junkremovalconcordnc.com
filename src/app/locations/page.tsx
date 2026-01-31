import Link from "next/link";
import { getAllLocations } from "@/lib/content";

export const metadata = {
  title: "Service Areas",
  description: "Junk removal service areas around Concord, NC.",
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold">Service Areas</h1>
        <p className="mt-3 text-zinc-700">
          Junk removal in Concord and surrounding North Carolina cities.
        </p>
        <ul className="mt-8 space-y-4">
          {locations.map(({ frontmatter }) => (
            <li key={frontmatter.slug} className="rounded-lg border border-zinc-200 bg-white p-4">
              <h2 className="text-xl font-semibold">
                <Link href={`/locations/${frontmatter.slug}`} className="hover:underline">
                  {frontmatter.city}, {frontmatter.state}
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
