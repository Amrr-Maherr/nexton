import { useQuery } from "@tanstack/react-query";
import { GetAllProducts } from "@/services/productServices";

export const PRODUCTS_QUERY_KEY = "products";

export interface UseProductsOptions {
  page?: number;
}

export function useProducts(page?: number) {

  return useQuery({
    queryKey: [PRODUCTS_QUERY_KEY, page],
    queryFn: async () => {
      const response = await GetAllProducts(page);
      return response;
    },
  });
}
