import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MerchantListPageRoutingModule } from './merchant-list-routing.module';
import { MerchantListPage } from './merchant-list.page';
import { QrCodePageModule } from '../qr-code/qr-code.module';
import { QrScannerComponentModule } from '../qr-scanner/qr-scanner.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchantListPageRoutingModule,
    QrCodePageModule,
    QrScannerComponentModule
  ],
  declarations: [
    MerchantListPage
  ]
})
export class MerchantListPageModule {}
