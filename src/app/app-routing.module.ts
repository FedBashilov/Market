import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'portfolio', component: PortfolioPageComponent},
    {path: 'about-us', component: AboutUsPageComponent},
    {path: 'contacts', component: ContactsPageComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsPageComponent]
