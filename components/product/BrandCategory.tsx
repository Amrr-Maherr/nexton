import Image from "next/image";

interface BrandCategoryItemProps {
  name: string;
  slug: string;
  image: string;
}

function BrandCategoryItem({ name, slug, image }: BrandCategoryItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-secondary/50">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm opacity-70">/{slug}</p>
      </div>
    </div>
  );
}

interface BrandCategoryProps {
  brand?: { name: string; slug: string; image: string };
  category?: { name: string; slug: string; image: string };
}

export default function BrandCategory({ brand, category }: BrandCategoryProps) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Brand & Category</h2>
      <div className="space-y-4">
        {brand && <BrandCategoryItem {...brand} />}
        {category && <BrandCategoryItem {...category} />}
      </div>
    </div>
  );
}
