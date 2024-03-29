import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
  RouterModule.forRoot([
      {path: '', component: ProductListComponent },
      {path: 'products/:id', component: ProductDetailComponent},
    ]) 
  ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
