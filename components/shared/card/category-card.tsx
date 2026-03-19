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
