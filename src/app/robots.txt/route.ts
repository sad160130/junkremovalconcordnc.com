import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/services";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`.trim();

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
