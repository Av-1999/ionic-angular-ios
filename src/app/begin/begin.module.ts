import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeginPageRoutingModule } from './begin-routing.module';

import { BeginPage } from './begin.page';
import { SwiperModule } from 'swiper/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeginPageRoutingModule,
    SwiperModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [BeginPage]
})
export class BeginPageModule {}
