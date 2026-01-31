import type { Metadata } from "next";
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
          <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Junk Removal Concord, NC
                </p>
                <p className="text-base font-bold">{BUSINESS_NAME}</p>
              </div>
              <div className="text-right text-sm">
                <p className="font-medium">Free estimates</p>
                <a
                  href="tel:+12528420153"
                  className="text-emerald-700 hover:text-emerald-800"
                >
                  Call Now: +1 (252) 842 0153
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
