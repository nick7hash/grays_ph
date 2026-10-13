/**
 * ============================================================================
 * SITE CONFIGURATION — Grays Photography
 * ============================================================================
 */

import type { ContactCardTitle } from "@/components/contact-card";

export const siteConfig = {
  /** Site name used in metadata, logo, and branding */
  name: "Grays",

  /** Tagline shown on logo hover */
  tagline: "photography",

  /** Photographer full name */
  fullName: "Nitin Singh Sandhu",

  /** Your role/title shown in profile cards and footer */
  role: "Photographer & Visual Storyteller",

  /** Brand name */
  brand: "Grays Photography",

  /** Short bio shown on the home page profile card */
  bio: "Photography began as a passion, and became the profession I am proud to build every day. I create visual work with a friendly, personal approach, from food and lifestyle to apparel, events, PR, and marketing content.",

  /** Avatar / thumbnail — brand logo */
  avatar: "/logo.png",

  /** Initials used as avatar fallback */
  initials: "NS",

  /** About page images */
  images: {
    about: "/about.png",
    aboutMobile: "/mobile_about.jpeg",
    head: "/work/featured/hero.jpg",
    headMobile: "/mobile_head.jpeg",
  },

  /** Site metadata for SEO */
  metadata: {
    title: {
      template: "%s - Grays Photography",
      default: "Grays Photography",
    },
    description:
      "Grays Photography by Nitin Singh Sandhu — commercial photography for food, fashion, product, and brand campaigns in Chandigarh.",
  },

  /** Social links — Instagram + WhatsApp only */
  socialLinks: [
    {
      title: "Instagram",
      href: "https://www.instagram.com/graysbynitin",
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/918264531881",
      primary: true,
    },
  ] as { title: ContactCardTitle; href: string; primary?: boolean }[],

  /** Footer attribution */
  footer: {
    designCredit: {
      name: "Designer",
      href: "#",
    },
    poweredBy: {
      name: "Grays Photography",
      href: "/",
    },
  },

  mapbox: {
    lightStyle: "mapbox://styles/mapbox/light-v11",
    darkStyle: "mapbox://styles/mapbox/dark-v11",
  },

  /** Use Next.js built-in image optimization with local assets */
  imageLoader: "default" as "cloudflare" | "default",

  gear: [
    { brand: "SONY", model: "Alpha Series" },
    { brand: "Canon", model: "RF / EF Glass" },
    { brand: "Godox", model: "Studio Lighting" },
    { brand: "DJI", model: "Cinema / Aerial" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
