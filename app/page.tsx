"use client";
import { lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Zap,
  Truck,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Slider from "@/components/shared/slider/slider";
import { ProductCard, CategoryCard, BrandCard } from "@/components/shared/card";
import { useProducts } from "@/hooks/api";
import { useCategories } from "@/hooks/api";
import { useBrands } from "@/hooks/api";
import { Skeleton, SkeletonFallback } from "@/components/skeleton";
import LazyWrapper from "@/components/ui/lazy-wrapper";

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
    image:
      "https://images.unsplash.com/photo-1472851294608-4155f2118c03?w=1600&h=900&fit=crop",
    cta: "Explore",
    href: "/brands",
  },
  {
    id: 3,
    title: "Flash Sale",
    subtitle: "Limited time offers",
    description: "Don't miss out on incredible deals",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=900&fit=crop",
    cta: "View Deals",
    href: "/products",
  },
];

// Features data
const features = [
  {
    icon: ShoppingBag,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  { icon: Zap, title: "Fast Delivery", description: "1-3 business days" },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure transactions",
  },
  {
    icon: Star,
    title: "Quality Products",
    description: "Handpicked selection",
  },
];

export default function HomePage() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: brands, isLoading: brandsLoading } = useBrands();

  const featuredProducts = products?.slice(0, 8) || [];
  const featuredCategories = categories?.slice(0, 5) || [];
  const featuredBrands = brands?.slice(0, 5) || [];

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
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
                <div key={slide.id} className="relative h-[500px] md:h-[600px]">
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
                    <div className="main_container">
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

      {/* Features Section */}
      <section className="border-y bg-card/50 backdrop-blur">
        <Suspense
          fallback={
            <div className="main_container py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-32" radius="lg" />
                ))}
              </div>
            </div>
          }
        >
          <LazyWrapper>
            <div className="main_container py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center space-y-3 p-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </LazyWrapper>
        </Suspense>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="main_container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Shop by Category
              </h2>
              <p className="text-muted-foreground">
                Browse our most popular categories
              </p>
            </div>
            <Link href="/categories">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="w-full aspect-square" radius="lg" />
                    <Skeleton className="w-3/4 h-4 mx-auto" radius="sm" />
                  </div>
                ))}
              </div>
            }
          >
            <LazyWrapper>
              {categoriesLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="w-full aspect-square" radius="lg" />
                      <Skeleton className="w-3/4 h-4 mx-auto" radius="sm" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {featuredCategories.map((category) => (
                    <CategoryCard
                      key={category._id}
                      id={category._id}
                      name={category.name}
                      slug={category.slug}
                      image={category.image}
                    />
                  ))}
                </div>
              )}
            </LazyWrapper>
          </Suspense>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary/30">
        <div className="main_container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Handpicked selection of our best products
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="w-full aspect-square" radius="lg" />
                    <Skeleton className="w-3/4 h-4" radius="sm" />
                    <Skeleton className="w-1/2 h-4" radius="sm" />
                  </div>
                ))}
              </div>
            }
          >
            <LazyWrapper>
              {productsLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="w-full aspect-square" radius="lg" />
                      <Skeleton className="w-3/4 h-4" radius="sm" />
                      <Skeleton className="w-1/2 h-4" radius="sm" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      id={product._id}
                      title={product.title}
                      slug={product.slug}
                      price={product.price}
                      priceAfterDiscount={product.priceAfterDiscount}
                      imageCover={product.imageCover}
                      rating={product.ratingsAverage}
                    />
                  ))}
                </div>
              )}
            </LazyWrapper>
          </Suspense>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16">
        <div className="main_container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Top Brands
              </h2>
              <p className="text-muted-foreground">
                Discover your favorite brands
              </p>
            </div>
            <Link href="/brands">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="w-full aspect-square" radius="lg" />
                    <Skeleton className="w-1/2 h-3 mx-auto" radius="sm" />
                  </div>
                ))}
              </div>
            }
          >
            <LazyWrapper>
              {brandsLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="w-full aspect-square" radius="lg" />
                      <Skeleton className="w-1/2 h-3 mx-auto" radius="sm" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {featuredBrands.map((brand) => (
                    <BrandCard
                      key={brand._id}
                      id={brand._id}
                      name={brand.name}
                      slug={brand.slug}
                      image={brand.image}
                    />
                  ))}
                </div>
              )}
            </LazyWrapper>
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <Suspense
          fallback={
            <div className="main_container py-20">
              <Skeleton className="w-full h-40 rounded-2xl" />
            </div>
          }
        >
          <LazyWrapper>
            <div className="main_container">
              <div className="max-w-3xl mx-auto text-center text-white space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Ready to Start Shopping?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/80">
                  Join thousands of happy customers and discover amazing deals
                  on quality products.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/auth/register">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="h-14 px-8 text-lg"
                    >
                      Create Account
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-lg bg-transparent border-white text-white hover:bg-white/10"
                    >
                      Browse Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </LazyWrapper>
        </Suspense>
      </section>
    </div>
  );
}
