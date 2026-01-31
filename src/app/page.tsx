import { BUSINESS_PHONE } from "@/lib/services";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Junk Removal Concord NC
        </p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Junk Removal in Concord, NC
        </h1>
        <p className="text-lg text-zinc-700">
          Fast, local junk removal for homes and businesses in Concord and
          nearby cities. We handle the heavy lifting and hauling so you don&apos;t
          have to.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`tel:${BUSINESS_PHONE}`}
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Call Now: {BUSINESS_PHONE}
          </a>
          <p className="text-sm text-zinc-600">
            Same or next-day junk removal in Concord, Kannapolis, Harrisburg &
            Huntersville.
          </p>
        </div>
        <div className="grid gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">What we haul away</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Furniture and mattress removal</li>
              <li>Appliances and electronics</li>
              <li>Garage, attic and basement cleanouts</li>
              <li>Yard waste and small construction debris</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Why choose us</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Local, owner-operated Concord junk removal company</li>
              <li>Upfront pricing with no surprises</li>
              <li>Friendly, professional crews that respect your property</li>
              <li>Serving Concord, Kannapolis, Harrisburg & Huntersville</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
