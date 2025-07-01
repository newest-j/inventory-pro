export interface Product {
  category: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  status: "active" | "inactive" | "discontinued";
  supplier: string;
  location: string;
  lowstock: number;
  description: string;
}

export interface ProductStatus {
  total_product: number;
  in_stock: number;
  low_stock: number;
  out_of_stock: number;
  total_categories: number;
  active_categories: number;
}

// export interface UserResponse {
//   products: Product[];
//   stats: ProductStatus;
// }
