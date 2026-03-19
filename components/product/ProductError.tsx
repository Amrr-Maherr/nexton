interface ProductErrorProps {
  error?: Error | null;
}

export function ProductError({ error }: ProductErrorProps) {
  return (
    <div className="main_container py-8">
      <p className="text-center text-red-500">
        {error ? "Failed to load product" : "Product not found"}
      </p>
    </div>
  );
}
