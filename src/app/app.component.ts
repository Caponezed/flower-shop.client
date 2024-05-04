import { Component } from '@angular/core';
import { Product } from './model/product';
import { CartProduct } from './model/cart-product';
import ProductService from './services/product.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Flower Shop';
}
