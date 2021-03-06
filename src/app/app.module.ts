import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { MovingMenuComponent } from './components/moving-menu/moving-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PhotoSliderComponent } from './components/photo-slider/photo-slider.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    MovingMenuComponent,
    ProductListComponent,
    PhotoSliderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    LazyLoadImageModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
