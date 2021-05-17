import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { Record, Sheet } from '../api.interface';
import { ApiService } from '../api.service';
import { QrCodePage } from '../qr-code/qr-code.page';
import { RecordCreatePage } from '../record-create/record-create.page';
import { RecordDetailPage } from '../record-detail/record-detail.page';


@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.page.html',
  styleUrls: ['./record-list.page.scss']
})
export class RecordListPage implements OnInit {

  sheetId: number;
  sheet: Sheet;
  recordList: Record[];

  constructor(
    private api: ApiService,
    private popoverCtl: PopoverController,
    private loadingCtl: LoadingController,
    private activateRoute: ActivatedRoute,
    private navCtl: NavController,
    private modalCtl: ModalController
  ) { }

  async showDetail(record: Record) {
    const popover = await this.popoverCtl.create({
      component: RecordDetailPage,
      componentProps: { record }
    });
    await popover.present();
  }

  async newRecord(operation: string) {
    const modal = await this.modalCtl.create({
      component: RecordCreatePage,
      componentProps: { operation }
    });
    await modal.present();
    await modal.onWillDismiss().then(({data}) => {
      if (data !== '') {
        this.showQrCode(data);
      }
    });
  }

  async showQrCode(transaction: string) {
    const modal = await this.modalCtl.create({
      component: QrCodePage,
      componentProps: { transaction }
    });
    await modal.present();
    await modal.onWillDismiss().then(({data}) => {
      this.loadData(this.sheetId, data === 'CONFIRMED');
    });
  }

  async refreshData(event: any) {
    this.loadData(this.sheetId, true);
    event.target.complete();
  }

  async loadData(sheetId: number, force: boolean) {
    if (force || (!this.sheet && !this.recordList)) {
      const loading = await this.loadingCtl.create({
        message: 'Please wait...',
        keyboardClose: false,
        spinner: 'circles'
      });
      await loading.present();
      const filter = sheetId ? 'sheet_id=' + sheetId : '';
      this.sheet = sheetId ? await this.api.getSheet(sheetId) as Sheet : null;
      this.recordList = await this.api.getRecordList(filter) as Record[];
      await loading.dismiss();
    }
  }

  loadParams() {
    this.activateRoute.queryParams.subscribe(params => {
      this.sheetId = params.sheet_id;
    });
  }

  ngOnInit() {
    this.loadParams();
    this.loadData(this.sheetId, false);
  }
}
