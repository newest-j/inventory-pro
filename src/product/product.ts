export interface Product {
  category: string;
  icon: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
  status: string;
  supplier: string;
}

export interface ProductStatus {
  total_product: number;
  in_stock: number;
  low_stock: number;
  out_of_stock: number;
  total_categories: number;
  active_categories: number;
}

export interface ProductResponse {
  items: Product[];
  Status: ProductStatus;
}
