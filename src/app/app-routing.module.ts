import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { OpenedProductComponent } from './components/opened-product/opened-product.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: 'products/product', component: OpenedProductComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
