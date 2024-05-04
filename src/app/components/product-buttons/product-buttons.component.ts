import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import ProductService from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css'],
})
export class ProductButtonsComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  public quantity!: number;

  constructor(
    private readonly dataService: DataService,
    private readonly productService: ProductService
  ) {}

  ngOnInit() {
    this.initData();
  }

  private initData() {
    this.productService
      .getCartProductById(this.product.productId)
      .pipe(take(1))
      .subscribe((cartProduct) => (this.quantity = cartProduct.quantity));
  }

  // Increase methods
  public addCartProduct() {
    if (this.quantity === 0) {
      this.postCartProduct();
    } else {
      this.incrementCartProduct();
    }
  }
  public postCartProduct() {
    if (this.quantity !== 0) return;

    this.productService
      .postCartProduct(this.product.productId)
      .pipe(take(1))
      .subscribe((newCartProducts) => {
        this.quantity = 1;
        this.dataService.setNewCartProducts(newCartProducts);
      });
  }
  public incrementCartProduct() {
    if (this.quantity === 0) return;

    this.productService
      .setCartProductQuantity(this.product.productId, this.quantity + 1)
      .pipe(take(1))
      .subscribe((newCartProducts) => {
        ++this.quantity;
        this.dataService.setNewCartProducts(newCartProducts);
      });
  }

  // Decrease methods
  public async removeCartProduct() {
    if (this.quantity === 1) {
      this.deleteCartProduct();
    } else {
      this.decrementCartProduct();
    }
  }
  public async deleteCartProduct() {
    if (this.quantity !== 1) return;

    this.productService
      .deleteCartProductById(this.product.productId)
      .pipe(take(1))
      .subscribe((newCartProducts) => {
        this.quantity = 0;
        this.dataService.setNewCartProducts(newCartProducts);
      });
  }
  public async decrementCartProduct() {
    if (this.quantity === 1) return;

    this.productService
      .setCartProductQuantity(this.product.productId, this.quantity - 1)
      .pipe(take(1))
      .subscribe((newCartProducts) => {
        --this.quantity;
        this.dataService.setNewCartProducts(newCartProducts);
      });
  }
}
