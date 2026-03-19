import { GetAllCategories } from "@/services/categoryServices";
import { CategoryCard } from "@/components/shared/card";

export default async function CategoriesPage() {
  try {
    const response = await GetAllCategories();
    const categories = response.data;

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

        {categories.length === 0 && (
          <div className="text-center py-12 opacity-70">
            <p>No categories found</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Error</h1>
          <p className="opacity-70">Failed to load categories</p>
        </div>
      </div>
    );
  }
}
