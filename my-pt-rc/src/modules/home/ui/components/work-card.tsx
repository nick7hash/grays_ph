"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VectorTopLeftAnimation from "./vector-top-left-animation";

interface Props {
  id: string;
  title: string;
  cover: string;
}

const WorkCard = ({ id, title, cover }: Props) => {
  const router = useRouter();

  return (
    <div
      className="w-full relative group cursor-pointer"
      onClick={() => router.push(`/work/${id}`)}
    >
      <AspectRatio
        ratio={0.75 / 1}
        className="overflow-hidden rounded-lg relative"
      >
        <Image
          src={cover}
          alt={title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 33vw"
          quality={65}
          className="object-cover lg:group-hover:blur-xs lg:transition-[filter] lg:duration-300 lg:ease-out"
        />
      </AspectRatio>

      <div className="absolute top-0 left-0 z-20">
        <VectorTopLeftAnimation title={title} />
      </div>
    </div>
  );
};

export default WorkCard;
