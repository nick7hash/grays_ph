import { type Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/footer";
import AboutCard from "../../../modules/home/ui/components/about-card";
import TechMarquee from "@/components/tech-marquee";
import CameraCard from "../../../modules/home/ui/components/camera-card";
import ProfileCard from "../../../modules/home/ui/components/profile-card";
import CardContainer from "@/components/card-container";
import VectorCombined from "@/components/vector-combined";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.fullName} — ${siteConfig.brand}`,
};

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full gap-3 pb-3">
      {/* Full-width about image first */}
      <div className="w-full h-[70vh] lg:h-[calc(100vh-1.5rem)] relative rounded-xl overflow-hidden">
        <Image
          src={siteConfig.images.aboutMobile}
          alt={`${siteConfig.fullName} — About`}
          fill
          sizes="100vw"
          className="object-cover object-top lg:hidden"
          priority
          quality={90}
        />
        <Image
          src={siteConfig.images.about}
          alt={`${siteConfig.fullName} — About`}
          fill
          sizes="100vw"
          className="object-cover object-top hidden lg:block"
          priority
          quality={100}
        />
        <div className="absolute right-0 bottom-0">
          <VectorCombined title="About" position="bottom-right" />
        </div>
      </div>

      {/* Content underneath the about image */}
      <div className="w-full space-y-3">
        <ProfileCard />
        <AboutCard />
        <TechMarquee />
        <CameraCard />

        {siteConfig.gear.map((item) => (
          <CardContainer key={`${item.brand}-${item.model}`}>
            <div className="flex items-center justify-between p-6">
              <h1 className="text-lg">{item.brand}</h1>
              <p className="text-sm">{item.model}</p>
            </div>
          </CardContainer>
        ))}

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
