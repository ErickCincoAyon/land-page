import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { LandPageComponent } from './land-page.component';

@NgModule({
  declarations: [
    LandPageComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
  ],
  exports: [
    LandPageComponent
  ]
})
export class LandPageModule { }
