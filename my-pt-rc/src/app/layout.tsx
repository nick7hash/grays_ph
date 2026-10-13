import type { Metadata, Viewport } from "next";
import "./globals.css";

import { TRPCReactProvider } from "@/trpc/client";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeColorMeta } from "@/components/theme-color-meta";
import { siteConfig } from "@/site.config";
// Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  creator: "nikihashi",
  other: {
    "made-by": "nikihashi",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-crafted-by="nikihashi" suppressHydrationWarning>
      <body className={`${readexPro.className} antialiased`}>
        {/*
          ┌─────────────────────────────────────────┐
          │  made by nikihashi                      │
          │  hidden credit — visible in view-source │
          └─────────────────────────────────────────┘
        */}
        <div
          hidden
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: "<!-- made by nikihashi -->",
          }}
        />
        <NuqsAdapter>
          <TRPCReactProvider>
            <ThemeProvider attribute="class">
              <ThemeColorMeta />
              <Toaster />
              {children}
            </ThemeProvider>
          </TRPCReactProvider>
        </NuqsAdapter>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
