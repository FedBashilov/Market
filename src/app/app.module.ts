import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovingMenuComponent } from './components/moving-menu/moving-menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    MovingMenuComponent,
    ProductListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
