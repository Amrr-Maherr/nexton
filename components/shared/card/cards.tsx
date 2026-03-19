import Link from "next/link";
import Image from "next/image";

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
  const linkHref = href || `/categories/${slug}`;

  return (
    <Link href={linkHref} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50 mb-3">
        <Image
          src={image}
          alt={name}
          fill
          loading="eager"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>
      <h3 className="font-medium text-center group-hover:opacity-70 transition-opacity">
        {name}
      </h3>
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
  const linkHref = href || `/products/${slug}`;
  const hasDiscount = priceAfterDiscount && priceAfterDiscount < price;

  return (
    <Link href={linkHref} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50 mb-3">
        <Image
          src={imageCover}
          alt={title}
          fill
          loading="eager"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
          </span>
        )}
      </div>
      <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:opacity-70 transition-opacity">
        {title}
      </h3>
      <div className="flex items-center gap-2">
        {hasDiscount ? (
          <>
            <span className="font-semibold text-primary">
              ${priceAfterDiscount.toFixed(2)}
            </span>
            <span className="text-sm opacity-50 line-through">
              ${price.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
        )}
        {rating && (
          <span className="text-xs opacity-70">⭐ {rating.toFixed(1)}</span>
        )}
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
  const linkHref = href || `/brands/${slug}`;

  return (
    <Link href={linkHref} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50 mb-3 flex items-center justify-center p-4">
        <Image
          src={image}
          alt={name}
          fill
          loading="eager"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
        />
      </div>
      <h3 className="font-medium text-center text-sm group-hover:opacity-70 transition-opacity">
        {name}
      </h3>
    </Link>
  );
}
