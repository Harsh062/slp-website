import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SlpTopNavComponent } from './components/slp-top-nav/slp-top-nav.component';
import { SlpFooterComponent } from './components/slp-footer/slp-footer.component';

import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

/****ngx-bootstrap imports*****/
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SlpTopNavComponent,
    SlpFooterComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
