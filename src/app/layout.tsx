import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import InitialLoader from "@/components/ui/InitialLoader";
import { siteConfig } from "@/content/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Zeal | International Trading, Sourcing & Supply Services",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [
    "international trading company",
    "trading and supply",
    "sourcing and procurement",
    "distribution services",
    "business facilitation",
    "Zeal Enterprises",
    "India UK trading company",
  ],
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    title: "Zeal | International Trading, Sourcing & Supply Services",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeal | International Trading, Sourcing & Supply Services",
    description: siteConfig.description,
  },
  icons: {
    icon: "/images/zeal-mark.png",
    apple: "/images/zeal-mark.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-z-cream text-z-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <InitialLoader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[1000] bg-z-black text-white px-4 py-2 rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
