import CardContainer from "@/components/card-container";
import { siteConfig } from "@/site.config";

const facts = [
  { label: "Business Category", value: "Photography" },
  { label: "Location", value: "Chandigarh" },
  { label: "Experience", value: "4+ years in business" },
  { label: "Specialties", value: "Photo, video & content creation" },
];

const contactSphere = [
  "Restaurant and café owners",
  "Clothing brands",
  "Marketing agencies",
];

const AboutCard = () => {
  return (
    <CardContainer>
      <div className="flex flex-col p-8 lg:p-12 gap-10 lg:gap-16">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-text-muted font-light">I&apos;m</p>
          <h1 className="text-3xl">{siteConfig.fullName}</h1>
          <p className="text-lg font-light text-text-muted">
            {siteConfig.role}
          </p>
          <p className="text-sm font-light mt-2">
            Brand · <span className="font-medium">{siteConfig.brand}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wide text-text-muted">
                {fact.label}
              </span>
              <span className="text-sm font-light">{fact.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-light">Contact Sphere Top-3</h2>
          <ol className="flex flex-col gap-3 font-light">
            {contactSphere.map((item, index) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="text-sm text-text-muted tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px]">{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-4 font-light">
          <p>{siteConfig.bio}</p>
          <p>
            Outside the studio, I am always looking at the bigger picture and
            never losing hope in the long run.
          </p>
        </div>
      </div>
    </CardContainer>
  );
};

export default AboutCard;
