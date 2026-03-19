import { Skeleton } from "./Skeleton";
import { memo } from "react";

export interface CardSkeletonProps {
  /**
   * Type of card skeleton to render
   * - product: Product card with image, title, price, rating
   * - category: Category card with image and title
   * - brand: Brand card with image and title
   */
  variant?: "product" | "category" | "brand";
  /**
   * Number of skeleton cards to render
   */
  count?: number;
}

/**
 * CardSkeleton component that mimics the actual card layouts
 * Supports product, category, and brand card variants
 */
export const CardSkeleton = memo(function CardSkeleton({
  variant = "product",
  count = 1,
}: CardSkeletonProps) {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <div key={i} className="flex flex-col">
      {variant === "product" && <ProductCardSkeleton />}
      {variant === "category" && <CategoryCardSkeleton />}
      {variant === "brand" && <BrandCardSkeleton />}
    </div>
  ));

  return <>{skeletons}</>;
});

/**
 * Product Card Skeleton
 * Mimics: Image + Title + Price (with discount) + Rating
 */
const ProductCardSkeleton = memo(function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {/* Image placeholder - aspect square */}
      <Skeleton className="w-full aspect-square" radius="lg" />

      {/* Title - 2 lines */}
      <Skeleton className="w-full h-4" radius="sm" />
      <Skeleton className="w-3/4 h-4" radius="sm" />

      {/* Price and rating row */}
      <div className="flex items-center gap-2 mt-1">
        {/* Price */}
        <Skeleton className="w-16 h-5" radius="sm" />
        {/* Discount price (optional) */}
        <Skeleton className="w-12 h-4" radius="sm" />
        {/* Rating (optional) */}
        <Skeleton className="w-12 h-4 ml-auto" radius="sm" />
      </div>
    </div>
  );
});

/**
 * Category Card Skeleton
 * Mimics: Image (square) + Title (centered)
 */
const CategoryCardSkeleton = memo(function CategoryCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {/* Image placeholder - aspect square */}
      <Skeleton className="w-full aspect-square" radius="lg" />

      {/* Title - centered, single line */}
      <Skeleton className="w-3/4 h-4 mx-auto" radius="sm" />
    </div>
  );
});

/**
 * Brand Card Skeleton
 * Mimics: Image (square, contained) + Title (centered, small)
 */
const BrandCardSkeleton = memo(function BrandCardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {/* Image placeholder - aspect square */}
      <Skeleton className="w-full aspect-square" radius="lg" />

      {/* Title - centered, small */}
      <Skeleton className="w-1/2 h-3 mx-auto" radius="sm" />
    </div>
  );
});
