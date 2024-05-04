import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { CartProduct } from 'src/app/model/cart-product';
import { Product } from 'src/app/model/product';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
  @Input() cartProducts!: CartProduct[];
  @Output() productDeleted = new EventEmitter();

  constructor(private readonly productService: ProductService) {}

  public deleteProduct(): void {
    this.productService
      .deleteProductById(
        this.product.productId,
        this.product.category.categoryId
      )
      .pipe(take(1))
      .subscribe((newProducts) => {
        this.productDeleted.emit(newProducts);
      });
  }
}
