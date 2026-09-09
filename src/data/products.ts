import type { Product, ProductColour } from "@/src/types/product";

const catalogueColours = {
  1: { catalogueCode: 1, name: "Navy", hex: "#07101f" },
  2: { catalogueCode: 2, name: "White", hex: "#f8f5f2" },
  3: { catalogueCode: 3, name: "A Melange", hex: "#c7c7cc" },
  4: { catalogueCode: 4, name: "B Green", hex: "#123728" },
  5: { catalogueCode: 5, name: "Sea Green", hex: "#3eb9b1" },
  6: { catalogueCode: 6, name: "Maroon", hex: "#721528" },
  9: { catalogueCode: 9, name: "Yellow", hex: "#f2ef19" },
  10: { catalogueCode: 10, name: "G Melange", hex: "#a5a7a6" },
  11: { catalogueCode: 11, name: "Black", hex: "#101516" },
  12: { catalogueCode: 12, name: "Wine", hex: "#32121e" },
  16: { catalogueCode: 16, name: "Grey", hex: "#969997" },
  17: { catalogueCode: 17, name: "Red", hex: "#bd1f2b" },
  18: { catalogueCode: 18, name: "Royal", hex: "#293b9b" },
  21: { catalogueCode: 21, name: "Gold", hex: "#f4c20d" },
  22: { catalogueCode: 22, name: "P Green", hex: "#2b7a2f" },
  26: { catalogueCode: 26, name: "Black Melange", hex: "#33403e" },
} satisfies Record<number, ProductColour>;

function colours(...codes: Array<keyof typeof catalogueColours>) {
  return codes.map((code) => catalogueColours[code]);
}

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
    id: "round-neck-tshirt", slug: "round-neck-tshirt", name: "Round Neck T-Shirt", category: "apparel", image: "/images/products/round-neck-tshirt-yellow-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/round-neck-tshirt-yellow-three-quarter-left.webp", alt: "Male model wearing the yellow round neck T-shirt at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/round-neck-tshirt-yellow-back.webp", alt: "Back view of the yellow round neck T-shirt", caption: "Back view" },
      { src: "/images/products/round-neck-tshirt-yellow-three-quarter-right.webp", alt: "Alternate three-quarter view of the yellow round neck T-shirt", caption: "Alternate angle" },
      { src: "/images/products/round-neck-tshirt-yellow-portrait.webp", alt: "Portrait view of a male model wearing the yellow round neck T-shirt", caption: "Portrait view" },
      { src: "/images/products/round-neck-tshirt-yellow-detail.webp", alt: "Close view of the yellow round neckline and fabric texture", caption: "Neckline and fabric detail" },
      { src: "/images/products/round-neck-tshirt-yellow-womens-fit.webp", alt: "Female model wearing the yellow round neck T-shirt", caption: "Women's fit" },
      { src: "/images/products/round-neck-tshirt-yellow-lifestyle.webp", alt: "Full-length lifestyle view of the yellow round neck T-shirt", caption: "Lifestyle view" },
    ], availableColours: colours(1, 2, 10, 11, 17), description: descriptions.apparel, priceOptions: [75, 200, 300], featured: true
  },
  {
    id: "collar-tshirt", slug: "collar-tshirt", name: "Collar T-Shirt", category: "apparel", image: "/images/products/collar-tshirt-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/collar-tshirt-side.webp", alt: "Model wearing the green collar T-shirt from the side", caption: "Side view" },
      { src: "/images/products/collar-tshirt-angle.webp", alt: "Model wearing the green collar T-shirt at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/collar-tshirt-back.webp", alt: "Back view of the green collar T-shirt", caption: "Back view" },
      { src: "/images/products/collar-tshirt-detail.webp", alt: "Close view of the green collar, buttons and fabric texture", caption: "Collar and fabric detail" },
      { src: "/images/products/collar-tshirt-lifestyle.webp", alt: "Full-length lifestyle view of the green collar T-shirt", caption: "Lifestyle view" },
    ], availableColours: colours(1, 2, 3, 4, 5, 6, 12, 16, 9, 11, 18, 10, 21, 22, 26, 17), description: descriptions.apparel, priceOptions: [150, 220, 450], featured: true
  },
  { id: "sweat-shirts", slug: "sweat-shirts", name: "Sweat Shirts", category: "apparel",
    image: "/images/products/sweat-shirts-front.png", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/sweat-shirts-angle.png", alt: "Model wearing the black sweat shirt from the side", caption: "Side view" },
      { src: "/images/products/sweat-shirts-three-quarter.png", alt: "Model wearing the black sweat shirt at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/sweat-shirts-back.png", alt: "Back view of the black sweat shirt", caption: "Back view" },
      { src: "/images/products/sweat-shirts-detail.png", alt: "Close view of the black sweat shirt, buttons and fabric texture", caption: "Sweat shirt and fabric detail" },
      { src: "/images/products/sweat-shirts-lifestyle.png", alt: "Full-length lifestyle view of the black sweat shirt", caption: "Lifestyle view" },
    ], availableColours: colours(1, 2, 10, 11), description: descriptions.apparel, priceOptions: [400, 450] },
  {
    id: "hoodies", slug: "hoodies", name: "Hoodies", category: "apparel", image: "/images/products/hoodie-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/hoodie-lifestyle.webp", alt: "Full-length lifestyle view of the black hoodie", caption: "Lifestyle view" },
      { src: "/images/products/hoodie-three-quarter.webp", alt: "Model wearing the black hoodie at a three-quarter angle", caption: "Three-quarter view" },
      { src: "/images/products/hoodie-back.webp", alt: "Back view of the black hoodie", caption: "Back view" },
      { src: "/images/products/hoodie-hood-up.webp", alt: "Model wearing the black hoodie with the hood up", caption: "Hood-up view" },
      { src: "/images/products/hoodie-detail.webp", alt: "Close view of the black hood and fabric texture", caption: "Hood and fabric detail" },
    ], availableColours: colours(1, 2, 10, 11, 21), description: descriptions.apparel, priceOptions: [450, 550, 650], featured: true
  },
  { id: "pants", slug: "pants", name: "Pants", category: "apparel", image: "/images/products/pants-navy-lifestyle.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
    { src: "/images/products/pants-navy-front.webp", alt: "Front view of the navy drawstring pants", caption: "Front view" },
    { src: "/images/products/pants-navy-angle.webp", alt: "Three-quarter view of the navy drawstring pants", caption: "Three-quarter view" },
    { src: "/images/products/pants-navy-back.webp", alt: "Back view of the navy drawstring pants", caption: "Back view" },
  ], availableColours: colours(1, 2, 10, 11, 21), description: descriptions.apparel, priceOptions: [495] },
  {
    id: "jacket",
    slug: "jacket",
    name: "Jacket",
    category: "apparel",
    image: "/images/products/jacket-olive.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    description: "A sleeveless utility-style jacket with a zip front and multiple pockets for teamwear, field use and branded requirements.",
    priceOnRequest: true,
  },

  {
    id: "smart-caps", slug: "smart-caps", name: "Smart Caps", category: "caps", image: "/images/products/smart-cap-black-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/smart-caps.webp", alt: "Front view of the burgundy smart cap", caption: "Burgundy front view" },
      { src: "/images/products/smart-caps-2.webp", alt: "Side view of the burgundy smart cap", caption: "Side view" },
    ], description: descriptions.cap, priceOptions: [65]
  },
  {
    id: "flexible-caps", slug: "flexible-caps", name: "Flexible Caps", category: "caps", image: "/images/products/flexible-cap-red-front.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/flexible-cap-royal-blue-front.webp", alt: "Front view of the royal blue flexible cap", caption: "Royal blue" },
      { src: "/images/products/flexible-cap-sky-blue-front.webp", alt: "Front view of the sky blue flexible cap", caption: "Sky blue" },
      { src: "/images/products/flexible-cap-navy-front.webp", alt: "Front view of the navy flexible cap", caption: "Navy" },
      { src: "/images/products/flexible-cap-brown-front.webp", alt: "Front view of the brown flexible cap", caption: "Brown" },
      { src: "/images/products/flexible-cap-beige-front.webp", alt: "Front view of the beige flexible cap", caption: "Beige" },
      { src: "/images/products/flexible-caps.webp", alt: "Front view of the yellow flexible cap", caption: "Yellow" },
      { src: "/images/products/flexible-caps-2.webp", alt: "Alternate front view of the yellow flexible cap", caption: "Yellow alternate view" },
    ], description: descriptions.cap, priceOptions: [85]
  },
  { id: "foldable-caps", slug: "foldable-caps", name: "Foldable Caps", category: "caps", image: "/images/products/foldable-cap-navy-angle.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.cap, priceOptions: [250] },
  { id: "button-fridge-magnet", slug: "button-fridge-magnet", name: "Button Fridge Magnet", category: "fridge-magnets", image: "/images/products/button-fridge-magnet.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.magnet, priceOptions: [45] },
  {
    id: "acrylic-fridge-magnet",
    slug: "acrylic-fridge-magnet",
    name: "Acrylic Fridge Magnet",
    category: "fridge-magnets",
    image: "/images/products/acrylic-fridge-magnet.webp",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    gallery: [
      {
        src: "/images/products/acrylic-fridge-magnet-goa.webp",
        alt: "Goa-themed custom acrylic fridge magnet held in a hand",
        caption: "Finished acrylic magnet example",
      },
    ],
    description: "A custom acrylic keepsake for destination souvenirs, events, campaigns and branded reminders.",
    priceOptions: [65],
  },

  { id: "satin-keychain", slug: "satin-keychain", name: "Satin Keychain", category: "keychains-gifts", image: "/images/products/satin-keychain-lanyards.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
    { src: "/images/products/satin-keychain-wristlets.webp", alt: "Collection of printed satin wristlet keychains", caption: "Wristlet styles" },
  ], description: descriptions.gift, priceOptions: [15], moq: 500 },
  { id: "wooden-keychain", slug: "wooden-keychain", name: "Wooden Keychain", category: "keychains-gifts", image: "/images/products/wooden-keychain.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "Wood-finish keychains in multiple shapes for logos, names and custom branded gifting.", priceOptions: [55], moq: 50 },
  { id: "leather-keychain", slug: "leather-keychain", name: "Leather Keychain", category: "keychains-gifts", image: "/images/products/leather-keychain.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "Leather-loop keychains in a selection of colours with a metal ring and snap detail for custom branding.", priceOptions: [55] },
  { id: "button-keychain", slug: "button-keychain", name: "Button Keychain", category: "keychains-gifts", image: "/images/products/button-keychain.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A round button keychain shown from the front and back, ready for a custom design or brand requirement.", priceOptions: [35], moq: 50 },
  { id: "acrylic-keychain", slug: "acrylic-keychain", name: "Acrylic Keychain", category: "keychains-gifts", image: "/images/products/acrylic-keychain.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "Custom-shaped acrylic keychains that turn logos, symbols and artwork into practical branded keepsakes.", priceOptions: [45], moq: 50, featured: true },
  { id: "mementoes", slug: "mementoes", name: "Mementoes", category: "keychains-gifts", image: "/images/products/mementoes-elephant-display.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.gift, priceOptions: [899] },

  { id: "mug", slug: "mug", name: "Mug", category: "drinkware", image: "/images/products/mug.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.drinkware, priceOptions: [160], featured: true },
  {
    id: "uv-bottle-500ml",
    slug: "uv-bottle-500ml",
    name: "UV Bottle — 500 ml",
    category: "drinkware",
    image: "/images/products/uv-bottle-white-pair.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    gallery: [
      { src: "/images/products/corporate-gift-black-bottle.png", alt: "Single black UV bottle with a stainless-steel cap and carry strap", caption: "Black bottle" },
      { src: "/images/products/bottle.png", alt: "UV bottles displayed in a range of colours and sizes", caption: "Colour and size options" },
    ],
    description: descriptions.drinkware,
    priceOptions: [260],
  },
  {
    id: "uv-bottle-750ml",
    slug: "uv-bottle-750ml",
    name: "UV Bottle — 750 ml",
    category: "drinkware",
    image: "/images/products/corporate-gift-black-bottle.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    gallery: [
      { src: "/images/products/uv-bottle-white-pair.png", alt: "Pair of white UV bottles with stainless-steel caps", caption: "White bottle pair" },
      { src: "/images/products/bottle.png", alt: "UV bottles displayed in a range of colours and sizes", caption: "Colour and size options" },
    ],
    description: descriptions.drinkware,
    priceOptions: [280],
    featured: true,
  },
  {
    id: "uv-bottle-1-litre",
    slug: "uv-bottle-1-litre",
    name: "UV Bottle — 1 Litre",
    category: "drinkware",
    image: "/images/products/bottle.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    gallery: [
      { src: "/images/products/corporate-gift-black-bottle.png", alt: "Single black UV bottle with a stainless-steel cap and carry strap", caption: "Black bottle" },
      { src: "/images/products/uv-bottle-white-pair.png", alt: "Pair of white UV bottles with stainless-steel caps", caption: "White bottle pair" },
    ],
    description: descriptions.drinkware,
    priceOptions: [320],
  },

  { id: "diary", slug: "diary", name: "Diary", category: "stationery", image: "/images/products/diary.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.stationery, priceOptions: [150], moq: 10, featured: true },
  {
    id: "metal-pen", slug: "metal-pen", name: "Custom Metal Pen", category: "stationery", image: "/images/products/metal-pen.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/metal-pen-2.webp", alt: "Black metal pen showing engraving positions and finish details", caption: "Custom engraving preview" },
    ], description: descriptions.stationery, priceOptions: [65], moq: 50
  },
  { id: "uv-stickers", slug: "uv-stickers", name: "UV Stickers", category: "stationery", image: "/images/products/uv-stickers.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "Colourful UV stickers prepared in custom shapes for products, devices, packaging and promotional applications.", priceOptions: [30], pricingNote: "Client artwork also references approximately ₹4.25 per sq inch; confirm final specification." },
  { id: "bookmark", slug: "bookmark", name: "Bookmark", category: "stationery", image: "/images/products/bookmark-collection.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A compact printed format for reader-focused gifts, events and memorable brand reminders.", priceOptions: [4.5] },
  {
    id: "leather-wrist-band",
    slug: "leather-wrist-band",
    name: "Leather Wrist Band",
    category: "stationery",
    image: "/images/products/leather-wrist-band.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    description: "A leather wrist band with an adjustable snap fastening for gift, event and branded requirements.",
    priceOptions: [40],
    unit: "each",
  },
  {
    id: "paper-wrist-band",
    slug: "paper-wrist-band",
    name: "Paper Wrist Band",
    category: "stationery",
    image: "/images/products/paper-wrist-band.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    description: "A lightweight paper wrist band shown in red, orange and yellow for event and identification requirements.",
    priceOptions: [5.5],
    unit: "each",
  },
  {
    id: "fabric-wrist-band",
    slug: "fabric-wrist-band",
    name: "Fabric Wrist Band",
    category: "stationery",
    image: "/images/products/fabric-wrist-band.png",
    preserveImageColors: true,
    galleryDisplay: "thumbnails",
    description: "A fabric wrist band with an adjustable slider, shown in multiple colours for event and campaign requirements.",
    priceOptions: [8.5],
    unit: "each",
  },
  { id: "button-badge", slug: "button-badge", name: "Button Badge", category: "stationery", image: "/images/products/button-badge.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.stationery, priceOptions: [20, 25], pricingNote: "₹20 — MOQ 100 · ₹25 — MOQ 50. Option details to be confirmed." },
  { id: "sticker-a5-custom-cut", slug: "sticker-a5-custom-cut", name: "Custom-Cut Stickers — A5", category: "stationery", image: "/images/products/custom-cut-stickers.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "Custom-cut stickers prepared on an A5 format for product labels, packaging, gifts and branded applications.", priceOptions: [40], moq: 100 },
  { id: "lanyard-tag", slug: "lanyard-tag", name: "Laneyard Tag", category: "stationery", image: "/images/products/lanyard-tag.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A custom printed laneyard option with a metal clip, shown in black, blue, red and yellow for branded identification requirements.", priceOptions: [35] },

  {
    id: "miss-india-sachet", slug: "miss-india-sachet", name: "Miss India Sachet", category: "sachets", image: "/images/products/miss-india-sachet.webp", preserveImageColors: true, galleryDisplay: "thumbnails", gallery: [
      { src: "/images/products/miss-india-sachet-2.webp", alt: "White, red and gold sachets displayed on black dress forms", caption: "White, red and gold options" },
      { src: "/images/products/miss-india-sachet-3.webp", alt: "White, blue and gold sachets displayed on black dress forms", caption: "White, blue and gold options" },
    ], description: descriptions.sachet, priceOptions: [160]
  },

  { id: "tote-bag", slug: "tote-bag", name: "Tote Bag", category: "bags-accessories", image: "/images/products/tote-bag.webp", preserveImageColors: true, galleryDisplay: "thumbnails", availableColours: colours(1, 2), description: descriptions.bag, priceOptions: [12.5, 16.5, 55, 75, 125, 170], featured: true },
  { id: "jute-bag", slug: "jute-bag", name: "Jute Bag", category: "bags-accessories", image: "/images/products/jute-bag-structured.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A structured jute carry bag with twin handles and a broad front area for branded requirements.", priceOptions: [60, 90, 110, 160] },
  { id: "jute-pouch", slug: "jute-pouch", name: "Jute Pouches", category: "bags-accessories", image: "/images/products/jute-pouches-colours.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "Drawstring jute pouches shown in multiple colours for gifting, packaging and branded presentation.", priceOptions: [8.5, 12.5, 14.5] },
  { id: "backpack", slug: "backpack", name: "Backpack", category: "bags-accessories", image: "/images/products/backpack.webp", preserveImageColors: true, galleryDisplay: "thumbnails", description: descriptions.bag, priceOptions: [430] },
  { id: "laptop-bag", slug: "laptop-bag", name: "Laptop Bag", category: "bags-accessories", image: "/images/products/laptop-bag-black.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A structured black laptop backpack with padded shoulder straps, multiple zipped compartments and a broad front area for branded requirements.", priceOptions: [999] },
  { id: "trolley", slug: "trolley", name: "Trolley", category: "bags-accessories", image: "/images/products/trolley.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A compact hard-shell trolley with a telescopic handle and four-wheel base for travel and gifting requirements.", priceOptions: [3500] },

  { id: "custom-flags", slug: "custom-flags", name: "Custom Flags", category: "other-products", image: "/images/products/custom-flags-new.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A custom printed flag format for events, teams, institutions and branded display requirements.", priceOptions: [60, 400, 600], featured: true },
  { id: "umbrella", slug: "umbrella", name: "Umbrella", category: "other-products", image: "/images/products/umbrella-black.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A full-size black umbrella for practical gifting, event and branded merchandise requirements.", priceOptions: [600] },
  { id: "mysuru-shalya", slug: "mysuru-shalya", name: "Mysuru Shalya", category: "other-products", image: "/images/products/mysuru-shalya.png", preserveImageColors: true, galleryDisplay: "thumbnails", description: "A ceremonial Mysuru shalya with an ornate woven border and tassel finish, available in a selection of traditional colourways.", priceOptions: [110] },
];

export function getProduct(category: string, slug: string) {
  return products.find((product) => product.category === category && product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export const featuredProducts = products.filter((product) => product.featured);
