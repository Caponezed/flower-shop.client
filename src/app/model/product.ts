import { Category } from './category';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  totalQuantity: number;
  count?: number;
  category: Category;
}
