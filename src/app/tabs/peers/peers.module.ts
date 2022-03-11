import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeersPageRoutingModule } from './peers-routing.module';

import { PeersPage } from './peers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeersPageRoutingModule
  ],
  declarations: [PeersPage]
})
export class PeersPageModule {}
