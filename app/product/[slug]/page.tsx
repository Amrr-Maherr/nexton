"use client";
import { useParams } from "next/navigation";
import { parseProductSlug } from "@/utils/parseProductSlug";
import { useProduct } from "@/hooks/api";
import Image from "next/image";

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
      {/* Product Images */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50">
          <Image
            src={productData.imageCover}
            alt={productData.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{productData.title}</h1>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-primary">
              ${productData.price}
            </span>
            {productData.priceAfterDiscount && (
              <>
                <span className="text-lg opacity-50 line-through">
                  ${productData.priceAfterDiscount}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                  -
                  {Math.round(
                    ((productData.price - productData.priceAfterDiscount) /
                      productData.price) *
                      100,
                  )}
                  %
                </span>
              </>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span>{productData.ratingsAverage?.toFixed(1) || "N/A"}</span>
            <span className="opacity-70">
              ({productData.ratingsQuantity} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="opacity-70 whitespace-pre-line">
            {productData.description}
          </p>

          {/* Product Info */}
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {productData.brand?.name || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {productData.category?.name || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Subcategory:</span>{" "}
              {productData.subcategory?.[0]?.name || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Available:</span>{" "}
              {productData.quantity > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span>{" "}
              {productData.quantity}
            </p>
            <p>
              <span className="font-semibold">Sold:</span>{" "}
              {productData.sold || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Product Gallery */}
      {productData?.images?.length > 1 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50"
              >
                <Image
                  src={image}
                  alt={`${productData.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Product Details */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Product ID:</span>{" "}
              {productData.id}
            </p>
            <p>
              <span className="font-semibold">Slug:</span> {productData.slug}
            </p>
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(productData.createdAt).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Updated:</span>{" "}
              {new Date(productData.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Brand & Category */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Brand & Category</h2>
          <div className="space-y-4">
            {productData.brand && (
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary/50">
                  <Image
                    src={productData.brand.image}
                    alt={productData.brand.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{productData.brand.name}</p>
                  <p className="text-sm opacity-70">
                    /{productData.brand.slug}
                  </p>
                </div>
              </div>
            )}
            {productData.category && (
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary/50">
                  <Image
                    src={productData.category.image}
                    alt={productData.category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{productData.category.name}</p>
                  <p className="text-sm opacity-70">
                    /{productData.category.slug}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      {productData.reviews && productData.reviews.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Reviews ({productData.reviews.length})
          </h2>
          <div className="space-y-4">
            {productData.reviews.map((review) => (
              <div key={review._id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {review.user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold">{review.user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">{review.rating}/5</span>
                  </div>
                </div>
                {review.review && (
                  <p className="opacity-70 text-sm mt-2 pl-10">
                    {review.review}
                  </p>
                )}
                <p className="text-xs opacity-50 mt-2 pl-10">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
