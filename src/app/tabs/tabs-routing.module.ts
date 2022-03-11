import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./tab-home/tab-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'explore',
        loadChildren: () => import('./tab-explore/tab-explore.module').then(m => m.TabExplorePageModule),
      },
      {
        path: 'peers',
        loadChildren: () => import('./peers/peers.module').then(m => m.PeersPageModule)
      },
      {
        path: 'resource',
        loadChildren: () => import('./resource/resource.module').then(m => m.ResourcePageModule)
      },

    ]
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
