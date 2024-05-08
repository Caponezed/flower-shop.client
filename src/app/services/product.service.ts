import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { CartProduct } from '../model/cart-product';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs';
import { DbProduct } from '../model/DbProduct';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  // GET METHODS
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
  public getProductsByCategory(categoryName: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/products?categoryName=${categoryName}`
    );
  }
  public getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.apiUrl}/product?productId=${productId}`
    );
  }

  public getCartProductById(productId: number): Observable<CartProduct> {
    return this.http.get<CartProduct>(
      `${this.apiUrl}/cartProduct?productId=${productId}`
    );
  }
  public getAllCartProducts(): Observable<CartProduct[]> {
    return this.http
      .get<CartProduct[]>(`${this.apiUrl}/cartProducts`)
      .pipe(take(1));
  }
  public getCartProductsByCategory(
    categoryName: string
  ): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(
      `${this.apiUrl}/cartProducts?categoryName=${categoryName}`
    );
  }

  // POST METHODS
  public postNewDbProduct(newDbProduct: DbProduct): Observable<Product[]> {
    console.log(`Post new db product query is sent`);
    return this.http.post<Product[]>(`${this.apiUrl}/product`, newDbProduct);
  }
  public postCartProduct(productId: number) {
    console.log(`Post query is sent`);
    return this.http.post<CartProduct[]>(
      `${this.apiUrl}/cartProduct?productId=${productId}`,
      ''
    );
  }

  // UPDATE METHODS
  public setCartProductQuantity(
    productId: number,
    nextQuantity: number
  ): Observable<CartProduct[]> {
    console.log(`Put query is sent`);
    return this.http.put<CartProduct[]>(
      `${this.apiUrl}/cartProduct?productId=${productId}&quantity=${nextQuantity}`,
      { productId, quantity: nextQuantity }
    );
  }
  public setProduct(modifiedProduct: Product) {
    return this.http.put<Product[]>(`${this.apiUrl}/product`, modifiedProduct);
  }

  // DELETE METHODS
  public deleteAllCartProducts() {
    console.log(`Delete all cart products query is sent`);
    return this.http.delete(`${this.apiUrl}/cartProducts`);
  }
  public deleteCartProductById(productId: number): Observable<CartProduct[]> {
    console.log(`Delete cart product query by Id is sent`);
    return this.http.delete<CartProduct[]>(
      `${this.apiUrl}/cartProduct?productId=${productId}`
    );
  }
  public deleteProductById(
    productId: number,
    categoryId: number
  ): Observable<Product[]> {
    console.log(`Delete product query by Id is sent`);
    return this.http.delete<Product[]>(
      `${this.apiUrl}/product?productId=${productId}&categoryId=${categoryId}`
    );
  }

  // ?????
  public createCartProduct(product: Product): CartProduct {
    const newCartProduct = JSON.parse(JSON.stringify(product));
    newCartProduct.quantity = 1;
    return newCartProduct;
  }
}
