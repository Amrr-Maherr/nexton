import { useQuery } from "@tanstack/react-query";
import { GetSingleProducts } from "@/services/productServices";
import type { Product } from "@/types/product";

export const SINGLE_PRODUCT_QUERY_KEY = "singleProduct";

export function useProduct(id: string) {
  return useQuery<Product>({
    queryKey: [SINGLE_PRODUCT_QUERY_KEY, id],
    queryFn: async () => {
      const response = await GetSingleProducts(id);
      return response.data;
    },
    enabled: !!id,
  });
}
