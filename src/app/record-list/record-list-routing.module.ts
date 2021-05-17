import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { LockService } from '../lock.service';
import { RecordListPage } from './record-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecordListPage,
    canActivate: [
      AuthService,
      LockService
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordListPageRoutingModule {}
