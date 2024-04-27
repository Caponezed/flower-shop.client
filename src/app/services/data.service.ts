import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cartProducts = new Subject<any>();
  public cartProducts$ = this.cartProducts.asObservable();

  public setNewCartProducts(newCartProducts: any) {
    this.cartProducts.next(newCartProducts);
    console.log(`New cart Products were set`, newCartProducts);
  }
}
