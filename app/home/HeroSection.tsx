"use client";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Slider from "@/components/shared/slider/slider";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import bg from "../assets/images/hero-bg.png"
import heroBg from "../assets/images/bg-image.png"
// Hero slides data
const heroSlides = [
  {
    id: 1,
    title: "New Collection 2024",
    subtitle: "Discover amazing products",
    description: "Shop the latest trends with up to 50% off",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop",
    cta: "Shop Now",
    href: "/products",
  },
  {
    id: 2,
    title: "Premium Quality",
    subtitle: "Best brands worldwide",
    description: "Experience luxury at affordable prices",
    image: heroBg,
    cta: "Explore",
    href: "/brands",
  },
  {
    id: 3,
    title: "Flash Sale",
    subtitle: "Limited time offers",
    description: "Don't miss out on incredible deals",
    image: bg,
    cta: "View Deals",
    href: "/products",
  },
];

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Suspense
        fallback={
          <div className="w-full h-[500px] md:h-[600px] bg-secondary/50 animate-pulse" />
        }
      >
        <LazyWrapper>
          <Slider
            slidesPerView={1}
            spaceBetween={0}
            useFadeEffect={true}
            hideNavigation={false}
            swiperOptions={{
              loop: true,
              autoplay: { delay: 5000, disableOnInteraction: false },
              speed: 1000,
            }}
          >
            {heroSlides.map((slide) => (
              <div key={slide.id} className="relative h-screen">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-[70px]">
                    <div className="max-w-2xl text-white space-y-6">
                      <div className="space-y-2">
                        <p className="text-lg md:text-xl font-medium text-primary-foreground/90">
                          {slide.subtitle}
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
                          {slide.description}
                        </p>
                      </div>
                      <Link href={slide.href}>
                        <Button size="lg" className="h-14 px-8 text-lg">
                          {slide.cta}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </LazyWrapper>
      </Suspense>
    </section>
  );
}
