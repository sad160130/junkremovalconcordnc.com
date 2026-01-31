import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/content";
import { Seo } from "@/components/seo/Seo";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getServiceBySlug(params.slug);
  if (!entry) return {};
  const { frontmatter } = entry;

  return {
    title: frontmatter.metaTitle || frontmatter.title,
    description: frontmatter.metaDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const entry = getServiceBySlug(params.slug);
  if (!entry) return notFound();

  const { frontmatter, body } = entry;

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Seo
          title={frontmatter.metaTitle || frontmatter.title}
          description={
            frontmatter.metaDescription ||
            `Junk removal service in ${frontmatter.primaryCity || "your area"}.`
          }
          path={`/services/${frontmatter.slug}`}
        />
        <article className="prose prose-zinc max-w-none">
          <h1>{frontmatter.title}</h1>
          {/* Render MDX body as plain HTML for now */}
          <div className="mt-4 whitespace-pre-line text-zinc-800">{body}</div>
        </article>
      </section>
    </main>
  );
}
