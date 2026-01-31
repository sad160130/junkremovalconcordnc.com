import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ServiceFrontmatter = {
  title: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryCity?: string;
  serviceType?: string;
  order?: number;
};

export type LocationFrontmatter = {
  city: string;
  state: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  primaryServiceSlug?: string;
};

export type ContentEntry<T> = {
  frontmatter: T;
  body: string;
};

function readMdxFile<T>(filePath: string): ContentEntry<T> {
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  return { frontmatter: data as T, body: content };
}

export function getAllServiceSlugs(): string[] {
  const dir = path.join(CONTENT_DIR, "services");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getServiceBySlug(slug: string): ContentEntry<ServiceFrontmatter> | null {
  const filePath = path.join(CONTENT_DIR, "services", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return readMdxFile<ServiceFrontmatter>(filePath);
}

export function getAllLocationSlugs(): string[] {
  const dir = path.join(CONTENT_DIR, "locations");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getLocationBySlug(slug: string): ContentEntry<LocationFrontmatter> | null {
  const filePath = path.join(CONTENT_DIR, "locations", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return readMdxFile<LocationFrontmatter>(filePath);
}

export function getAllServices(): ContentEntry<ServiceFrontmatter>[] {
  return getAllServiceSlugs()
    .map((slug) => getServiceBySlug(slug))
    .filter((entry): entry is ContentEntry<ServiceFrontmatter> => Boolean(entry))
    .sort((a, b) => (a.frontmatter.order || 999) - (b.frontmatter.order || 999));
}

export function getAllLocations(): ContentEntry<LocationFrontmatter>[] {
  return getAllLocationSlugs()
    .map((slug) => getLocationBySlug(slug))
    .filter((entry): entry is ContentEntry<LocationFrontmatter> => Boolean(entry));
}
