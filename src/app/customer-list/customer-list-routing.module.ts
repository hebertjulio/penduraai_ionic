import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { LockService } from '../lock.service';
import { CustomerListPage } from './customer-list.page';


const routes: Routes = [
  {
    path: '',
    component: CustomerListPage,
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
export class CustomerListPageRoutingModule {}
