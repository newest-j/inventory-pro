import type { Product, ProductStatus } from "../product/product";

export default interface UserData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  password: string;
  phoneNumber: string;
  companySize: string;
  products?: Product[];
  stats?: ProductStatus;
}
