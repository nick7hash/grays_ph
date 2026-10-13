"use client";

import Image from "next/image";
import Carousel from "@/components/photo-carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { featuredSlides } from "@/data/portfolio";
import { siteConfig } from "@/site.config";

export const SliderView = () => {
  return (
    <>
      {/* Mobile: single head image */}
      <div className="absolute inset-0 lg:hidden bg-black">
        <Image
          src={siteConfig.images.headMobile}
          alt={`${siteConfig.brand} featured work`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Desktop: carousel */}
      <div className="hidden lg:block absolute inset-0 bg-black">
        <Carousel
          className="absolute inset-0 w-full h-full"
          containerClassName="h-full"
        >
          {featuredSlides.map((slide, index) => {
            const isFirstSlide = index === 0;
            // First slide is a wide graphic — serve the original file (no
            // optimizer recompress) so it stays as sharp as the source allows.
            const isHeroGraphic = isFirstSlide;

            return (
              <div
                key={slide.src}
                className="flex-[0_0_100%] h-full relative [backface-visibility:hidden] [transform:translateZ(0)]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes={
                    isHeroGraphic
                      ? "(max-width: 1023px) 100vw, 60vw"
                      : "(max-width: 1023px) 100vw, 50vw"
                  }
                  loading={isFirstSlide ? "eager" : "lazy"}
                  fetchPriority={isFirstSlide ? "high" : undefined}
                  className="object-cover object-center"
                  quality={100}
                  priority={isFirstSlide}
                  unoptimized={isHeroGraphic}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export const SliderViewLoadingStatus = () => {
  return (
    <div className="w-full lg:w-1/2 h-[70vh] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3">
      <Skeleton className="w-full h-full rounded-xl" />
    </div>
  );
};
