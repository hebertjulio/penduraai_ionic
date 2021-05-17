import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordListPage } from './record-list.page';
import { RecordListPageRoutingModule } from './record-list-routing.module';
import { QrScannerComponentModule } from '../qr-scanner/qr-scanner.module';
import { RecordDetailPageModule } from '../record-detail/record-detail.module';
import { RecordCreatePageModule } from '../record-create/record-create.module';
import { QrCodePageModule } from '../qr-code/qr-code.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RecordListPageRoutingModule,
    QrScannerComponentModule,
    RecordDetailPageModule,
    RecordCreatePageModule,
    QrCodePageModule
  ],
  declarations: [
    RecordListPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class RecordListPageModule {}
