"use client";

import { BrandCard } from "@/components/shared/card";
import { useBrands } from "@/hooks/api";

export default function BrandsPage() {
  const { data: brands, isLoading, error } = useBrands();

  if (isLoading) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12">
          <p className="opacity-70">Loading brands...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Error</h1>
          <p className="opacity-70">Failed to load brands</p>
        </div>
      </div>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12 opacity-70">
          <p>No brands found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Brands</h1>
        <p className="opacity-70">Browse all brands</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {brands.map((brand) => (
          <BrandCard
            key={brand._id}
            id={brand._id}
            name={brand.name}
            slug={brand.slug}
            image={brand.image}
          />
        ))}
      </div>
    </div>
  );
}
