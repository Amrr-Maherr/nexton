"use client";
import { useParams } from "next/navigation";
import { parseProductSlug } from "@/utils/parseProductSlug";
import { useProduct } from "@/hooks/api";
import { DetailsSkeleton, SkeletonFallback } from "@/components/skeleton";
import { ProductError } from "@/components/product/ProductError";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import { lazy, Suspense } from "react";

// Lazy load all components for code-splitting
const ProductImages = lazy(() => import("@/components/product/ProductImages"));
const ProductInfo = lazy(() => import("@/components/product/ProductInfo"));
const ProductDetails = lazy(
  () => import("@/components/product/ProductDetails"),
);
const BrandCategory = lazy(() => import("@/components/product/BrandCategory"));
const Questions = lazy(() => import("@/components/product/Questions"));
const Reviews = lazy(() => import("@/components/product/Reviews"));

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const { id, slug: productSlug } = parseProductSlug(slug as string);

  const {
    data: product,
    isLoading,
    isFetching,
    error,
  } = useProduct(id as string);

  // Show skeleton during initial load or when fetching new data
  if (isLoading || isFetching) {
    return (
      <div className="main_container py-8">
        <DetailsSkeleton variant="product" />
      </div>
    );
  }

  if (error || !product) {
    return <ProductError error={error} />;
  }

  return (
    <div className="main_container py-8">
      {/* Product Images & Info */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8">
        <Suspense fallback={<SkeletonFallback />}>
          <LazyWrapper>
            <ProductImages
              imageCover={product.imageCover}
              title={product.title}
              images={product.images}
            />
          </LazyWrapper>
        </Suspense>
        <Suspense fallback={<SkeletonFallback />}>
          <LazyWrapper>
            <ProductInfo
              title={product.title}
              price={product.price}
              priceAfterDiscount={product.priceAfterDiscount}
              ratingsAverage={product.ratingsAverage}
              ratingsQuantity={product.ratingsQuantity}
              description={product.description}
              brand={product.brand}
              category={product.category}
              subcategory={product.subcategory}
              quantity={product.quantity}
              sold={product.sold}
            />
          </LazyWrapper>
        </Suspense>
      </div>

      {/* Product Gallery */}
      {/* <ProductGallery images={product.images} title={product.title} /> */}

      {/* Brand & Category */}
      <div className="mb-8">
        <Suspense fallback={<SkeletonFallback />}>
          <LazyWrapper height={300}>
            <BrandCategory brand={product.brand} category={product.category} />
          </LazyWrapper>
        </Suspense>
      </div>

      {/* Product Details */}
      <div className="mb-8">
        <Suspense fallback={<SkeletonFallback />}>
          <LazyWrapper height={300}>
            <ProductDetails
              id={id as string}
              slug={product.slug}
              createdAt={product.createdAt}
              updatedAt={product.updatedAt}
            />
          </LazyWrapper>
        </Suspense>
      </div>

      {/* Questions & Reviews - Two Columns */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8">
        {/* Questions & Answers */}
        <Suspense fallback={<SkeletonFallback />}>
          <LazyWrapper>
            <Questions questions={product.questions} />
          </LazyWrapper>
        </Suspense>

        {/* Reviews */}
        <Suspense fallback={<SkeletonFallback />}>
          <LazyWrapper>
            <Reviews reviews={product.reviews} />
          </LazyWrapper>
        </Suspense>
      </div>
    </div>
  );
}
