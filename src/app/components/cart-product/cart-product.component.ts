import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent {
  @Input() cartProduct!: Product;
}
