"use client";

import { ProductCard } from "@/components/shared/card";
import { CardSkeleton } from "@/components/skeleton";
import { ProductFilters } from "@/components/shared/product-filters";
import { Pagination } from "@/components/shared/pagination";
import { useProducts } from "@/hooks/api";
import { useState } from "react";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const {
    data: productsResponse,
    isLoading,
    isFetching,
    error,
  } = useProducts(page);

  // Show skeleton during initial load or when fetching new data
  if (isLoading || isFetching) {
    return (
      <div className="main_container py-8">
        <div className="mb-8 flex flex-col gap-2">
          <div className="w-1/3 h-8 bg-secondary/50 rounded-md animate-shimmer" />
          <div className="w-1/4 h-4 bg-secondary/50 rounded-md animate-shimmer" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="hidden lg:block lg:col-span-3">
            <CardSkeleton variant="product" count={4} />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <CardSkeleton variant="product" count={6} />
            </div>
          </div>
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

  const products = productsResponse?.data || [];
  const currentPage = productsResponse?.metadata?.currentPage || 1;
  const totalPages = productsResponse?.metadata?.numberOfPages || 1;

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
      <div className="grid grid-cols-12 gap-6">
        {/* Filters Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-4 rounded-lg border bg-background p-4">
            <ProductFilters />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
