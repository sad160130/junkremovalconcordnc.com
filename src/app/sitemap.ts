import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/services";
import { getAllServiceSlugs, getAllLocationSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/services", "/locations"];
  const serviceRoutes = getAllServiceSlugs().map((slug) => `/services/${slug}`);
  const locationRoutes = getAllLocationSlugs().map((slug) => `/locations/${slug}`);

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
}
