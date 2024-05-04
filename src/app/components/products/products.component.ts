import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, take } from 'rxjs';

import { Product } from 'src/app/model/product';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products!: Product[];

  public categoryId!: number;
  public categoryName!: string;
  public isModalOpened: boolean = false;
  private subs!: Subscription;
  public isEmpty: boolean = false;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initData();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private initData() {
    this.subs = this.route.queryParams.subscribe((queryParams) => {
      this.categoryId = queryParams['categoryId'];
      this.categoryName = queryParams['categoryName'];

      this.productService
        .getProductsByCategory(this.categoryName)
        .pipe(take(1))
        .subscribe((products) => {
          this.products = products;
          this.checkProductsExistance(products);
        });
    });
  }

  public checkProductsExistance(products: Product[]): boolean {
    return products.length === 0
      ? (this.isEmpty = true)
      : (this.isEmpty = false);
  }

  public toggleModal() {
    this.isModalOpened = !this.isModalOpened;
  }
}
