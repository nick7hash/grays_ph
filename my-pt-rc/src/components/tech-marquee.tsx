import Image from "next/image";
import { MarqueeCard } from "./marquee-card";

const brands = [
  { name: "Sony", src: "/Sony_logo.svg" },
  { name: "Canon", src: "/Canon_logo.svg" },
  { name: "Nikon", src: "/Nikon_Logo.svg" },
  { name: "Fujifilm", src: "/Fujifilm_logo.svg" },
  { name: "Leica", src: "/Leica_logo.svg" },
  { name: "Hasselblad", src: "/Hasselblad_logo.svg" },
  { name: "DJI", src: "/DJI_logo.svg" },
  { name: "Sigma", src: "/Sigma_logo.svg" },
  { name: "Lumix", src: "/Lumix_logo.svg" },
  { name: "Olympus", src: "/Olympus_logo.svg" },
];

const TechMarquee = () => {
  return (
    <div className="bg-muted flex items-center gap-12 p-8 rounded-xl">
      <h2 className="text-lg font-light shrink-0">Trusted gear</h2>

      <div className="relative flex-1 overflow-hidden">
        <MarqueeCard pauseOnHover className="[--duration:30s]">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center gap-3 px-4">
              <Image
                src={brand.src}
                alt={brand.name}
                width={88}
                height={28}
                className="h-7 w-auto object-contain opacity-80 dark:invert"
              />
            </div>
          ))}
        </MarqueeCard>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-muted"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-muted"></div>
      </div>
    </div>
  );
};

export default TechMarquee;
