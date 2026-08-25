import type { Product } from "@/src/types/product";

const descriptions = {
  apparel: "A versatile custom apparel option for teams, events, campaigns and brand merchandise.",
  cap: "A practical branded cap for teams, events, promotions and everyday visibility.",
  magnet: "A compact custom keepsake for events, destinations, campaigns and brand reminders.",
  gift: "A useful branded piece for gift sets, events, employee kits and everyday use.",
  drinkware: "Custom drinkware that puts your identity into an object people reach for every day.",
  stationery: "A flexible branded format for events, packaging, team kits and promotions.",
  sachet: "A custom pageant or event sachet that can be prepared in a selection of colours and finishes.",
  bag: "A reusable carry piece that gives your identity useful, everyday visibility.",
  other: "A custom format for events, recognition, display and memorable brand moments.",
};

export const products: Product[] = [
  {
    id: "round-neck-tshirt", slug: "round-neck-tshirt", name: "Round Neck T-Shirt", category: "apparel", image: "/images/products/round-neck-tshirt-angle.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/round-neck-tshirt-lifestyle.webp", alt: "Full-length lifestyle view of the round neck T-shirt", caption: "Lifestyle view" },
      { src: "/images/products/round-neck-tshirt-three-quarter.webp", alt: "Model wearing the round neck T-shirt at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/round-neck-tshirt-front.webp", alt: "Front view of the round neck T-shirt", caption: "Front view" },
      { src: "/images/products/round-neck-tshirt-back.webp", alt: "Back view of the round neck T-shirt", caption: "Back view" },
      { src: "/images/products/round-neck-tshirt-detail.webp", alt: "Close view of the round neckline and fabric texture", caption: "Neckline and fabric detail" },
    ], description: descriptions.apparel, priceOptions: [75, 200, 300], featured: true
  },
  {
    id: "collar-tshirt", slug: "collar-tshirt", name: "Collar T-Shirt", category: "apparel", image: "/images/products/collar-tshirt-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/collar-tshirt-side.webp", alt: "Model wearing the green collar T-shirt from the side", caption: "Side view" },
      { src: "/images/products/collar-tshirt-angle.webp", alt: "Model wearing the green collar T-shirt at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/collar-tshirt-back.webp", alt: "Back view of the green collar T-shirt", caption: "Back view" },
      { src: "/images/products/collar-tshirt-detail.webp", alt: "Close view of the green collar, buttons and fabric texture", caption: "Collar and fabric detail" },
      { src: "/images/products/collar-tshirt-lifestyle.webp", alt: "Full-length lifestyle view of the green collar T-shirt", caption: "Lifestyle view" },
    ], description: descriptions.apparel, priceOptions: [150, 220, 450], featured: true
  },
  { id: "sweat-shirts", slug: "sweat-shirts", name: "Sweat Shirts", category: "apparel",
    image: "/images/products/sweat-shirts-front.png", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/sweat-shirts-angle.png", alt: "Model wearing the black sweat shirt from the side", caption: "Side view" },
      { src: "/images/products/sweat-shirts-three-quarter.png", alt: "Model wearing the black sweat shirt at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/sweat-shirts-back.png", alt: "Back view of the black sweat shirt", caption: "Back view" },
      { src: "/images/products/sweat-shirts-detail.png", alt: "Close view of the black sweat shirt, buttons and fabric texture", caption: "Sweat shirt and fabric detail" },
      { src: "/images/products/sweat-shirts-lifestyle.png", alt: "Full-length lifestyle view of the black sweat shirt", caption: "Lifestyle view" },
    ], description: descriptions.apparel, priceOptions: [400, 450] },
  {
    id: "hoodies", slug: "hoodies", name: "Hoodies", category: "apparel", image: "/images/products/hoodie-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/hoodie-lifestyle.webp", alt: "Full-length lifestyle view of the black hoodie", caption: "Lifestyle view" },
      { src: "/images/products/hoodie-three-quarter.webp", alt: "Model wearing the black hoodie at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/hoodie-back.webp", alt: "Back view of the black hoodie", caption: "Back view" },
      { src: "/images/products/hoodie-hood-up.webp", alt: "Model wearing the black hoodie with the hood up", caption: "Hood-up view" },
      { src: "/images/products/hoodie-detail.webp", alt: "Close view of the black hood and fabric texture", caption: "Hood and fabric detail" },
    ], description: descriptions.apparel, priceOptions: [450, 550, 650], featured: true
  },
  { id: "pants", slug: "pants", name: "Pants", category: "apparel", image: "/images/products/pants.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.apparel, priceOptions: [495] },

  {
    id: "smart-caps", slug: "smart-caps", name: "Smart Caps", category: "caps", image: "/images/products/smart-caps.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/smart-caps-2.webp", alt: "Side view of the burgundy smart cap", caption: "Side view" },
    ], description: descriptions.cap, priceOptions: [65]
  },
  {
    id: "flexible-caps", slug: "flexible-caps", name: "Flexible Caps", category: "caps", image: "/images/products/flexible-caps.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/flexible-caps-2.webp", alt: "Alternate front view of the yellow flexible cap", caption: "Alternate front view" },
    ], description: descriptions.cap, priceOptions: [85]
  },
  { id: "foldable-caps", slug: "foldable-caps", name: "Foldable Caps", category: "caps", image: "/images/products/foldable-caps.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.cap, priceOptions: [250] },
  { id: "premium-caps", slug: "premium-caps", name: "Premium Caps", category: "caps", image: "/images/products/premium-caps.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.cap, priceOptions: [260], featured: true },

  { id: "button-fridge-magnet", slug: "button-fridge-magnet", name: "Button Fridge Magnet", category: "fridge-magnets", image: "/images/products/button-fridge-magnet.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.magnet, priceOptions: [45] },
  { id: "acrylic-fridge-magnet", slug: "acrylic-fridge-magnet", name: "Acrylic Fridge Magnet", category: "fridge-magnets", image: "/images/products/acrylic-fridge-magnet.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.magnet, priceOptions: [65] },
  { id: "metal-fridge-magnet", slug: "metal-fridge-magnet", name: "Metal Fridge Magnet", category: "fridge-magnets", image: "/images/products/metal-fridge-magnet.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.magnet, priceOptions: [85] },
  { id: "pending-fridge-magnet-label", slug: "pending-fridge-magnet-label", name: "Frame / Flame Fridge Magnet", category: "fridge-magnets", image: "/images/products/pending-fridge-magnet-label.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.magnet, priceOptions: [55], labelPendingConfirmation: true, pricingNote: "Product label pending client confirmation." },

  { id: "satin-keychain", slug: "satin-keychain", name: "Satin Keychain", category: "keychains-gifts", description: descriptions.gift, priceOptions: [15], moq: 500 },
  { id: "wooden-keychain", slug: "wooden-keychain", name: "Wooden Keychain", category: "keychains-gifts", image: "/images/products/wooden-keychain.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.gift, priceOptions: [35], moq: 50 },
  { id: "button-keychain", slug: "button-keychain", name: "Button Keychain", category: "keychains-gifts", description: descriptions.gift, priceOptions: [35], moq: 50 },
  { id: "acrylic-keychain", slug: "acrylic-keychain", name: "Acrylic Keychain", category: "keychains-gifts", description: descriptions.gift, priceOptions: [45], moq: 50, featured: true },
  { id: "mementoes", slug: "mementoes", name: "Mementoes", category: "keychains-gifts", description: descriptions.gift, priceOnRequest: true },

  { id: "mug", slug: "mug", name: "Mug", category: "drinkware", image: "/images/products/mug.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.drinkware, priceOptions: [160], featured: true },
  { id: "uv-bottle-500ml", slug: "uv-bottle-500ml", name: "UV Bottle — 500 ml", category: "drinkware", image: "/images/products/uv-bottle-500ml.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.drinkware, priceOptions: [260] },
  { id: "uv-bottle-750ml", slug: "uv-bottle-750ml", name: "UV Bottle — 750 ml", category: "drinkware", image: "/images/products/uv-bottle-750ml.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.drinkware, priceOptions: [280], featured: true },
  { id: "uv-bottle-1-litre", slug: "uv-bottle-1-litre", name: "UV Bottle — 1 Litre", category: "drinkware", image: "/images/products/uv-bottle-1-litre.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.drinkware, priceOptions: [320] },

  { id: "diary", slug: "diary", name: "Diary", category: "stationery", image: "/images/products/diary.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.stationery, priceOptions: [150], moq: 10, featured: true },
  {
    id: "metal-pen", slug: "metal-pen", name: "Custom Metal Pen", category: "stationery", image: "/images/products/metal-pen.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/metal-pen-2.webp", alt: "Black metal pen showing engraving positions and finish details", caption: "Custom engraving preview" },
    ], description: descriptions.stationery, priceOptions: [65], moq: 50
  },
  { id: "uv-stickers", slug: "uv-stickers", name: "UV Stickers", category: "stationery", description: descriptions.stationery, priceOptions: [30], pricingNote: "Client artwork also references approximately ₹4.25 per sq inch; confirm final specification." },
  { id: "bookmark", slug: "bookmark", name: "Bookmark", category: "stationery", description: descriptions.stationery, priceOptions: [4.5] },
  { id: "post-card", slug: "post-card", name: "Post Card", category: "stationery", description: descriptions.stationery, priceOptions: [8] },
  { id: "wrist-band", slug: "wrist-band", name: "Wrist Band", category: "stationery", description: descriptions.stationery, priceOptions: [8] },
  { id: "button-badge", slug: "button-badge", name: "Button Badge", category: "stationery", image: "/images/products/button-badge.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.stationery, priceOptions: [20, 25], pricingNote: "₹20 — MOQ 100 · ₹25 — MOQ 50. Option details to be confirmed." },
  { id: "sticker-a5-custom-cut", slug: "sticker-a5-custom-cut", name: "Sticker A5 — Custom Cut", category: "stationery", description: descriptions.stationery, priceOptions: [40], moq: 100 },
  { id: "lanyard-tag", slug: "lanyard-tag", name: "Lanyard Tag", category: "stationery", description: descriptions.stationery, priceOptions: [35] },

  {
    id: "miss-india-sachet", slug: "miss-india-sachet", name: "Miss India Sachet", category: "sachets", image: "/images/products/miss-india-sachet.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/miss-india-sachet-2.webp", alt: "White, red and gold sachets displayed on black dress forms", caption: "White, red and gold options" },
      { src: "/images/products/miss-india-sachet-3.webp", alt: "White, blue and gold sachets displayed on black dress forms", caption: "White, blue and gold options" },
    ], description: descriptions.sachet, priceOptions: [160]
  },

  { id: "tote-bag", slug: "tote-bag", name: "Tote Bag", category: "bags-accessories", image: "/images/products/tote-bag.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.bag, priceOptions: [12.5, 16.5, 55, 75, 125, 170], featured: true },
  { id: "jute-bag", slug: "jute-bag", name: "Jute Bag", category: "bags-accessories", image: "/images/products/jute-bag.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.bag, priceOptions: [60, 90, 110, 160] },
  { id: "jute-pouch", slug: "jute-pouch", name: "Jute Pouch", category: "bags-accessories", image: "/images/products/jute-pouch.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.bag, priceOptions: [8.5, 12.5, 14.5] },
  { id: "yoga-bag", slug: "yoga-bag", name: "Yoga Bag", category: "bags-accessories", description: descriptions.bag, priceOptions: [260] },
  { id: "backpack", slug: "backpack", name: "Backpack", category: "bags-accessories", image: "/images/products/backpack.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.bag, priceOnRequest: true },
  { id: "trolley", slug: "trolley", name: "Trolley", category: "bags-accessories", description: descriptions.bag, priceOnRequest: true },

  { id: "custom-flags", slug: "custom-flags", name: "Custom Flags", category: "other-products", image: "/images/products/custom-flags.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.other, priceOptions: [60, 400, 600], featured: true },
  { id: "fabric-frame", slug: "fabric-frame", name: "Fabric Frame", category: "other-products", description: descriptions.other, priceOptions: [150] },
  { id: "umbrella", slug: "umbrella", name: "Umbrella", category: "other-products", image: "/images/products/umbrella.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.other, priceOptions: [200] },
  { id: "recognition-mementoes", slug: "recognition-mementoes", name: "Mementoes", category: "other-products", description: descriptions.other, priceOnRequest: true },
];

export function getProduct(category: string, slug: string) {
  return products.find((product) => product.category === category && product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export const featuredProducts = products.filter((product) => product.featured);
