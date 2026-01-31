import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, SITE_URL } from "@/lib/services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BUSINESS_NAME} | Junk Removal in Concord, NC`,
  description:
    "Junk Removal Concord NC provides fast, affordable junk removal in Concord and surrounding areas. Call today for a free estimate.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    title: `${BUSINESS_NAME} | Junk Removal in Concord, NC`,
    description:
      "Fast, local junk removal for homes and businesses in Concord, Kannapolis, Harrisburg and Huntersville.",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}
      >
        <div className="min-h-screen">
          <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Junk Removal Concord, NC
                </p>
                <Link href="/" className="text-base font-bold">
                  {BUSINESS_NAME}
                </Link>
              </div>
              <nav className="hidden items-center gap-4 text-xs font-medium text-zinc-700 sm:flex">
                <Link href="/services" className="hover:text-emerald-700">
                  Services
                </Link>
                <Link href="/locations" className="hover:text-emerald-700">
                  Service Areas
                </Link>
                <Link href="/contact" className="hover:text-emerald-700">
                  Contact
                </Link>
              </nav>
              <div className="text-right text-xs sm:text-sm">
                <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                  Free estimates
                </p>
                <a
                  href="tel:+12528420153"
                  className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Call: +1 (252) 842 0153
                </a>
              </div>
            </div>
          </header>
          {children}
          <footer className="mt-12 border-t border-zinc-200 bg-white/80">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
              <p>
                &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
              </p>
              <p>
                Serving Concord, Kannapolis, Harrisburg &amp; Huntersville, NC.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
