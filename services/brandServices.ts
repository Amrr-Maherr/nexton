import { BrandsResponse } from './../types/product';
import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const BrandsEndPoint = process.env.NEXT_PUBLIC_BRANDS_ENDPOINT;

export const GetAllBrands = async (Filters?: Record<string, string>): Promise<BrandsResponse> => {
    try {
        const response = await axios.get<BrandsResponse>(`${BaseUrl}${BrandsEndPoint}`, {
            params: Filters
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
