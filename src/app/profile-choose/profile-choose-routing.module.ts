import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProfileChoosePage } from './profile-choose.page';


const routes: Routes = [
  {
    path: '',
    component: ProfileChoosePage,
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileChoosePageRoutingModule {}
