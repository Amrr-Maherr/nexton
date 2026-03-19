import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "@/services/categoryServices";

export const CATEGORIES_QUERY_KEY = "categories";

export function useCategories() {
  return useQuery({
    queryKey: [CATEGORIES_QUERY_KEY],
    queryFn: async () => {
      const response = await GetAllCategories();
      return response.data;
    },
  });
}
