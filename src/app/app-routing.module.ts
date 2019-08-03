import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '', redirectTo: 'AboutUs', pathMatch: 'full'},
    {path: 'AboutUs', component: AboutUsPageComponent},
    {path: '**', redirectTo: 'AboutUs', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsPageComponent]
