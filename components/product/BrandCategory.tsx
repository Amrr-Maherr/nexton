import Image from "next/image";
import Link from "next/link";
import { Tag, Store } from "lucide-react";

interface BrandCategoryItemProps {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  type: "brand" | "category";
}

function BrandCategoryItem({
  _id,
  name,
  slug,
  image,
  type,
}: BrandCategoryItemProps) {
  const Icon = type === "brand" ? Store : Tag;
  const urlSlug = _id ? `${slug}-${_id}` : slug;
  const linkHref =
    type === "brand" ? `/brands/${urlSlug}` : `/categories/${urlSlug}`;

  return (
    <Link href={linkHref} className="block group">
      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
        <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-white shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="h-4 w-4 text-primary shrink-0" />
            <p className="font-semibold text-base truncate">{name}</p>
          </div>
          <p className="text-sm text-muted-foreground">/{slug}</p>
        </div>
      </div>
    </Link>
  );
}

interface BrandCategoryProps {
  brand?: { _id?: string; name: string; slug: string; image: string };
  category?: { _id?: string; name: string; slug: string; image: string };
}

export default function BrandCategory({ brand, category }: BrandCategoryProps) {
  return (
    <div className="border rounded-xl p-5 bg-card shadow-sm">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <div className="w-1 h-5 bg-primary rounded-full" />
        Brand & Category
      </h2>
      <div className="space-y-3">
        {brand && <BrandCategoryItem {...brand} type="brand" />}
        {category && <BrandCategoryItem {...category} type="category" />}
      </div>
    </div>
  );
}
