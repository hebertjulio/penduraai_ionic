import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { LockService } from '../lock.service';
import { MerchantListPage } from './merchant-list.page';


const routes: Routes = [
  {
    path: '',
    component: MerchantListPage,
    canActivate: [
      AuthService,
      LockService
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantListPageRoutingModule {}
