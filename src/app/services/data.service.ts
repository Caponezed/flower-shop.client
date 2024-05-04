import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartProduct } from '../model/cart-product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cartProducts = new Subject<CartProduct[]>();
  public cartProducts$ = this.cartProducts.asObservable();

  public setNewCartProducts(newCartProducts: CartProduct[]): void {
    this.cartProducts.next(newCartProducts);
  }

  public countCartProductsPrice(cartProducts: CartProduct[]): number {
    const cartProductsPrice = cartProducts.reduce(
      (productsPrice, currProduct) =>
        productsPrice + currProduct.price * (currProduct.quantity || 1),
      0
    );

    return cartProductsPrice;
  }
}
