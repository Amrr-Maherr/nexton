import { useQuery } from "@tanstack/react-query";
import { GetSingleProducts } from "@/services/productServices";

export const SINGLE_PRODUCT_QUERY_KEY = "singleProduct";

export function useProduct(id: string) {
  return useQuery({
    queryKey: [SINGLE_PRODUCT_QUERY_KEY, id],
    queryFn: async () => {
      const response = await GetSingleProducts(id);
      return response;
    },
    enabled: !!id, // Only fetch if id exists
  });
}
