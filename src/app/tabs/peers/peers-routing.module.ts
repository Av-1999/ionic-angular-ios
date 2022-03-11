import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeersPage } from './peers.page';

const routes: Routes = [
  {
    path: '',
    component: PeersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeersPageRoutingModule {}
