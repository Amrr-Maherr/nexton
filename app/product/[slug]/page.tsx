"use client";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  // slug format: "product-name-6439d61c0049ad0b52b90051"
  // Extract ID from slug (last part after last hyphen)
  const id = typeof slug === "string" ? slug.split("-").pop() : slug;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Slug: {slug}</p>
      <p>ID: {id}</p>
    </div>
  );
}
