import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { BidsComponent } from './components/bids/bids.component';
import { BidItemComponent } from './components/bid-item/bid-item.component';
import { BidProductComponent } from './components/bid-product/bid-product.component';
import { BidDetailComponent } from './components/bid-detail/bid-detail.component';


const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'show-bids', component: BidsComponent },
  { path: 'show-bids/:id', component: BidDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ProductsComponent,
    ProductItemComponent,
    AddProductComponent,
    AboutComponent,
    FooterComponent,
    BidsComponent,
    BidItemComponent,
    BidProductComponent,
    BidDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
