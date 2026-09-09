export function formatPrice(price: number) {
  return price % 1 === 0 ? String(price) : price.toFixed(2);
}
