"use client";

import Image from "next/image";
import Link from "next/link";
import CardContainer from "@/components/card-container";
import Footer from "@/components/footer";
import VectorCombined from "@/components/vector-combined";
import type { PortfolioCategory } from "@/data/portfolio";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  category: PortfolioCategory;
}

export const WorkCategoryView = ({ category }: Props) => {
  return (
    <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full">
      <div className="w-full h-[50vh] lg:w-1/2 lg:fixed lg:top-0 lg:left-0 md:h-[80vh] lg:h-screen p-0 lg:p-3">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={category.cover}
            alt={category.title}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
            quality={75}
            priority
          />
          <div className="absolute right-0 bottom-0">
            <VectorCombined title={category.title} position="bottom-right" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2" />

      <div className="w-full lg:w-1/2 space-y-3 pb-3">
        <CardContainer>
          <div className="flex flex-col p-12 gap-10">
            <Link
              href="/work"
              className="text-sm font-light text-text-muted hover:text-foreground transition-colors w-fit"
            >
              ← All work
            </Link>
            <h1 className="text-3xl">{category.title}</h1>
            <p className="font-light text-text-muted">{category.description}</p>
          </div>
        </CardContainer>

        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-3">
          {category.images.map((src) => (
            <div key={src} className="rounded-xl overflow-hidden bg-muted">
              <AspectRatio ratio={0.75 / 1}>
                <Image
                  src={src}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1279px) 100vw, 25vw"
                  className="object-cover"
                  quality={70}
                />
              </AspectRatio>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};
