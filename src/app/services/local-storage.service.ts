import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // Working with local storage
  public initLocalStorage(): void {
    if (localStorage.getItem('cartProducts')) return;
    console.log(`A local storage for cart products was created`);
    localStorage.setItem('cartProducts', '{}');
  }

  public getCartProducts() {
    this.initLocalStorage();

    const currentCartProductsJSON = localStorage.getItem('cartProducts');
    const currentCartProducts =
      currentCartProductsJSON && JSON.parse(currentCartProductsJSON);

    return currentCartProducts;
  }
  public getCartProduct(id: number): CartProduct | undefined {
    const currentCartProducts = this.getCartProducts();
    const searchedCartProduct = currentCartProducts[id];

    if (!searchedCartProduct) return;

    return searchedCartProduct;
  }
  public getArrOfCartProducts() {
    const cartProducts = this.getCartProducts();

    const cartProductsArr: CartProduct[] = [];
    for (const index in cartProducts) {
      cartProductsArr.push(cartProducts[index]);
    }

    return cartProductsArr;
  }

  public putCartProducts(newCartProducts: any): void {
    const newCartProductsJSON = JSON.stringify(newCartProducts);
    localStorage.setItem('cartProducts', newCartProductsJSON);
  }

  public removeCartProduct(id: number): void {
    const currentCartProducts = this.getCartProducts();

    if (currentCartProducts[id]) delete currentCartProducts[id];
    this.putCartProducts(currentCartProducts);
  }

  public clearCartProducts(): void {
    localStorage.removeItem('cartProducts');
  }

  public cloneProduct(product: CartProduct): CartProduct {
    return JSON.parse(JSON.stringify(product));
  }

  public countProductsPrice() {
    const cartProductsArr = this.getArrOfCartProducts();

    const cartProductsPrice = cartProductsArr.reduce(
      (productsPrice, currProduct) =>
        productsPrice + currProduct.price * (currProduct.quantity || 1),
      0
    );
    return cartProductsPrice;
  }
}
