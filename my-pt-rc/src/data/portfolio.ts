/**
 * Static portfolio content for Grays Photography.
 * Public pages use this data so the site works without CMS/DB setup.
 */

export type PortfolioCategory = {
  id: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
};

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  /** Optional image for the services left panel / cards */
  image: string;
};

export const featuredSlides = [
  { src: "/work/featured/hero.jpg", alt: "Grays Photography featured work" },
  { src: "/work/featured/food-1.jpg", alt: "Food photography" },
  { src: "/work/featured/clothing-1.jpg", alt: "Apparel lookbook" },
  { src: "/work/featured/ecommerce-1.jpg", alt: "Product photography" },
  { src: "/work/featured/lifestyle-1.jpg", alt: "Lifestyle photography" },
  { src: "/work/featured/cafe-2.jpg", alt: "Cafe atmosphere" },
  { src: "/work/featured/restaurant-5.jpg", alt: "Restaurant dining" },
];

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "food",
    title: "Food & Beverage",
    description: "Culinary campaigns for hospitality brands",
    cover: "/work/food/food-1.jpg",
    images: [
      "/work/food/food-1.jpg",
      "/work/food/food-2.jpg",
      "/work/food/food-3.jpg",
      "/work/food/food-4.jpg",
    ],
  },
  {
    id: "restaurant",
    title: "Restaurants & Cafes",
    description: "Menus, cocktails, and dining ambiance",
    cover: "/work/restaurant/cafe-2.jpg",
    images: [
      "/work/restaurant/cafe-2.jpg",
      "/work/restaurant/cafe-3.jpg",
      "/work/restaurant/cafe-4.jpg",
      "/work/restaurant/cafe-5.jpg",
      "/work/restaurant/cafe-6.jpg",
      "/work/restaurant/restaurant-5.jpg",
      "/work/restaurant/restaurant-6.jpg",
    ],
  },
  {
    id: "apparel",
    title: "Lifestyle & Apparel",
    description: "Lookbooks, streetwear, and garment detail",
    cover: "/work/apparel/clothing-1.jpg",
    images: [
      "/work/apparel/clothing-1.jpg",
      "/work/apparel/clothing-2.jpg",
      "/work/apparel/clothing-3.jpg",
      "/work/apparel/clothing-4.jpg",
      "/work/apparel/clothing-5.jpg",
      "/work/apparel/clothing-6.jpg",
      "/work/apparel/ling-1.jpg",
      "/work/apparel/ling-2.jpg",
      "/work/apparel/ling-3.jpg",
      "/work/apparel/ling-4.jpg",
      "/work/apparel/ling-5.jpg",
      "/work/apparel/ling-6.jpg",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Product",
    description: "Packshots and stylized catalog imagery",
    cover: "/work/ecommerce/ecommerce-1.jpg",
    images: [
      "/work/ecommerce/ecommerce-1.jpg",
      "/work/ecommerce/ecommerce-2.jpg",
      "/work/ecommerce/ecommerce-3.jpg",
      "/work/ecommerce/ecommerce-4.jpg",
      "/work/ecommerce/ecommerce-5.jpg",
      "/work/ecommerce/ecommerce-6.jpg",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle Editorial",
    description: "Brand stories and atmospheric campaigns",
    cover: "/work/lifestyle/lifestyle-1.jpg",
    images: [
      "/work/lifestyle/lifestyle-1.jpg",
      "/work/lifestyle/lifestyle-2.jpg",
      "/work/lifestyle/lifestyle-3.jpg",
      "/work/lifestyle/lifestyle-4.jpg",
      "/work/lifestyle/lifestyle-41.jpg",
      "/work/lifestyle/lifestyle-5.jpg",
      "/work/lifestyle/lifestyle-6.jpg",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Restaurant, Food & Beverage",
    description:
      "Culinary photography crafted for hospitality brands. Full menu campaigns, table layouts, artisanal cocktails, and atmospheric dining ambiance.",
    tags: [
      "Restaurants & Cafes",
      "Menu Overhauls",
      "Cocktails & Bar",
      "Food Styling",
    ],
    image: "/work/food/food-1.jpg",
  },
  {
    number: "02",
    title: "Lifestyle & Apparel Lookbooks",
    description:
      "High-fashion and streetwear lookbooks. Model direction, natural and studio lighting setups, and garment texture detail shots.",
    tags: [
      "Apparel Brands",
      "Seasonal Lookbooks",
      "E-Commerce Fashion",
      "Studio & Location",
    ],
    image: "/work/apparel/clothing-1.jpg",
  },
  {
    number: "03",
    title: "E-Commerce & Product Photography",
    description:
      "Clean, color-accurate, high-conversion product photography for D2C brands, marketplaces, and digital catalogs. Pure white packshots and stylized brand editorial.",
    tags: [
      "D2C Catalog Imagery",
      "Amazon & Webstore Packshots",
      "Macro Texture & Detail",
      "Ghost Mannequin & Flat Lay",
    ],
    image: "/work/ecommerce/ecommerce-1.jpg",
  },
  {
    number: "04",
    title: "Short-Form Video & Reels",
    description:
      "Dynamic 4K vertical video directed for Instagram reels and digital ads. Paced, color-graded, and delivered with audio design ready to publish.",
    tags: [
      "Instagram Reels",
      "Brand Teasers",
      "Food Prep Videos",
      "Social Campaigns",
    ],
    image: "/work/lifestyle/lifestyle-2.jpg",
  },
  {
    number: "05",
    title: "PR, Events & Commercial Brand Shoots",
    description:
      "Editorial documentation for brand launches, hospitality openings, pharmaceutical summits, and corporate milestones.",
    tags: [
      "Brand Launches",
      "Hospitality Events",
      "PR Agencies",
      "Corporate Milestones",
    ],
    image: "/work/restaurant/cafe-3.jpg",
  },
];

export function getCategoryById(id: string) {
  return portfolioCategories.find((c) => c.id === id);
}
