import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovingMenuComponent } from './components/moving-menu/moving-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovingMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
