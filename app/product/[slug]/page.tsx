"use client";
import { parseProductSlug } from "@/utils/handelUrl";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const { id, slug: productSlug } = parseProductSlug(slug as string);

  return (
    <div>
      <h1>Product Page</h1>
      <p>Slug: {productSlug}</p>
      <p>ID: {id}</p>
    </div>
  );
}
