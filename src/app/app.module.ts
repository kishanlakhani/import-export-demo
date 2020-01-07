// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { BrowserModule , NgModule } from './shared/shared'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { CategoryModule } from './category/category.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


