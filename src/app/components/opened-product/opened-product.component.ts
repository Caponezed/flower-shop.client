import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-opened-product',
  templateUrl: './opened-product.component.html',
  styleUrls: ['./opened-product.component.css'],
})
export class OpenedProductComponent {
  public product?: Product;
  @Output() countChange = new EventEmitter();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const id: number = queryParams['id'];
      console.log(id);
      this.product = this.productService.getProduct(id);
    });
  }
}
