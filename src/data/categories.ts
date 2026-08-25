import type { Category } from "@/src/types/product";

export const categories: Category[] = [
  {
    slug: "apparel",
    name: "Apparel",
    shortName: "Apparel",
    description: "T-shirts, sweatshirts, hoodies and everyday teamwear ready for your identity.",
    image: "/images/products/round-neck-tshirt-front.webp",
    tone: "cream",
  },
  {
    slug: "caps",
    name: "Caps",
    shortName: "Caps",
    description: "Smart, flexible, foldable and premium caps for teams, events and campaigns.",
    image: "/images/products/smart-caps.webp",
    tone: "ink",
  },
  {
    slug: "fridge-magnets",
    name: "Fridge Magnets",
    shortName: "Magnets",
    description: "Small-format branded keepsakes that stay visible long after the moment.",
    image: "/images/products/metal-fridge-magnet.webp",
    tone: "paper",
  },
  {
    slug: "keychains-gifts",
    name: "Keychains & Gifts",
    shortName: "Keychains & Gifts",
    description: "Useful desk and pocket pieces, from custom keychains to recognition mementoes.",
    image: "/images/products/wooden-keychain.webp",
    tone: "blue",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    shortName: "Drinkware",
    description: "Mugs and UV bottles made for daily routines and visible brand recall.",
    image: "/images/products/uv-bottle-500ml.webp",
    tone: "ink",
  },
  {
    slug: "stationery",
    name: "Stickers, Badges & Stationery",
    shortName: "Stationery",
    description: "Custom diaries, pens, stickers and branded desk essentials for teams, events and gifting.",
    image: "/images/products/diary.webp",
    tone: "paper",
  },
  {
    slug: "sachets",
    name: "Sachets & Sashes",
    shortName: "Sachets",
    description: "Custom pageant and event sachets available in a selection of colours and finishes.",
    image: "/images/products/miss-india-sachet.webp",
    tone: "cream",
  },
  {
    slug: "bags-accessories",
    name: "Bags & Accessories",
    shortName: "Bags",
    description: "Totes, jute bags, pouches, backpacks and carry pieces designed to travel.",
    image: "/images/products/tote-bag.webp",
    tone: "cream",
  },
  {
    slug: "other-products",
    name: "Other Products",
    shortName: "Other",
    description: "Flags, fabric frames, umbrellas and custom formats for the brief beyond the usual.",
    image: "/images/products/custom-flags.webp",
    tone: "blue",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
