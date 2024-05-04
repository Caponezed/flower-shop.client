import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public cartProductsPrice?: number;

  constructor(
    public readonly dataService: DataService,
    private readonly productService: ProductService
  ) {}

  ngOnInit() {
    this.initData();
  }

  private async initData() {
    this.productService.getAllCartProducts().subscribe((cartProducts) => {
      this.cartProductsPrice =
        this.dataService.countCartProductsPrice(cartProducts);
    });

    this.dataService.cartProducts$.subscribe(
      (cartProducts) =>
        (this.cartProductsPrice =
          this.dataService.countCartProductsPrice(cartProducts))
    );
  }
}
