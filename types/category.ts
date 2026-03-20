export interface DummyJsonCategoriesResponse {
  categories: {
    name: string;
    slug: string;
    image: string;
  }[];
  total: number;
  skip: number;
  limit: number;
}

export interface FakeStoreCategory {
  id: number;
  name: string;
}
