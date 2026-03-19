import { Star, CheckCircle, XCircle, Package, Tag } from "lucide-react";

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

export default function ProductInfo({
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
  const hasDiscount = priceAfterDiscount && priceAfterDiscount < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
  const inStock = quantity > 0;

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
          <span className="font-semibold text-lg">
            {ratingsAverage?.toFixed(1) || "N/A"}
          </span>
        </div>
        <span className="text-muted-foreground">
          ({ratingsQuantity.toLocaleString()} reviews)
        </span>
      </div>

      {/* Price Section */}
      <div className="bg-secondary/30 rounded-xl p-4 md:p-5">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-3xl md:text-4xl font-bold text-primary">
            ${hasDiscount ? priceAfterDiscount.toFixed(2) : price.toFixed(2)}
          </span>
          {hasDiscount && (
            <>
              <span className="text-lg md:text-xl text-muted-foreground line-through">
                ${price.toFixed(2)}
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -{discountPercentage}% OFF
              </span>
            </>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-sm max-w-none">
        <p className="text-base leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Product Details Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          <Tag className="h-4 w-4 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Brand</p>
            <p className="font-semibold text-sm truncate">
              {brand?.name || "N/A"}
            </p>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          <Package className="h-4 w-4 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Category</p>
            <p className="font-semibold text-sm truncate">
              {category?.name || "N/A"}
            </p>
          </div>
        </div>

        {/* Subcategory */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          <Package className="h-4 w-4 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Subcategory</p>
            <p className="font-semibold text-sm truncate">
              {subcategory?.[0]?.name || "N/A"}
            </p>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          {inStock ? (
            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500 shrink-0" />
          )}
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Availability</p>
            <p
              className={`font-semibold text-sm ${
                inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          <Package className="h-4 w-4 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Quantity</p>
            <p className="font-semibold text-sm">{quantity}</p>
          </div>
        </div>

        {/* Sold */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Sold</p>
            <p className="font-semibold text-sm">{sold || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
