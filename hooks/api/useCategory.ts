import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const CategoriesEndPoint = process.env.NEXT_PUBLIC_CATEGORIES_ENDPOINT;

export const CATEGORY_QUERY_KEY = "category";

interface CategoryResponse {
  data: {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export function useCategory(slug: string) {
  return useQuery({
    queryKey: [CATEGORY_QUERY_KEY, slug],
    queryFn: async () => {
      const response = await axios.get<CategoryResponse>(`${BaseUrl}${CategoriesEndPoint}/${slug}`);
      return response.data.data;
    },
    enabled: !!slug,
  });
}
