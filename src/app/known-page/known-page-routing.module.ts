import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KnownPagePage } from './known-page.page';

const routes: Routes = [
  {
    path: '',
    component: KnownPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnownPagePageRoutingModule {}
