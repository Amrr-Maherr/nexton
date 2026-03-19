interface ProductInfoProps {
  title: string;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage?: number;
  ratingsQuantity: number;
  description: string;
  brand?: { name: string };
  category?: { name: string };
  subcategory?: { name: string }[];
  quantity: number;
  sold?: number | null;
}

export function ProductInfo({
  title,
  price,
  priceAfterDiscount,
  ratingsAverage,
  ratingsQuantity,
  description,
  brand,
  category,
  subcategory,
  quantity,
  sold,
}: ProductInfoProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Price */}
      <div className="flex items-center gap-4">
        <span className="text-2xl font-semibold text-primary">
          ${price}
        </span>
        {priceAfterDiscount && (
          <>
            <span className="text-lg opacity-50 line-through">
              ${priceAfterDiscount}
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
              -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
            </span>
          </>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-500">⭐</span>
        <span>{ratingsAverage?.toFixed(1) || "N/A"}</span>
        <span className="opacity-70">({ratingsQuantity} reviews)</span>
      </div>

      {/* Description */}
      <p className="opacity-70 whitespace-pre-line">{description}</p>

      {/* Product Info */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Brand:</span>{" "}
          {brand?.name || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {category?.name || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Subcategory:</span>{" "}
          {subcategory?.[0]?.name || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Available:</span>{" "}
          {quantity > 0 ? "In Stock" : "Out of Stock"}
        </p>
        <p>
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-semibold">Sold:</span> {sold || 0}
        </p>
      </div>
    </div>
  );
}
