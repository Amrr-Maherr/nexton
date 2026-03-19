"use client";
import { useParams } from "next/navigation";
import { parseProductSlug } from "@/utils/parseProductSlug";
import { useProduct } from "@/hooks/api";
import {
  ProductImages,
  ProductInfo,
  ProductGallery,
  ProductDetails,
  BrandCategory,
  Reviews,
  Questions,
} from "@/components/product";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const { id, slug: productSlug } = parseProductSlug(slug as string);

  const { data: product, isLoading, error } = useProduct(id as string);

  if (isLoading) {
    return (
      <div className="main_container py-8">
        <p className="text-center opacity-70">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="main_container py-8">
        <p className="text-center text-red-500">
          {error ? "Failed to load product" : "Product not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      {/* Product Images & Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <ProductImages
          imageCover={product.imageCover}
          title={product.title}
          images={product.images}
        />
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
      </div>

      {/* Product Gallery */}
      <ProductGallery images={product.images} title={product.title} />

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <ProductDetails
          id={product.id}
          slug={product.slug}
          createdAt={product.createdAt}
          updatedAt={product.updatedAt}
        />
        <BrandCategory brand={product.brand} category={product.category} />
      </div>

      {/* Questions & Answers */}
      <div className="mb-8">
        <Questions questions={product.questions} />
      </div>

      {/* Reviews */}
      <Reviews reviews={product.reviews} />
    </div>
  );
}
