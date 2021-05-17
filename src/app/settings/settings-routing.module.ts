import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { LockService } from '../lock.service';
import { SettingsPage } from './settings.page';


const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
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
export class SettingsPageRoutingModule {}
