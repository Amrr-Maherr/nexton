import { useQuery } from "@tanstack/react-query";
import { GetAllProducts } from "@/services/productServices";

export const PRODUCTS_QUERY_KEY = "products";

export interface UseProductsOptions {
  filters?: Record<string, string>;
}

export function useProducts(options?: UseProductsOptions) {
  const { filters } = options || {};

  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEY, filters],
    queryFn: async () => {
      const response = await GetAllProducts(filters);
      return response;
    },
  });
}
