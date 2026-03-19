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

  if (error || !product?.data) {
    return (
      <div className="main_container py-8">
        <p className="text-center text-red-500">
          {error ? "Failed to load product" : "Product not found"}
        </p>
      </div>
    );
  }

  const productData = product.data;

  return (
    <div className="main_container py-8">
      {/* Product Images & Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <ProductImages
          imageCover={productData.imageCover}
          title={productData.title}
        />
        <ProductInfo
          title={productData.title}
          price={productData.price}
          priceAfterDiscount={productData.priceAfterDiscount}
          ratingsAverage={productData.ratingsAverage}
          ratingsQuantity={productData.ratingsQuantity}
          description={productData.description}
          brand={productData.brand}
          category={productData.category}
          subcategory={productData.subcategory}
          quantity={productData.quantity}
          sold={productData.sold}
        />
      </div>

      {/* Product Gallery */}
      <ProductGallery images={productData.images} title={productData.title} />

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <ProductDetails
          id={productData.id}
          slug={productData.slug}
          createdAt={productData.createdAt}
          updatedAt={productData.updatedAt}
        />
        <BrandCategory
          brand={productData.brand}
          category={productData.category}
        />
      </div>

      {/* Reviews */}
      <Reviews reviews={productData.reviews} />
    </div>
  );
}
