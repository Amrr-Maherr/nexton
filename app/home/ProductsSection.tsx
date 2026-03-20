"use client";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/card";
import { Skeleton } from "@/components/skeleton";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import { useProducts } from "@/hooks/api";
import Slider from "@/components/shared/slider/slider";

export function ProductsSection() {
  const { data: productsResponse, isLoading } = useProducts();
  const featuredProducts = productsResponse?.data?.slice(0, 8) || [];

  return (
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
            {isLoading ? (
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
              // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <Slider
                slidesPerView={6}
                slidesPerViewMobile={2.5}
                hideNavigation={false}
              >
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
              </Slider>
              // </div>
            )}
          </LazyWrapper>
        </Suspense>
      </div>
    </section>
  );
}
