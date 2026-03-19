import { useQuery } from "@tanstack/react-query";
import { GetAllBrands } from "@/services/brandServices";

export const BRANDS_QUERY_KEY = "brands";

export function useBrands() {
  return useQuery({
    queryKey: [BRANDS_QUERY_KEY],
    queryFn: async () => {
      const response = await GetAllBrands();
      return response.data;
    },
  });
}
