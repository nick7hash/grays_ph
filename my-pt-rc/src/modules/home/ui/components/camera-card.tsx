import CardContainer from "@/components/card-container";

const CameraCard = () => {
  return (
    <CardContainer>
      <div className="flex flex-col p-12 gap-[128px]">
        <div className="flex flex-col text-3xl">
          <h1>Camera</h1>
          <h1>&amp; Lighting</h1>
        </div>

        <div className="font-light">
          <p>
            Studio and location kits tuned for food, apparel, and product —
            color-accurate capture, controlled lighting, and delivery ready for
            print, web, and social.
          </p>
        </div>
      </div>
    </CardContainer>
  );
};

export default CameraCard;
