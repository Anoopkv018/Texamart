export type ProductCategory =
  | "apparel"
  | "caps"
  | "fridge-magnets"
  | "keychains-gifts"
  | "drinkware"
  | "stationery"
  | "bags-accessories"
  | "other-products";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  image?: string;
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
