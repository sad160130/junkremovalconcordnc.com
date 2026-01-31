import { BUSINESS_PHONE } from "@/lib/services";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function Home() {
  return (
    <main className="bg-zinc-50">
      <LocalBusinessJsonLd />

      {/* HERO + LEAD FORM */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-[3fr,2fr] lg:items-start">
          {/* Hero copy */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Junk Removal Concord NC
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Fast, Local Junk Removal in Concord, NC &amp; Nearby Cities
            </h1>
            <p className="text-base text-zinc-700 sm:text-lg">
              Get heavy junk, old furniture, appliances and clutter hauled away
              without lifting a thing. We serve Concord, Kannapolis, Harrisburg
              and Huntersville with honest pricing and friendly crews.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Call Now: {BUSINESS_PHONE}
              </a>
              <p className="text-sm text-zinc-600">
                Or request a free estimate in 30 seconds using the form.
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

          {/* Lead capture form (frontend only) */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">
              Get a Fast Junk Removal Estimate
            </h2>
            <p className="mt-1 text-xs text-zinc-600">
              Share a few details and we&apos;ll follow up with pricing and
              availability.
            </p>
            <form className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-zinc-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Best number to reach you"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700">
                  City
                </label>
                <select
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  defaultValue="Concord"
                >
                  <option value="Concord">Concord, NC</option>
                  <option value="Kannapolis">Kannapolis, NC</option>
                  <option value="Harrisburg">Harrisburg, NC</option>
                  <option value="Huntersville">Huntersville, NC</option>
                  <option value="Other">Other nearby city</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700">
                  What do you need hauled away?
                </label>
                <textarea
                  className="mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  rows={3}
                  placeholder="Example: old couch and mattress, boxes in garage, broken fridge, etc."
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Request My Free Estimate
              </button>
              <p className="text-[11px] leading-snug text-zinc-500">
                We&apos;ll reach out by phone or text to confirm details and
                provide pricing. No spam.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">How Our Junk Removal Service Works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Step 1
            </p>
            <h3 className="mt-1 text-base font-semibold">Call or request an estimate</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Tell us what you need removed and where you&apos;re located in the
              Concord area.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Step 2
            </p>
            <h3 className="mt-1 text-base font-semibold">Get upfront pricing</h3>
            <p className="mt-2 text-sm text-zinc-700">
              We provide a clear price based on what you have and how much space
              it will take in our truck.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Step 3
            </p>
            <h3 className="mt-1 text-base font-semibold">We haul everything away</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Our crew does all the lifting and loading, then disposes of or
              recycles your items properly.
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

      {/* TRUST / ABOUT SECTION */}
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
