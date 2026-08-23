import type { Product } from "@/src/types/product";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return <div className="catalog-grid">{products.map((product) => <ProductCard product={product} key={product.id} />)}</div>;
}
