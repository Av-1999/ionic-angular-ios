import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextPageRoutingModule } from './next-routing.module';

import { NextPage } from './next.page';
import { SwiperModule } from 'swiper/angular';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextPageRoutingModule,
    SwiperModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [NextPage]
})
export class NextPageModule {}
