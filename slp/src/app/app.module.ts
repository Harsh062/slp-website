import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SlpTopNavComponent } from './components/slp-top-nav/slp-top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    SlpTopNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
