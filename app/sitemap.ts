import type { MetadataRoute } from "next";
import { categories } from "@/src/data/categories";
import { products } from "@/src/data/products";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!origin) return [];
  const routes = ["", "/products", "/custom-printing", "/corporate-gifts", "/about", "/contact", "/privacy-policy", "/terms"];
  return [...routes.map((route) => ({ url: `${origin}${route || "/"}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .7 })), ...categories.map((category) => ({ url: `${origin}/products/${category.slug}`, changeFrequency: "monthly" as const, priority: .7 })), ...products.map((product) => ({ url: `${origin}/products/${product.category}/${product.slug}`, changeFrequency: "monthly" as const, priority: .6 }))];
}
