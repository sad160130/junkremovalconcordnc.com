import type { ReactNode } from "react";
import { SITE_URL, BUSINESS_NAME } from "@/lib/services";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  children?: ReactNode;
}

export function Seo({ title, description, path = "", children }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${BUSINESS_NAME}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {children}
    </>
  );
}
