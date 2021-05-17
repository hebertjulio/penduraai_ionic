import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { Profile, User } from '../api.interface';
import { ApiService } from '../api.service';
import { UserEditPage } from '../user-edit/user-edit.page';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {

  user: User;
  profile: Profile;

  constructor(
    private api: ApiService,
    private loadingCtl: LoadingController,
    private navCtl: NavController,
    private modalCtl: ModalController
  ) { }

  async openUserEdit(user: User) {
    const modal = await this.modalCtl.create({
      component: UserEditPage,
      componentProps: { user }
    });
    await modal.present();
  }

  async goTo(url: string) {
    this.navCtl.navigateForward(url);
  }

  async loadData(force: boolean) {
    if (force || (!this.user || !this.profile)) {
      const loading = await this.loadingCtl.create({
        message: 'Please wait...',
        keyboardClose: false,
        spinner: 'circles'
      });
      await loading.present();
      this.user = await this.api.getCurrentUser() as User;
      this.profile = await this.api.getCurrentProfile() as Profile;
      await loading.dismiss();
    }
  }

  ngOnInit() {
    this.loadData(false);
  }
}
