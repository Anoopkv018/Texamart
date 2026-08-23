import Link from "next/link";
import { categories } from "@/src/data/categories";

export function CategoryRail({ active = "all" }: { active?: string }) {
  return (
    <nav className="filter-rail" aria-label="Product categories">
      <Link href="/products" aria-current={active === "all" ? "page" : undefined} className={`filter-link ${active === "all" ? "active" : ""}`}>All</Link>
      {categories.map((category) => <Link key={category.slug} href={`/products/${category.slug}`} aria-current={active === category.slug ? "page" : undefined} className={`filter-link ${active === category.slug ? "active" : ""}`}>{category.shortName}</Link>)}
    </nav>
  );
}
