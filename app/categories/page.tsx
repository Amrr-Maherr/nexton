import { GetAllCategories } from "@/services/categoryServices";
import Link from "next/link";
import Image from "next/image";

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
            <Link
              key={category._id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50 mb-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              <h3 className="font-medium text-center group-hover:opacity-70 transition-opacity">
                {category.name}
              </h3>
            </Link>
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
