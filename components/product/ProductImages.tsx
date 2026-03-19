import Image from "next/image";

interface ProductImagesProps {
  imageCover: string;
  title: string;
}

export function ProductImages({ imageCover, title }: ProductImagesProps) {
  return (
    <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50">
      <Image
        src={imageCover}
        alt={title}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
