import { Category } from './category';

export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  imgUrl: string;
  totalQuantity: number;
  category: Category;
}
