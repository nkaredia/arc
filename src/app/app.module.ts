import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AppComponent,
  ArcGrid,
  ArcCol,
  ArcRow,
  ArcCarousel,
  ArcCarouselItem,
  ArcCarouselNavigation
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ArcGrid,
    ArcRow,
    ArcCol,
    ArcCarousel,
    ArcCarouselNavigation,
    ArcCarouselItem
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
