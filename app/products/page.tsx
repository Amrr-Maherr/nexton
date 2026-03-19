"use client";

import { ProductCard } from "@/components/shared/card";
import { useProducts } from "@/hooks/api";

export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12">
          <p className="opacity-70">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Error</h1>
          <p className="opacity-70">Failed to load products</p>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="main_container py-8">
        <div className="text-center py-12 opacity-70">
          <p>No products found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Products</h1>
        <p className="opacity-70">Browse all products</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            slug={product.slug}
            price={product.price}
            priceAfterDiscount={product.priceAfterDiscount}
            imageCover={product.imageCover}
            rating={product.ratingsAverage}
          />
        ))}
      </div>
    </div>
  );
}
