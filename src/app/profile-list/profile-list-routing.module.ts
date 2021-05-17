import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { LockService } from '../lock.service';
import { ProfileListPage } from './profile-list.page';


const routes: Routes = [
  {
    path: '',
    component: ProfileListPage,
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
export class ProfileListPageRoutingModule {}
