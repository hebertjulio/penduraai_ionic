import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { ApiError } from '../api.error';
import { Sheet } from '../api.interface';
import { ApiService } from '../api.service';
import { QrCodePage } from '../qr-code/qr-code.page';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

  sheetList: Sheet[];
  error: ApiError;

  constructor(
    private api: ApiService,
    private activateRoute: ActivatedRoute,
    private loadingCtl: LoadingController,
    private modalCtl: ModalController,
    private navCtl: NavController
  ) { }

  async newCustomer() {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    await loading.present();
    try {
      const sheet = await this.api.newSheet() as Sheet;
      await loading.dismiss();
      await this.showQrCode(sheet.transaction);
    } catch (error) {
      await loading.dismiss();
      this.error = error as ApiError;
    }
  }

  async showRecords(sheet: Sheet) {
    this.navCtl.navigateForward('record-list?sheet_id=' + sheet.id);
  }

  async showQrCode(transaction: string) {
    const modal = await this.modalCtl.create({
      component: QrCodePage,
      componentProps: { transaction }
    });
    await modal.present();
    await modal.onWillDismiss().then(({data}) => {
      if (data !== '') {
        this.loadData(data === 'CONFIRMED');
      }
    });
  }

  async refreshData(event: any) {
    this.loadData(true);
    event.target.complete();
  }

  async loadData(force: boolean) {
    if (force || !this.sheetList) {
      const loading = await this.loadingCtl.create({
        message: 'Please wait...',
        keyboardClose: false,
        spinner: 'circles'
      });
      await loading.present();
      this.sheetList = await this.api.getSheetList('customer') as Sheet[];
      await loading.dismiss();
    }
  }

  ngOnInit() {
    this.loadData(false);
  }
}
