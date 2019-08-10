import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovingMenuComponent } from './components/moving-menu/moving-menu.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HeaderComponent,
    MovingMenuComponent,
    AboutUsPageComponent,
    HomePageComponent,
    PortfolioPageComponent,
    ContactsPageComponent,
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
