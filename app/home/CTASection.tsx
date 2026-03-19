"use client";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import { Skeleton } from "@/components/skeleton";

export function CTASection() {
  return (
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
                Join thousands of happy customers and discover amazing deals on
                quality products.
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
  );
}
