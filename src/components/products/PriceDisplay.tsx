import type { Product } from "@/src/types/product";
import { formatPrice } from "@/src/lib/price";

export function PriceDisplay({ product, detailed = false }: { product: Product; detailed?: boolean }) {
  if (product.priceOnRequest || !product.priceOptions?.length) {
    return <p className="price">Price on request</p>;
  }
  if (detailed) {
    return (
      <div>
        <p className="label text-[var(--brand-muted)]">{product.priceOptions.length > 1 ? "Available price options" : "Price"}</p>
        <div className="price-options">{product.priceOptions.map((price) => <span className="price-option" key={price}>₹{formatPrice(price)}</span>)}</div>
      </div>
    );
  }
  return (
    <div>
      {product.priceOptions.length > 1 && <p className="label text-[var(--brand-muted)]">Available price options</p>}
      <p className="price mt-1">{product.priceOptions.map((price) => `₹${formatPrice(price)}`).join(" · ")}</p>
      {product.priceOptions.length > 1 && <p className="price-note mt-1">Exact option confirmed with your requirement.</p>}
    </div>
  );
}
