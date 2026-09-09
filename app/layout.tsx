import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/outfit";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { FloatingWhatsApp } from "@/src/components/whatsapp/FloatingWhatsApp";
import { siteConfig } from "@/src/data/site";
import { baseKeywords } from "@/src/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Texa Mart Mysuru | Custom T-Shirt Printing & Corporate Gifts", template: "%s | Texa Mart Mysuru" },
  description: "Custom T-shirt printing, branded apparel, corporate gifts and promotional products in Mysuru, Karnataka. Request a quotation from Texa Mart on WhatsApp.",
  keywords: baseKeywords,
  applicationName: "Texa Mart",
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Custom merchandise and corporate gifting",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    title: "Texa Mart Mysuru | Custom T-Shirt Printing & Corporate Gifts",
    description: "Custom printing, branded merchandise and corporate gifts for teams, events and businesses in Mysuru.",
    type: "website",
    siteName: "Texa Mart",
    locale: "en_IN",
    ...(siteUrl ? { url: siteUrl, images: [{ url: "/brand/texa-mart-glow-logo.png", alt: "Texa Mart custom merchandise and corporate gifting" }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Texa Mart Mysuru | Custom Printing & Corporate Gifts",
    description: "Custom apparel, branded merchandise and corporate gifts in Mysuru, Karnataka.",
    ...(siteUrl ? { images: ["/brand/texa-mart-glow-logo.png"] } : {}),
  },
  other: { "geo.region": "IN-KA", "geo.placename": "Mysuru" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fffaf2",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const contract = `<!-- IMPECCABLE 1336941b | THESIS: Texa Mart is a compact merchandise dispatch board where every product and action aligns to a useful route; refuse the oversized poster-catalogue. OWN-WORLD: exact #1f1b64 navy, colorful sample bays, crisp rules, expressive Bricolage Grotesque headings, readable Outfit data and body copy, square controls, disciplined product bays. STORY: orient quickly, compare truthful products and prices, then send a useful WhatsApp brief. FIRST VIEWPORT: a bold promise and two actions occupy the left; a strict merchandise board occupies the right; all edges share the container grid. FORM: priority-based wayfinding and sample-library system, grounded direction 5, seed 1336941b. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->`;
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              legalName: siteConfig.legalName,
              description: "Custom apparel, branded merchandise and corporate gifts in Mysuru, Karnataka.",
              ...(siteUrl ? { url: siteUrl } : {}),
              telephone: siteConfig.supportPhone,
              email: [siteConfig.email, siteConfig.secondaryEmail],
              address: {
                "@type": "PostalAddress",
                streetAddress: "830/A, 11th Cross, Ramanuja Road, Fort Mohalla",
                addressLocality: "Mysuru",
                addressRegion: "Karnataka",
                postalCode: "570004",
                addressCountry: "IN",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <span hidden aria-hidden="true" dangerouslySetInnerHTML={{ __html: contract }} />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
