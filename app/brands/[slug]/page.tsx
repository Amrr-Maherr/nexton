"use client";
import { useParams } from "next/navigation";
import { useBrand } from "@/hooks/api";
import Image from "next/image";
import Link from "next/link";
import { parseProductSlug } from "@/utils/parseProductSlug";

export default function BrandDetailPage() {
  const params = useParams();
  const { slug } = params;
  const { id, slug: productSlug } = parseProductSlug(slug as string);
  const { data: brand, isLoading, error } = useBrand(id as string);

  if (isLoading) {
    return (
      <div className="main_container py-8">
        <p className="text-center opacity-70">Loading brand...</p>
      </div>
    );
  }

  if (error || !brand) {
    return (
      <div className="main_container py-8">
        <p className="text-center text-red-500">
          {error ? "Failed to load brand" : "Brand not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      {/* Brand Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50 flex items-center justify-center p-8">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-4xl font-bold">{brand.name}</h1>
          <p className="opacity-70">/{brand.slug}</p>
          <Link
            href="/products"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Shop Products
          </Link>
        </div>
      </div>

      {/* Brand Info */}
      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Brand Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm opacity-70">Brand ID</p>
            <p className="font-semibold">{brand._id}</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Slug</p>
            <p className="font-semibold">{brand.slug}</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Created</p>
            <p className="font-semibold">
              {new Date(brand.createdAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm opacity-70">Updated</p>
            <p className="font-semibold">
              {new Date(brand.updatedAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Related Brands */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Browse All Brands</h2>
        <Link
          href="/brands"
          className="text-primary hover:underline"
        >
          View all brands →
        </Link>
      </div>
    </div>
  );
}
