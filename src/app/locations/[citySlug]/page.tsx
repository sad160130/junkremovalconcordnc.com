import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/content";
import { Seo } from "@/components/seo/Seo";

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((citySlug) => ({ citySlug }));
}

export function generateMetadata({ params }: { params: { citySlug: string } }): Metadata {
  const entry = getLocationBySlug(params.citySlug);
  if (!entry) return {};
  const { frontmatter } = entry;

  return {
    title: frontmatter.metaTitle,
    description: frontmatter.metaDescription,
  };
}

export default function LocationPage({ params }: { params: { citySlug: string } }) {
  const entry = getLocationBySlug(params.citySlug);
  if (!entry) return notFound();

  const { frontmatter, body } = entry;

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Seo
          title={frontmatter.metaTitle || `Junk Removal in ${frontmatter.city}, ${frontmatter.state}`}
          description={
            frontmatter.metaDescription ||
            `Junk removal service in ${frontmatter.city}, ${frontmatter.state}.`
          }
          path={`/locations/${frontmatter.slug}`}
        />
        <article className="prose prose-zinc max-w-none">
          <h1>Junk Removal in {frontmatter.city}, {frontmatter.state}</h1>
          <div className="mt-4 whitespace-pre-line text-zinc-800">{body}</div>
        </article>
      </section>
    </main>
  );
}
