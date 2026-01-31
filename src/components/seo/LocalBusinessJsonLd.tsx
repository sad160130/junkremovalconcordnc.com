import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_ADDRESS, SITE_URL, PRIMARY_SERVICE_AREAS } from "@/lib/services";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.street,
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.state,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.country,
    },
    areaServed: PRIMARY_SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area.city}, NC`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
