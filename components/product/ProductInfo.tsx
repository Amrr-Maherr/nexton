"use client";
import { useState } from "react";
import {
  Star,
  CheckCircle,
  XCircle,
  Package,
  Tag,
  ShoppingCart,
  Heart,
  Minus,
  Plus,
} from "lucide-react";

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
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  const hasDiscount = priceAfterDiscount && priceAfterDiscount < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;
  const inStock = quantity > 0;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= quantity) {
      setSelectedQuantity(newQuantity);
    }
  };

  const finalPrice = hasDiscount ? priceAfterDiscount : price;
  const totalPrice = (finalPrice * selectedQuantity).toFixed(2);

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

      {/* Action Buttons - Add to Cart & Wishlist */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Quantity Selector */}
        <div className="flex items-center gap-2 bg-secondary/50 rounded-xl p-1">
          <button
            onClick={() => handleQuantityChange(selectedQuantity - 1)}
            disabled={selectedQuantity <= 1 || !inStock}
            className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-12 text-center font-semibold text-lg">
            {selectedQuantity}
          </span>
          <button
            onClick={() => handleQuantityChange(selectedQuantity + 1)}
            disabled={selectedQuantity >= quantity || !inStock}
            className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={!inStock}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
        >
          <ShoppingCart className="h-5 w-5" />
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlist(!isWishlist)}
          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all shadow-lg ${
            isWishlist
              ? "bg-red-500 text-white shadow-red-500/25"
              : "bg-secondary/50 text-gray-700 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          <Heart className={`h-6 w-6 ${isWishlist ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Total Price */}
      {selectedQuantity > 1 && (
        <div className="bg-primary/5 rounded-xl p-4 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total Price:</span>
          <span className="text-2xl font-bold text-primary">${totalPrice}</span>
        </div>
      )}

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

        {/* Available Quantity */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/30">
          <Package className="h-4 w-4 text-primary shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Available</p>
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
