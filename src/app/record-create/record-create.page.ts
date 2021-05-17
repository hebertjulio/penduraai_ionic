import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ApiError } from '../api.error';
import { Record } from '../api.interface';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-record-create',
  templateUrl: './record-create.page.html',
  styleUrls: ['./record-create.page.scss'],
})
export class RecordCreatePage implements OnInit {

  @Input()
  operation: string;

  form: FormGroup;
  error: ApiError;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private loadingCtl: LoadingController,
    private modalCtl: ModalController
  ) { }

  async newRecord(operation: string) {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    try {
      await loading.present();
      const body = { ...this.form.value, operation } as Record;
      const record = await this.api.newRecord(body) as Record;
      await loading.dismiss();
      this.modalCtl.dismiss(record.transaction);
    } catch (error) {
      await loading.dismiss();
      this.error = error as ApiError;
    }
  }

  closeModal() {
    this.modalCtl.dismiss();
  }

  loadForm() {
    this.form = this.formBuilder.group({
      value: ['', Validators.compose([
        Validators.required,
      ])],
      note: ['', Validators.compose([
        Validators.maxLength(200),
      ])],
    });
  }

  ngOnInit() {
    this.loadForm();
  }
}
