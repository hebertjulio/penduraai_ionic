import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPage } from './account.page';
import { AccountPageRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QrScannerComponentModule } from '../qr-scanner/qr-scanner.module';
import { UserEditPageModule } from '../user-edit/user-edit.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AccountPageRoutingModule,
    ReactiveFormsModule,
    QrScannerComponentModule,
    UserEditPageModule
  ],
  declarations: [
    AccountPage
  ]
})
export class AccountPageModule {}
