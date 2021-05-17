import { Component, Input } from '@angular/core';
import { Record } from '../api.interface';


@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.page.html',
  styleUrls: ['./record-detail.page.scss'],
})
export class RecordDetailPage {

  @Input()
  record: Record;

  constructor(
  ) { }
}
