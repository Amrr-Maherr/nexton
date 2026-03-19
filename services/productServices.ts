import { Product, ProductsResponse } from './../types/product';
import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const ProductsEndPoint = process.env.NEXT_PUBLIC_PRODUCTS_ENDPOINT;

export const GetAllProducts = async (Filters?: Record<string, string>): Promise<ProductsResponse> => {
    try {
        const response = await axios.get<ProductsResponse>(`${BaseUrl}${ProductsEndPoint}`, {
            params: Filters
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export const GetSingleProducts = async (id: string): Promise<{ data: Product }> => {
    try {
        const response = await axios.get<{ data: Product }>(`${BaseUrl}${ProductsEndPoint}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}