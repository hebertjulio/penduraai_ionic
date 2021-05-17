import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomerListPageRoutingModule } from './customer-list-routing.module';
import { CustomerListPage } from './customer-list.page';
import { QrCodePageModule } from '../qr-code/qr-code.module';
import { QrScannerComponentModule } from '../qr-scanner/qr-scanner.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerListPageRoutingModule,
    QrCodePageModule,
    QrScannerComponentModule
  ],
  declarations: [
    CustomerListPage
  ]
})
export class CustomerListPageModule {}
