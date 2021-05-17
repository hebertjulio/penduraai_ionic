import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LoadingController, ModalController } from '@ionic/angular';
import { Role } from '../api.interface';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.page.html',
  styleUrls: ['./profile-create.page.scss'],
})
export class ProfileCreatePage implements OnInit {

  roleList: Array<Role>;
  form: FormGroup;

  constructor(
    private api: ApiService,
    private loadingCtl: LoadingController,
    private modalCtl: ModalController,
    private socialSharing: SocialSharing,
    private formBuilder: FormBuilder
  ) { }

  async closeModal() {
    this.modalCtl.dismiss();
  }

  async submitForm() {
    this.socialSharing.share('message', 'subject', '', 'http://localhost').then(() => {
      console.log('sucesso');
    }).catch(e => {
      console.log(e);
    });
    this.closeModal();
  }

  async loadData() {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    try {
      await loading.present();
      this.roleList = await this.api.getProfileRoles() as Array<Role>;
      await loading.dismiss();
    } catch (error) {

    }
  }

  loadForm() {
    this.form = this.formBuilder.group({
      role: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }

  ngOnInit() {
    this.loadData();
    this.loadForm();
  }
}
