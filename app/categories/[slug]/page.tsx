"use client";
import { useParams } from "next/navigation";
import { useCategory } from "@/hooks/api";
import { DetailsSkeleton } from "@/components/skeleton";
import Image from "next/image";
import Link from "next/link";
import { parseProductSlug } from "@/utils/parseProductSlug";
import { Package, Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function CategoryDetailPage() {
  const params = useParams();
  const { slug } = params;
  const { id } = parseProductSlug(slug as string);
  const {
    data: category,
    isLoading,
    isFetching,
    error,
  } = useCategory(id as string);

  // Show skeleton during initial load or when fetching new data
  if (isLoading || isFetching) {
    return (
      <div className="main_container py-8">
        <DetailsSkeleton variant="category" />
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

  const createdDate = new Date(
    category.createdAt || Date.now(),
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedDate = new Date(
    category.updatedAt || Date.now(),
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="main_container py-8">
      {/* Category Header - Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent mb-8">
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Category Image */}
          <div className="relative aspect-square md:aspect-auto md:h-80 rounded-xl overflow-hidden bg-white shadow-lg mx-auto w-full max-w-sm">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover p-4"
              priority
            />
          </div>

          {/* Category Info */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Tag className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Category
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />/
                {category.slug}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              >
                <Package className="h-5 w-5" />
                Browse Products
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-secondary/70 transition-colors"
              >
                All Categories
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Info Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="border rounded-xl p-5 bg-card shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Tag className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Category Name</p>
          </div>
          <p className="font-semibold text-lg truncate">{category.name}</p>
        </div>

        <div className="border rounded-xl p-5 bg-card shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Created</p>
          </div>
          <p className="font-semibold text-lg">{createdDate}</p>
        </div>

        <div className="border rounded-xl p-5 bg-card shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Last Updated</p>
          </div>
          <p className="font-semibold text-lg">{updatedDate}</p>
        </div>

        <div className="border rounded-xl p-5 bg-card shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Slug</p>
          </div>
          <p className="font-semibold text-lg truncate">/{category.slug}</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="border rounded-xl p-6 bg-card shadow-sm mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-full" />
          Category Information
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Category ID</p>
            <p className="font-semibold font-mono text-sm bg-secondary/30 inline-block px-3 py-1.5 rounded-lg">
              {category._id}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">URL Slug</p>
            <p className="font-semibold font-mono text-sm bg-secondary/30 inline-block px-3 py-1.5 rounded-lg">
              /categories/{category.slug}-{category._id}
            </p>
          </div>
        </div>
      </div>

      {/* Browse All */}
      <div className="border rounded-xl p-6 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Browse All Categories</h2>
            <p className="text-muted-foreground">
              Explore our complete collection of categories
            </p>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline whitespace-nowrap"
          >
            View all categories
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
