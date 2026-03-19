import { Skeleton } from "./Skeleton";
import { memo } from "react";

export interface DetailsSkeletonProps {
  /**
   * Type of details skeleton to render
   * - product: Full product detail page layout
   * - category: Category detail page layout
   */
  variant?: "product" | "category";
}

/**
 * DetailsSkeleton component for detail pages
 * Mimics the actual detail page layouts
 */
export const DetailsSkeleton = memo(function DetailsSkeleton({
  variant = "product",
}: DetailsSkeletonProps) {
  if (variant === "category") {
    return <CategoryDetailsSkeleton />;
  }

  return <ProductDetailsSkeleton />;
});

/**
 * Product Details Page Skeleton
 * Mimics: ProductImages + ProductInfo grid, ProductDetails, BrandCategory, Questions, Reviews
 */
const ProductDetailsSkeleton = memo(function ProductDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      {/* Product Images & Info Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images placeholder */}
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full aspect-square" radius="lg" />
          {/* Thumbnail images */}
          <div className="flex gap-2">
            <Skeleton className="w-16 h-16" radius="md" />
            <Skeleton className="w-16 h-16" radius="md" />
            <Skeleton className="w-16 h-16" radius="md" />
          </div>
        </div>

        {/* Product Info placeholder */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <Skeleton className="w-full h-8" radius="sm" />
          <Skeleton className="w-3/4 h-6" radius="sm" />

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Skeleton className="w-24 h-5" radius="sm" />
            <Skeleton className="w-16 h-4" radius="sm" />
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <Skeleton className="w-32 h-8" radius="sm" />
            <Skeleton className="w-20 h-5" radius="sm" />
          </div>

          {/* Description */}
          <Skeleton className="w-full h-4" radius="sm" />
          <Skeleton className="w-full h-4" radius="sm" />
          <Skeleton className="w-3/4 h-4" radius="sm" />

          {/* Brand & Category */}
          <div className="flex gap-4 mt-2">
            <Skeleton className="w-24 h-8" radius="md" />
            <Skeleton className="w-24 h-8" radius="md" />
          </div>

          {/* Quantity & Sold */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Skeleton className="w-full h-10" radius="md" />
            <Skeleton className="w-full h-10" radius="md" />
          </div>

          {/* Add to Cart button */}
          <Skeleton className="w-full h-12" radius="lg" />
        </div>
      </div>

      {/* Product Details & Brand/Category Info */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Details */}
        <div className="border rounded-lg p-6 flex flex-col gap-4">
          <Skeleton className="w-40 h-6" radius="sm" />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <Skeleton className="w-20 h-3" radius="sm" />
              <Skeleton className="w-32 h-4" radius="sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-20 h-3" radius="sm" />
              <Skeleton className="w-32 h-4" radius="sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-20 h-3" radius="sm" />
              <Skeleton className="w-28 h-4" radius="sm" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-20 h-3" radius="sm" />
              <Skeleton className="w-28 h-4" radius="sm" />
            </div>
          </div>
        </div>

        {/* Brand & Category */}
        <div className="border rounded-lg p-6 flex flex-col gap-4">
          <Skeleton className="w-40 h-6" radius="sm" />
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-16 h-4" radius="sm" />
              <Skeleton className="w-24 h-6" radius="md" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-16 h-4" radius="sm" />
              <Skeleton className="w-24 h-6" radius="md" />
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="border rounded-lg p-6 flex flex-col gap-4">
        <Skeleton className="w-48 h-6" radius="sm" />
        <div className="flex flex-col gap-3">
          <Skeleton className="w-full h-16" radius="md" />
          <Skeleton className="w-full h-16" radius="md" />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border rounded-lg p-6 flex flex-col gap-4">
        <Skeleton className="w-32 h-6" radius="sm" />
        {/* Review summary */}
        <div className="flex items-center gap-4">
          <Skeleton className="w-16 h-12" radius="md" />
          <div className="flex flex-col gap-2">
            <Skeleton className="w-32 h-4" radius="sm" />
            <Skeleton className="w-24 h-3" radius="sm" />
          </div>
        </div>
        {/* Review items */}
        <div className="flex flex-col gap-3 mt-2">
          <Skeleton className="w-full h-20" radius="md" />
          <Skeleton className="w-full h-20" radius="md" />
        </div>
      </div>
    </div>
  );
});

/**
 * Category Details Page Skeleton
 * Mimics: Category image + info grid, Category information, Related categories
 */
const CategoryDetailsSkeleton = memo(function CategoryDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      {/* Category Header Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Category Image */}
        <Skeleton className="w-full aspect-square" radius="lg" />

        {/* Category Info */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Skeleton className="w-3/4 h-10" radius="sm" />
          <Skeleton className="w-1/2 h-5" radius="sm" />
          <Skeleton className="w-40 h-12" radius="lg" />
        </div>
      </div>

      {/* Category Information Box */}
      <div className="border rounded-lg p-6 flex flex-col gap-4">
        <Skeleton className="w-48 h-6" radius="sm" />
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-3" radius="sm" />
            <Skeleton className="w-40 h-4" radius="sm" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-3" radius="sm" />
            <Skeleton className="w-32 h-4" radius="sm" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-3" radius="sm" />
            <Skeleton className="w-28 h-4" radius="sm" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-20 h-3" radius="sm" />
            <Skeleton className="w-28 h-4" radius="sm" />
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="flex flex-col gap-4">
        <Skeleton className="w-48 h-6" radius="sm" />
        <Skeleton className="w-32 h-5" radius="sm" />
      </div>
    </div>
  );
});
