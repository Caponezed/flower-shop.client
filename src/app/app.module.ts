// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { OpenedProductComponent } from './components/opened-product/opened-product.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HomeComponent } from './views/home/home.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { ProductButtonsComponent } from './components/product-buttons/product-buttons.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewProductModalComponent } from './components/new-product-modal/new-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    HeroComponent,
    CatalogComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    OpenedProductComponent,
    CartComponent,
    FooterComponent,
    CartProductComponent,
    ProductButtonsComponent,
    AboutUsComponent,
    DeliveryComponent,
    FeedbackComponent,
    ContactsComponent,
    NewProductModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
