import { NgModule } from '@angular/core';
import { FirstRunGuard } from './guards/first-run.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },

  {
    path: '',
    redirectTo: 'begin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'begin',
    canActivate: [FirstRunGuard],
    loadChildren: () => import('./begin/begin.module').then(m => m.BeginPageModule)
  },
  {
    path: 'next',
    loadChildren: () => import('./next/next.module').then(m => m.NextPageModule)
  },
  {
    path: 'known-page',
    loadChildren: () => import('./known-page/known-page.module').then(m => m.KnownPagePageModule)
  },
  {
    path: 'warning',
    loadChildren: () => import('./warning/warning.module').then(m => m.WarningPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then(m => m.PopoverPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },


  {
    path: '**',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
