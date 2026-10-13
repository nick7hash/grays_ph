import type { Metadata } from "next";
import { WorkView } from "@/modules/work/ui/views/work-view";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected commercial photography by Grays Photography.",
};

const WorkPage = () => {
  return <WorkView />;
};

export default WorkPage;
