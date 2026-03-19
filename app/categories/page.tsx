"use client";

import { CategoryCard } from "@/components/shared/card";
import { CardSkeleton } from "@/components/skeleton";
import { useCategories } from "@/hooks/api";

export default function CategoriesPage() {
  const { data: categories, isLoading, isFetching, error } = useCategories();

  // Show skeleton during initial load or when fetching new data
  if (isLoading || isFetching) {
    return (
      <div className="main_container py-8">
        <div className="mb-8">
          <div className="flex flex-col gap-2">
            <div className="w-1/3 h-8 bg-secondary/50 rounded-md animate-shimmer" />
            <div className="w-1/4 h-4 bg-secondary/50 rounded-md animate-shimmer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          <CardSkeleton variant="category" count={10} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Error</h1>
          <p className="opacity-70">Failed to load categories</p>
        </div>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12 opacity-70">
          <p>No categories found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Categories</h1>
        <p className="opacity-70">Browse all categories</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            id={category._id}
            name={category.name}
            slug={category.slug}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}
