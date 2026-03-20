import { useQuery } from "@tanstack/react-query";
import { GetAllCategories, GetDummyJsonCategories, GetFakeStoreCategories } from "@/services/categoryServices";

export const CATEGORIES_QUERY_KEY = "categories";
export const DUMMY_JSON_CATEGORIES_QUERY_KEY = "dummyJsonCategories";
export const FAKE_STORE_CATEGORIES_QUERY_KEY = "fakeStoreCategories";

export function useCategories(filters?: Record<string, string>) {
  return useQuery({
    queryKey: [CATEGORIES_QUERY_KEY, filters],
    queryFn: async () => {
      const response = await GetAllCategories(filters);
      return response.data;
    },
  });
}

export function useDummyJsonCategories() {
  return useQuery({
    queryKey: [DUMMY_JSON_CATEGORIES_QUERY_KEY],
    queryFn: async () => {
      const response = await GetDummyJsonCategories();
      return response.categories;
    },
  });
}

export function useFakeStoreCategories() {
  return useQuery({
    queryKey: [FAKE_STORE_CATEGORIES_QUERY_KEY],
    queryFn: async () => {
      const response = await GetFakeStoreCategories();
      return response;
    },
  });
}
