"use client";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/shared/card";
import { Skeleton } from "@/components/skeleton";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import { useCategories } from "@/hooks/api";

export function CategoriesSection() {
  const { data: categories, isLoading } = useCategories();
  const featuredCategories = categories?.slice(0, 5) || [];

  return (
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
            {isLoading ? (
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
  );
}
