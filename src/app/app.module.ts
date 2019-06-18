import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoodService } from './food.service';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FoodService], // THIS IS DI
  bootstrap: [AppComponent]
})
export class AppModule { }