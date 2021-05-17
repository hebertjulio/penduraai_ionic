import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecordDetailPage } from './record-detail.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    RecordDetailPage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class RecordDetailPageModule {}
