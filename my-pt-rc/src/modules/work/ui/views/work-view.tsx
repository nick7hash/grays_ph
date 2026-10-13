"use client";

import Image from "next/image";
import Link from "next/link";
import CardContainer from "@/components/card-container";
import Footer from "@/components/footer";
import VectorCombined from "@/components/vector-combined";
import { portfolioCategories } from "@/data/portfolio";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const WorkView = () => {
  const hero = portfolioCategories[0];

  return (
    <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full">
      <div className="w-full h-[50vh] lg:w-1/2 lg:fixed lg:top-0 lg:left-0 md:h-[80vh] lg:h-screen p-0 lg:p-3">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={hero.cover}
            alt={hero.title}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
            quality={75}
            priority
          />
          <div className="absolute right-0 bottom-0">
            <VectorCombined title="Work" position="bottom-right" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2" />

      <div className="w-full lg:w-1/2 space-y-3 pb-3">
        <CardContainer>
          <div className="flex flex-col p-12 gap-[96px]">
            <h1 className="text-3xl">Work</h1>
            <div className="flex flex-col gap-4 font-light">
              <p>
                A selection of commercial work across food &amp; beverage,
                apparel lookbooks, product catalogs, and lifestyle editorial.
              </p>
            </div>
          </div>
        </CardContainer>

        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-3">
          {portfolioCategories.map((category) => (
            <Link
              key={category.id}
              href={`/work/${category.id}`}
              className="group relative rounded-xl overflow-hidden bg-muted"
            >
              <AspectRatio ratio={0.75 / 1}>
                <Image
                  src={category.cover}
                  alt={category.title}
                  fill
                  sizes="(max-width: 1279px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  quality={65}
                />
              </AspectRatio>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-white text-lg font-light">
                  {category.title}
                </h2>
                <p className="text-white/70 text-sm font-light mt-1">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};
