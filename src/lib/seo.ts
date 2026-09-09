import type { Metadata } from "next";

export const baseKeywords = [
  "Texa Mart",
  "custom T-shirt printing Mysuru",
  "corporate gifts Mysuru",
  "custom merchandise Karnataka",
  "branded apparel",
  "promotional products",
  "bulk custom printing",
];

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const socialImage = "/brand/texa-mart-glow-logo.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({ title, description, path, keywords = [] }: PageMetadataInput): Metadata {
  const canonical = siteOrigin ? `${siteOrigin}${path === "/" ? "" : path}` : undefined;
  const pageKeywords = [...new Set([...keywords, ...baseKeywords])];
  const socialImages = siteOrigin
    ? [{ url: socialImage, alt: "Texa Mart custom merchandise and corporate gifting" }]
    : undefined;

  return {
    title,
    description,
    keywords: pageKeywords,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Texa Mart",
      locale: "en_IN",
      ...(canonical ? { url: canonical } : {}),
      ...(socialImages ? { images: socialImages } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(socialImages ? { images: socialImages } : {}),
    },
  };
}
