import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodePage } from './qr-code.page';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    QRCodeModule
  ],
  declarations: [
    QrCodePage
  ],
  exports: [
    QrCodePage
  ]
})
export class QrCodePageModule { }
