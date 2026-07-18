import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Gtm, GtmNoscript } from "@/components/analytics/gtm";
import { UtmCapture } from "@/components/analytics/utm-capture";
import { brand } from "@/content/site";
import { publicEnv } from "@/lib/env";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.siteUrl),
  title: {
    default: "BridgePoint DealerAI | AI Employees for Car Dealerships",
    template: "%s | BridgePoint DealerAI",
  },
  description:
    "Answer every lead and call 24/7. Book more appointments without more BDC headcount.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand.product,
    title: "AI Employees for Dealerships | BridgePoint DealerAI",
    description:
      "Instant lead response, sales BDC, service recovery, and missed call rescue. Book a demo or call the AI right now.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BridgePoint DealerAI",
    description: "AI Employees for car dealerships.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.legal,
    url: publicEnv.siteUrl,
    email: brand.email,
    brand: {
      "@type": "Brand",
      name: brand.product,
    },
  };

  return (
    <html lang="en" className="bg-midnight">
      <body className={`${inter.variable} min-h-screen bg-midnight font-sans text-surface-light antialiased`}>
        <Gtm />
        <GtmNoscript />
        <UtmCapture />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
