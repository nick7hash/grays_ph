import ProfileCard from "@/modules/home/ui/components/profile-card";
import LatestWorkCard from "@/modules/home/ui/components/latest-work-card";
import Footer from "@/components/footer";
import { WorkGridView } from "@/modules/home/ui/views/work-grid-view";
import { SliderView } from "@/modules/home/ui/views/slider-view";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT CONTENT - Fixed; inner shell keeps padding + corners aligned */}
      <div className="w-full lg:w-1/2 h-[70vh] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <SliderView />
        </div>
      </div>
      {/* Spacer for fixed left content */}
      <div className="hidden lg:block lg:w-1/2" />
      {/* RIGHT CONTENT - Scrollable */}
      <div className="w-full mt-3 lg:mt-0 lg:w-1/2 space-y-3 pb-3">
        <ProfileCard />
        <LatestWorkCard />
        <WorkGridView />
        <Footer />
      </div>
    </div>
  );
};

export default page;
