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
