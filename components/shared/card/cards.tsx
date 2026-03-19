import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, Star, Tag, Store } from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  href?: string;
}

export function CategoryCard({
  id,
  name,
  slug,
  image,
  href,
}: CategoryCardProps) {
  const linkHref = href || `/categories/${slug}-${id}`;

  return (
    <Link href={linkHref} className="group block">
      <div className="border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          <Image
            src={image}
            alt={name}
            fill
            loading="eager"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="h-4 w-4 text-primary shrink-0" />
            <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground truncate">/{slug}</p>
        </div>
      </div>
    </Link>
  );
}

interface ProductCardProps {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  rating?: number;
  href?: string;
}

export function ProductCard({
  id,
  title,
  slug,
  price,
  priceAfterDiscount,
  imageCover,
  rating,
  href,
}: ProductCardProps) {
  const linkHref = href || `/product/${slug}-${id}`;
  const hasDiscount = priceAfterDiscount && priceAfterDiscount < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;

  return (
    <Link href={linkHref} className="group block">
      <div className="border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          <Image
            src={imageCover}
            alt={title}
            fill
            loading="eager"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />

          {/* Action Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500 transition-colors" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4 text-gray-700 hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Discount Badge */}
          {hasDiscount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-lg">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Title */}
          <h3 className="font-medium text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
            {title}
          </h3>

          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
              <span className="text-xs font-medium">{rating.toFixed(1)}</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-primary">
                  ${priceAfterDiscount.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-primary">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

interface BrandCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  href?: string;
}

export function BrandCard({ id, name, slug, image, href }: BrandCardProps) {
  const linkHref = href || `/brands/${slug}-${id}`;

  return (
    <Link href={linkHref} className="group block">
      <div className="border rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-md transition-all duration-300">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-white p-6">
          <Image
            src={image}
            alt={name}
            fill
            loading="eager"
            className="object-contain group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Store className="h-4 w-4 text-primary shrink-0" />
            <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground truncate">/{slug}</p>
        </div>
      </div>
    </Link>
  );
}
