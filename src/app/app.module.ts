import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovingMenuComponent } from './components/moving-menu/moving-menu.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HeaderComponent,
    MovingMenuComponent,
    AboutUsPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
