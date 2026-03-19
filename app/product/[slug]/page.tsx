"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GetSingleProducts } from "@/services/productServices";
import { parseProductSlug } from "@/utils/parseProductSlug";
import type { Product } from "@/types/product";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const { id, slug: productSlug } = parseProductSlug(slug as string);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await GetSingleProducts(id as string);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="main_container py-8">
        <p className="text-center opacity-70">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="main_container py-8">
        <p className="text-center text-red-500">
          {error || "Product not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="main_container py-8">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="opacity-70">ID: {product.id}</p>
      <p className="opacity-70">Price: ${product.price}</p>
    </div>
  );
}
