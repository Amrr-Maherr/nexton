import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const BrandsEndPoint = process.env.NEXT_PUBLIC_BRANDS_ENDPOINT;

export const BRAND_QUERY_KEY = "brand";

interface BrandResponse {
  data: {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export function useBrand(slug: string) {
  return useQuery({
    queryKey: [BRAND_QUERY_KEY, slug],
    queryFn: async () => {
      const response = await axios.get<BrandResponse>(`${BaseUrl}${BrandsEndPoint}/${slug}`);
      return response.data.data;
    },
    enabled: !!slug,
  });
}
