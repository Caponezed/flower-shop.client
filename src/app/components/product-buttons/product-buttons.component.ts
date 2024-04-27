import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css'],
})
export class ProductButtonsComponent implements OnInit {
  @Input() product!: Product;
  public cartProduct?: Product;

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly data: DataService
  ) {}

  ngOnInit() {
    this.initCartProduct();
  }

  private initCartProduct() {
    let cartProduct = this.localStorage.getCartProduct(this.product.id);

    if (!cartProduct) {
      cartProduct = this.localStorage.cloneProduct(this.product);
      cartProduct.count = 0;
    }

    this.cartProduct = cartProduct;
  }

  private updateCartProducts() {
    const newCartProducts = this.localStorage.getCartProducts();
    newCartProducts[this.cartProduct!.id] = this.cartProduct;
    this.localStorage.putCartProducts(newCartProducts);
  }

  public addCartProduct() {
    if (this.cartProduct?.count === undefined) return;

    this.cartProduct!.count++;

    this.updateCartProducts();

    this.data.setNewCartProducts(this.localStorage.getCartProducts());
  }

  public removeCartProduct() {
    if (this.cartProduct!.count === 1) {
      this.localStorage.removeCartProduct(this.cartProduct!.id);
      this.cartProduct!.count--;

      this.data.setNewCartProducts(this.localStorage.getCartProducts());
      return;
    }

    this.cartProduct!.count!--;

    this.updateCartProducts();

    this.data.setNewCartProducts(this.localStorage.getCartProducts());
  }
}
