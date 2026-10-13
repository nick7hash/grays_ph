import { portfolioCategories } from "@/data/portfolio";
import WorkCard from "../components/work-card";

export const WorkGridView = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
      {portfolioCategories.map((category) => (
        <WorkCard
          key={category.id}
          id={category.id}
          title={category.title}
          cover={category.cover}
        />
      ))}
    </div>
  );
};
