import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartProduct } from 'src/app/model/cart-product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cartProduct!: CartProduct;
}
