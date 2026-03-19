"use client";
import { Suspense } from "react";
import { ShoppingBag, Zap, Truck, Shield, Star } from "lucide-react";
import LazyWrapper from "@/components/ui/lazy-wrapper";
import { Skeleton } from "@/components/skeleton";

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

export function FeaturesSection() {
  return (
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
  );
}
