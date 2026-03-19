"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Play,
  Pause,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onGoToIndex?: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  onGoToIndex,
}: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  // Autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        onNext();
        setZoom(1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, onNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onPrevious();
        setZoom(1);
      }
      if (e.key === "ArrowRight") {
        onNext();
        setZoom(1);
      }
      if (e.key === "+" || e.key === "=")
        setZoom((prev) => Math.min(prev + 0.5, 3));
      if (e.key === "-") setZoom((prev) => Math.max(prev - 0.5, 1));
      if (e.key === "f") toggleFullscreen();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      onNext();
      setZoom(1);
    }
    if (touchStart - touchEnd < -150) {
      onPrevious();
      setZoom(1);
    }
  };

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      imageRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const handleDownload = useCallback(async () => {
    try {
      const response = await fetch(images[currentIndex]);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `product-image-${currentIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  }, [images, currentIndex]);

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Product Image",
          text: `Check out this product image ${currentIndex + 1}`,
          url: images[currentIndex],
        });
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(images[currentIndex]);
        alert("Image URL copied to clipboard!");
      } catch (error) {
        console.error("Copy failed:", error);
      }
    }
  }, [images, currentIndex]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoom(1);

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex flex-col"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Toolbar */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowThumbnails(!showThumbnails);
            }}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            title="Toggle thumbnails"
          >
            {showThumbnails ? (
              <Minimize className="h-5 w-5" />
            ) : (
              <Maximize className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Image Area */}
      <div
        ref={imageRef}
        className="flex-1 relative flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoom})` }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Product image ${currentIndex + 1}`}
            width={1200}
            height={1200}
            className="max-w-full max-h-[80vh] object-contain"
            priority
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
            setZoom(1);
          }}
          className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
            setZoom(1);
          }}
          className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-center gap-2 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Zoom out (-)"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <span className="text-white text-sm w-12 text-center">
          {Math.round(zoom * 100)}%
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Zoom in (+)"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleResetZoom();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Reset zoom"
        >
          <Maximize className="h-5 w-5" />
        </button>
        <div className="w-px h-6 bg-white/30 mx-2" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Fullscreen (F)"
        >
          {isFullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Slideshow (Space)"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDownload();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Download"
        >
          <Download className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleShare();
          }}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          title="Share"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnail Strip with Swiper */}
      {showThumbnails && (
        <div className="p-4 bg-black/80">
          <Swiper
            modules={[FreeMode, Navigation]}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={8}
            className="w-full"
            initialSlide={currentIndex}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "80px", height: "80px" }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onGoToIndex) {
                      onGoToIndex(index);
                    }
                    setZoom(1);
                  }}
                  className={`relative w-full h-full rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentIndex
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
