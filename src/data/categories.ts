import type { Category } from "@/src/types/product";

export const categories: Category[] = [
  {
    slug: "apparel",
    name: "Apparel",
    shortName: "Apparel",
    description: "T-shirts, sweatshirts, hoodies and everyday teamwear ready for your identity.",
    image: "/images/products/round-neck-tshirt.jpg",
    tone: "cream",
  },
  {
    slug: "caps",
    name: "Caps",
    shortName: "Caps",
    description: "Smart, flexible, foldable and premium caps for teams, events and campaigns.",
    image: "/images/products/cap.jpg",
    tone: "ink",
  },
  {
    slug: "fridge-magnets",
    name: "Fridge Magnets",
    shortName: "Magnets",
    description: "Small-format branded keepsakes that stay visible long after the moment.",
    image: "/images/products/fridge-magnet.jpg",
    tone: "paper",
  },
  {
    slug: "keychains-gifts",
    name: "Keychains & Gifts",
    shortName: "Keychains & Gifts",
    description: "Useful desk and pocket pieces, from keychains and pens to diaries and mementoes.",
    image: "/images/products/keychain.jpg",
    tone: "blue",
  },
  {
    slug: "drinkware",
    name: "Drinkware",
    shortName: "Drinkware",
    description: "Mugs and UV bottles made for daily routines and visible brand recall.",
    image: "/images/products/bottle.jpg",
    tone: "ink",
  },
  {
    slug: "stationery",
    name: "Stickers, Badges & Stationery",
    shortName: "Stationery",
    description: "Flexible, expressive formats for events, packaging, teams and promotions.",
    image: "/images/products/diary.jpg",
    tone: "paper",
  },
  {
    slug: "bags-accessories",
    name: "Bags & Accessories",
    shortName: "Bags",
    description: "Totes, jute bags, pouches, backpacks and carry pieces designed to travel.",
    image: "/images/products/tote-bag.jpg",
    tone: "cream",
  },
  {
    slug: "other-products",
    name: "Other Products",
    shortName: "Other",
    description: "Flags, fabric frames, umbrellas and custom formats for the brief beyond the usual.",
    image: "/images/products/custom-flag.jpg",
    tone: "blue",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
