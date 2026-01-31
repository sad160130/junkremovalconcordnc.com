import { BUSINESS_PHONE } from "@/lib/services";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <LocalBusinessJsonLd />

      {/* HERO SECTION */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Junk Removal Concord NC
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Junk Removal in Concord, NC &amp; Nearby Cities
            </h1>
            <p className="text-base text-zinc-700 sm:text-lg">
              Full-service junk hauling for homes, apartments and businesses in
              Concord, Kannapolis, Harrisburg and Huntersville. We do all the
              lifting, loading and disposal so you don&apos;t have to.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Call Now: {BUSINESS_PHONE}
              </a>
              <p className="text-sm text-zinc-600">
                Same or next-day appointments available in most areas.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-zinc-700 sm:grid-cols-2">
              <ul className="space-y-1">
                <li>• Furniture &amp; mattress removal</li>
                <li>• Appliance &amp; electronics pickup</li>
                <li>• Garage, attic &amp; basement cleanouts</li>
              </ul>
              <ul className="space-y-1">
                <li>• Yard waste &amp; light construction debris</li>
                <li>• Move-out &amp; eviction cleanouts</li>
                <li>• Small commercial junk removal</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-5 text-sm text-zinc-800 shadow-sm">
            <h2 className="text-base font-semibold text-emerald-900">
              How Our Junk Removal Works
            </h2>
            <ol className="mt-3 space-y-2 list-decimal pl-5">
              <li>
                Call or text us at <span className="font-medium">{BUSINESS_PHONE}</span>
                {" "}
                with what you need hauled away.
              </li>
              <li>Get a clear, upfront price before we start.</li>
              <li>We do all the lifting and loading. You just point at what goes.</li>
              <li>We haul your junk for proper disposal, recycling or donation.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Residential Junk Removal</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Clear out garages, attics, basements and spare rooms without
              renting a truck or lifting heavy items yourself.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Apartment &amp; Move-Out Cleanouts</h2>
            <p className="mt-2 text-sm text-zinc-700">
              We help tenants, landlords and property managers remove leftover
              junk quickly between moves.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Light Commercial Hauling</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Office cleanouts, retail fixtures, and small business junk
              removal in the Concord area.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-y border-zinc-200 bg-zinc-100/60">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-semibold">Service Area</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Based near 805 Trade Street Northwest #105, Concord, NC 28027, we
            provide junk removal throughout:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm font-medium text-zinc-800">
            <li className="rounded-full bg-white px-3 py-1 shadow-sm">
              Concord, NC
            </li>
            <li className="rounded-full bg-white px-3 py-1 shadow-sm">
              Kannapolis, NC
            </li>
            <li className="rounded-full bg-white px-3 py-1 shadow-sm">
              Harrisburg, NC
            </li>
            <li className="rounded-full bg-white px-3 py-1 shadow-sm">
              Huntersville, NC
            </li>
          </ul>
        </div>
      </section>

      {/* ABOUT / TRUST SECTION */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Local, Owner-Operated Junk Removal</h2>
            <p className="text-sm text-zinc-700">
              Junk Removal Concord NC is a local junk hauling service focused on
              honest pricing and reliable, friendly crews. We treat every job
              like we&apos;re working for a neighbor.
            </p>
            <p className="text-sm text-zinc-700">
              From single-item pickups to full cleanouts, our goal is to make it
              easy to get junk out of your way so you can enjoy your space
              again.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Why neighbors call us back</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>• Upfront, simple pricing with no surprises.</li>
              <li>• Professional crews that show up on time.</li>
              <li>• Respect for your property and your schedule.</li>
              <li>• We donate and recycle whenever possible.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-5 text-sm text-zinc-800">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold">How much does junk removal cost?</h3>
            <p className="mt-2 text-zinc-700">
              Pricing depends on how much space your items take up in our truck
              and how difficult they are to remove. Give us a quick call at
              {" "}
              {BUSINESS_PHONE} with a description or photos, and we&apos;ll provide a
              clear estimate.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold">Can you come the same day?</h3>
            <p className="mt-2 text-zinc-700">
              In many cases, yes. Same or next-day junk removal is often
              available in Concord and nearby cities depending on our schedule.
            </p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="font-semibold">What types of junk can you take?</h3>
            <p className="mt-2 text-zinc-700">
              We haul most non-hazardous items including furniture, appliances,
              electronics, boxes, yard waste and small construction debris. If
              you&apos;re not sure, just ask when you call.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
