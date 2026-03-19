"use client";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandCard } from "@/components/shared/card";
import { Skeleton } from "@/components/skeleton";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import { useBrands } from "@/hooks/api";

export function BrandsSection() {
  const { data: brands, isLoading } = useBrands();
  const featuredBrands = brands?.slice(0, 5) || [];

  return (
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
            {isLoading ? (
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
  );
}
