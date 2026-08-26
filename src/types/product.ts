export type ProductCategory =
  | "apparel"
  | "caps"
  | "fridge-magnets"
  | "keychains-gifts"
  | "drinkware"
  | "stationery"
  | "sachets"
  | "bags-accessories"
  | "other-products";

export type ProductImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProductColour = {
  catalogueCode: number;
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image?: string;
  preserveImageColors?: boolean;
  galleryDisplay?: "grid" | "thumbnails";
  gallery?: ProductImage[];
  availableColours?: ProductColour[];
  description: string;
  priceOptions?: number[];
  moq?: number;
  unit?: string;
  featured?: boolean;
  priceOnRequest?: boolean;
  pricingNote?: string;
  labelPendingConfirmation?: boolean;
};

export type Category = {
  slug: ProductCategory;
  name: string;
  shortName: string;
  description: string;
  image?: string;
  tone: "ink" | "cream" | "blue" | "paper";
};
