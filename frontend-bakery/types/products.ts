export type ProductType = {
  id: number,
  productName?: string;
  description?: string;
  slug?: string;
  available?: boolean;
  price?: number;
  type?: string;
  taste?: string;
  isFeatured?: boolean;
  image: {
      id: number;
      url: string;
  }[];
  category: {
    data: {
      attributes: {
        slug: string;
        categoryName: string;
      }
    }
  }
}