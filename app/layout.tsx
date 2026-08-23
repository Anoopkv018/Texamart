import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/outfit";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { FloatingWhatsApp } from "@/src/components/whatsapp/FloatingWhatsApp";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Texa Mart — Custom Merchandise & Corporate Gifts", template: "%s | Texa Mart" },
  description: "Custom apparel, merchandise and corporate gifts. Browse products and request a quotation from Texa Mart on WhatsApp.",
  openGraph: { title: "Texa Mart — Make Your Brand Tangible", description: "Custom printing, merchandise and corporate gifts.", type: "website", ...(siteUrl ? { images: ["/brand/texa-mart-glow-logo.png"] } : {}) },
  twitter: { card: "summary_large_image", title: "Texa Mart", description: "Custom printing, merchandise and corporate gifts.", ...(siteUrl ? { images: ["/brand/texa-mart-glow-logo.png"] } : {}) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const contract = `<!-- IMPECCABLE 1336941b | THESIS: Texa Mart is a compact merchandise dispatch board where every product and action aligns to a useful route; refuse the oversized poster-catalogue. OWN-WORLD: exact #1f1b64 navy, colorful sample bays, crisp rules, expressive Bricolage Grotesque headings, readable Outfit data and body copy, square controls, disciplined product bays. STORY: orient quickly, compare truthful products and prices, then send a useful WhatsApp brief. FIRST VIEWPORT: a bold promise and two actions occupy the left; a strict merchandise board occupies the right; all edges share the container grid. FORM: priority-based wayfinding and sample-library system, grounded direction 5, seed 1336941b. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->`;
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
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
