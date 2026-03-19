export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Review {
  _id: string;
  review?: string;
  rating: number;
  product: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Question {
  _id: string;
  question: string;
  answer?: string;
  product: string;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  sold: number | null;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  availableColors?: string[];
  reviews?: Review[];
  questions?: Question[];
}

export interface ProductsMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

export interface ProductsResponse {
  results: number;
  metadata: ProductsMetadata;
  data: Product[];
}

export interface CategoriesResponse {
  results: number;
  metadata: ProductsMetadata;
  data: Category[];
}

export interface BrandsResponse {
  results: number;
  metadata: ProductsMetadata;
  data: Brand[];
}
