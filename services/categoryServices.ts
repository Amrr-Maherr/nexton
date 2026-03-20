import { CategoriesResponse } from './../types/product';
import { DummyJsonCategoriesResponse, FakeStoreCategory } from './../types/category';
import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const CategoriesEndPoint = process.env.NEXT_PUBLIC_CATEGORIES_ENDPOINT;

export const GetAllCategories = async (Filters?: Record<string, string>): Promise<CategoriesResponse> => {
    try {
        const response = await axios.get<CategoriesResponse>(`${BaseUrl}${CategoriesEndPoint}`, {
            params: Filters
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const GetDummyJsonCategories = async (): Promise<DummyJsonCategoriesResponse> => {
    try {
        const response = await axios.get<DummyJsonCategoriesResponse>(`https://dummyjson.com/products/categories`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const GetFakeStoreCategories = async (): Promise<FakeStoreCategory[]> => {
    try {
        const response = await axios.get<FakeStoreCategory[]>(`https://fakestoreapi.com/products/categories`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}