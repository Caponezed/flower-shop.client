import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartProduct } from 'src/app/model/cart-product';
import { DataService } from 'src/app/services/data.service';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public cartProducts?: CartProduct[];
  public cartProductsPrice?: number;
  public deliveryPrice: number = 300;

  private subs!: Subscription;

  constructor(
    public readonly data: DataService,
    private readonly productService: ProductService
  ) {}

  ngOnInit() {
    this.initData();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public initData(): void {
    this.productService.getAllCartProducts().subscribe((cartProducts) => {
      this.cartProducts = cartProducts;

      this.data.setNewCartProducts(cartProducts);
      this.data.countCartProductsPrice(cartProducts);
    });

    this.subs = this.data.cartProducts$.subscribe((cartProducts) => {
      this.cartProducts = cartProducts;
      this.cartProductsPrice = this.data.countCartProductsPrice(cartProducts);
    });
  }

  public clearCartProducts() {
    this.productService.deleteAllCartProducts().subscribe(() => {
      this.data.setNewCartProducts([]);
    });
  }
}
