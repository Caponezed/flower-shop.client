import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProducts?: Product[];
  public productsPrice?: number;
  public deliveryPrice: number = 300;

  private subs!: Subscription;

  constructor(
    private localStorage: LocalStorageService,
    public readonly data: DataService
  ) {}

  ngOnInit() {
    this.initCartProducts();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public initCartProducts(): void {
    this.cartProducts = this.localStorage.getArrOfCartProducts();
    this.productsPrice = this.localStorage.countProductsPrice();

    this.subs = this.data.cartProducts$.subscribe((cartProducts) => {
      const cartProductsArr = this.localStorage.getArrOfCartProducts();
      this.cartProducts = cartProductsArr;
      this.productsPrice = this.localStorage.countProductsPrice();
      console.log(`cartProducts in cart component were set`, cartProducts);
    });
  }

  public clearCartProducts() {
    this.localStorage.clearCartProducts();

    const cartProductsArr = this.localStorage.getArrOfCartProducts();
    this.cartProducts = cartProductsArr;

    this.data.setNewCartProducts(this.localStorage.getCartProducts());
  }
}
