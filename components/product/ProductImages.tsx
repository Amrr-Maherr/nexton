"use client";
import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "./Lightbox";
import Slider from "@/components/shared/slider/slider";

interface ProductImagesProps {
  imageCover: string;
  title: string;
  images?: string[];
}

export function ProductImages({
  imageCover,
  title,
  images = [],
}: ProductImagesProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = [imageCover, ...images.filter((img) => img !== imageCover)];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleGoToIndex = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50 cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={imageCover}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Click to zoom
          </div>
        </div>

        {/* Thumbnail Slider */}
        {allImages.length > 1 && (
          <Slider
            slidesPerView={4}
            slidesPerViewMobile={1}
            spaceBetween={10}
            hideNavigation={false}
            className="thumbnail-slider"
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden bg-secondary/50 cursor-pointer`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setIsLightboxOpen(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onGoToIndex={handleGoToIndex}
        />
      )}
    </>
  );
}
