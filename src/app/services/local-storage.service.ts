import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private cartProducts = new Subject<any>();
  public cartProducts$ = this.cartProducts.asObservable();

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
  public getCartProduct(id: number): Product | undefined {
    const currentCartProducts = this.getCartProducts();
    const searchedCartProduct = currentCartProducts[id];

    if (!searchedCartProduct) return;

    return searchedCartProduct;
  }
  public getArrOfCartProducts() {
    const cartProducts = this.getCartProducts();

    const cartProductsArr: Product[] = [];
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

  public cloneProduct(product: Product): Product {
    return JSON.parse(JSON.stringify(product));
  }

  public countProductsPrice() {
    const cartProductsArr = this.getArrOfCartProducts();

    const productsPrice = cartProductsArr.reduce(
      (productsPrice, currProduct) =>
        productsPrice + currProduct.price * (currProduct.count || 1),
      0
    );
    return productsPrice;
  }
}
