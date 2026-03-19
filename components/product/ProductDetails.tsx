interface ProductDetailsProps {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export function ProductDetails({
  id,
  slug,
  createdAt,
  updatedAt,
}: ProductDetailsProps) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Product Details</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">Product ID:</span> {id}
        </p>
        <p>
          <span className="font-semibold">Slug:</span> {slug}
        </p>
        <p>
          <span className="font-semibold">Created:</span>{" "}
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Updated:</span>{" "}
          {new Date(updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
