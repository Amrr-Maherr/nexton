"use client";
import { useParams } from "next/navigation";
import { useCategory } from "@/hooks/api";
import Image from "next/image";
import Link from "next/link";
import { parseProductSlug } from "@/utils/parseProductSlug";

export default function CategoryDetailPage() {
  const params = useParams();
  const { slug } = params;
  const { id, slug: productSlug } = parseProductSlug(slug as string);
  const { data: category, isLoading, error } = useCategory(id as string);

  if (isLoading) {
    return (
      <div className="main_container py-8">
        <p className="text-center opacity-70">Loading category...</p>
      </div>
    );
  }

  if (error || !category) {
    return (
      <div className="main_container py-8">
        <p className="text-center text-red-500">
          {error ? "Failed to load category" : "Category not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      {/* Category Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/50">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="opacity-70">/{category.slug}</p>
          <Link
            href="/products"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Browse Products
          </Link>
        </div>
      </div>

      {/* Category Info */}
      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Category Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm opacity-70">Category ID</p>
            <p className="font-semibold">{category._id}</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Slug</p>
            <p className="font-semibold">{category.slug}</p>
          </div>
          <div>
            <p className="text-sm opacity-70">Created</p>
            <p className="font-semibold">
              {new Date(category.createdAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm opacity-70">Updated</p>
            <p className="font-semibold">
              {new Date(category.updatedAt || Date.now()).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Browse All Categories</h2>
        <Link
          href="/categories"
          className="text-primary hover:underline"
        >
          View all categories →
        </Link>
      </div>
    </div>
  );
}
