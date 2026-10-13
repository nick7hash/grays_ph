"use client";

import { useState } from "react";
import Image from "next/image";
import CardContainer from "@/components/card-container";
import Footer from "@/components/footer";
import ContactCard from "@/components/contact-card";
import VectorCombined from "@/components/vector-combined";
import { services } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const ServicesView = () => {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full">
      {/* LEFT CONTENT - Fixed image */}
      <div className="w-full h-[50vh] lg:w-1/2 lg:fixed lg:top-0 lg:left-0 md:h-[80vh] lg:h-screen p-0 lg:p-3">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            key={current.image}
            src={current.image}
            alt={current.title}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover transition-opacity duration-500"
            quality={75}
            priority
          />
          <div className="absolute right-0 bottom-0">
            <VectorCombined title={current.number} position="bottom-right" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2" />

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-1/2 space-y-3 pb-3">
        <CardContainer>
          <div className="flex flex-col p-12 gap-[96px]">
            <h1 className="text-3xl">Services</h1>
            <div className="flex flex-col gap-4 font-light">
              <p>
                Commercial photography and short-form video for hospitality,
                apparel, D2C, and brand teams — from menu campaigns to lookbooks,
                packshots, reels, and event coverage.
              </p>
            </div>
          </div>
        </CardContainer>

        {services.map((service, index) => (
          <button
            key={service.number}
            type="button"
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
            className={cn(
              "w-full text-left rounded-xl transition-all duration-200",
              active === index
                ? "bg-primary text-white dark:text-black"
                : "bg-muted hover:bg-muted-foreground/10"
            )}
          >
            <div className="flex flex-col gap-6 p-8 lg:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className={cn(
                    "text-sm font-light tabular-nums",
                    active === index ? "opacity-70" : "text-text-muted"
                  )}
                >
                  {service.number}
                </span>
              </div>
              <h2 className="text-xl lg:text-2xl font-light leading-snug">
                {service.title}
              </h2>
              <p
                className={cn(
                  "text-[15px] font-light leading-relaxed",
                  active === index ? "opacity-80" : "text-text-muted"
                )}
              >
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "text-xs font-light px-3 py-1.5 rounded-full border",
                      active === index
                        ? "border-white/30 dark:border-black/30"
                        : "border-border text-text-muted"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}

        <div className="w-full grid grid-cols-2 gap-3 mt-3">
          <ContactCard
            title="Instagram"
            href="https://www.instagram.com/graysbynitin"
          />
          <ContactCard
            title="WhatsApp"
            href="https://wa.me/918264531881"
            className="bg-primary hover:bg-primary-hover text-white dark:text-black"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
};
