import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabExplorePageRoutingModule } from './tab-explore-routing.module';

import { TabExplorePage } from './tab-explore.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabExplorePageRoutingModule,
    NgCircleProgressModule.forRoot()
  ],
  declarations: [TabExplorePage]
})
export class TabExplorePageModule {}
