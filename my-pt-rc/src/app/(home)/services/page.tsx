import type { Metadata } from "next";
import { ServicesView } from "@/modules/services/ui/views/services-view";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Restaurant, apparel, e-commerce, video, and commercial brand photography services by Grays Photography.",
};

const ServicesPage = () => {
  return <ServicesView />;
};

export default ServicesPage;
