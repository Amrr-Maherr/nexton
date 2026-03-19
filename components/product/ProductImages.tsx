"use client";
import Image from "next/image";

interface ProductImagesProps {
  imageCover: string;
  title: string;
  images?: string[];
}

export default function ProductImages({
  imageCover,
  title,
  images = [],
}: ProductImagesProps) {
  const allImages = [imageCover, ...images.filter((img) => img !== imageCover)];
  const hasMultipleImages = allImages.length > 1;

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary/50 mb-3 md:mb-4">
      <Image
        src={imageCover}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />
      </div>

      {/* Thumbnail Images - Only show if multiple images */}
      {hasMultipleImages && (
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-md overflow-hidden bg-secondary/50"
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, (max-width: 1024px) 12vw, 10vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
