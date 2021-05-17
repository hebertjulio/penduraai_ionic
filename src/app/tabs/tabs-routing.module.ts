import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { LockService } from '../lock.service';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [
      AuthService,
      LockService
    ],
    children: [
      {
        path: 'record-list',
        loadChildren: () => import('../record-list/record-list.module').then(
          m => m.RecordListPageModule)
      },
      {
        path: 'customer-list',
        loadChildren: () => import('../customer-list/customer-list.module').then( m => m.CustomerListPageModule)
      },
      {
        path: 'merchant-list',
        loadChildren: () => import('../merchant-list/merchant-list.module').then( m => m.MerchantListPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(
          m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/record-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/record-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
