import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrScannerComponent } from './qr-scanner.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
    QrScannerComponent
  ],
  exports: [
    QrScannerComponent
  ]
})
export class QrScannerComponentModule { }
