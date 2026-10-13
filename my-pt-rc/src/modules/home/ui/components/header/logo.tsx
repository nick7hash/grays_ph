import Image from "next/image";
import Link from "next/link";
import WordRotate from "../word-rotate";
import { siteConfig } from "@/site.config";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={22}
        height={15}
        className="object-contain dark:invert"
        style={{ width: "auto", height: 18 }}
        priority
      />
      <WordRotate
        label={siteConfig.name}
        label2={siteConfig.tagline}
        style="font-medium uppercase"
      />
    </Link>
  );
};

export default Logo;
