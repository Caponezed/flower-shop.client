import { Category } from './category';

export interface CartProduct {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  imgUrl: string;
  totalQuantity: number;
  quantity: number;
  category: Category;
}
