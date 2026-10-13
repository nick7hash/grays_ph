import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategoryById,
  portfolioCategories,
} from "@/data/portfolio";
import { WorkCategoryView } from "@/modules/work/ui/views/work-category-view";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return portfolioCategories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: id } = await params;
  const category = getCategoryById(id);
  if (!category) return { title: "Work" };
  return {
    title: category.title,
    description: category.description,
  };
}

const WorkCategoryPage = async ({ params }: Props) => {
  const { category: id } = await params;
  const category = getCategoryById(id);
  if (!category) notFound();
  return <WorkCategoryView category={category} />;
};

export default WorkCategoryPage;
