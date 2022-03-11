import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabExplorePage } from './tab-explore.page';

const routes: Routes = [
  {
    path: '',
    component: TabExplorePage
  },
  {
    path:'profile',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabExplorePageRoutingModule {}
