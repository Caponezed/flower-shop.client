import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public productsPrice?: number;

  private subs!: Subscription;

  constructor(
    private readonly data: DataService,
    private readonly localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.productsPrice = this.localStorage.countProductsPrice();
    this.subs = this.data.cartProducts$.subscribe(
      () => (this.productsPrice = this.localStorage.countProductsPrice())
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
