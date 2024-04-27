import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fetchedData } from '../model/dummy-data';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(category: string): Product[] {
    // Должно вернуть массив нужных объектов товаров
    // return this.http.get(
    //   `http://localhost:8080/products?category=${category}`
    // );

    return fetchedData.filter((product) => product.category.name === category);
  }

  public getProduct(id: number) {
    // Должен вернуть нужный объект товара
    // return this.http.get(
    //   `http://localhost:8080/products?id=${id}`
    // );

    return fetchedData.find((product) => product.id == id);
  }
}
