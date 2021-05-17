import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { Profile } from '../api.interface';
import { ApiService } from '../api.service';
import { ProfileCreatePage } from '../profile-create/profile-create.page';
import { ProfileListMenuComponent } from '../profile-list-menu/profile-list-menu.component';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {

  profileList: Profile[];

  constructor(
    private loadingCtl: LoadingController,
    private popoverCtl: PopoverController,
    private modalCtl: ModalController,
    private api: ApiService
  ) { }

  async refreshData(event: any) {
    this.loadData(true);
    event.target.complete();
  }

  async newProfile() {
    const popover = await this.modalCtl.create({
      component: ProfileCreatePage,
    });
    await popover.present();
  }

  async openMenu(profile: Profile, event: any) {
    const popover = await this.popoverCtl.create({
      component: ProfileListMenuComponent,
      componentProps: {profile},
      event
    });
    await popover.present();
  }

  async loadData(force: boolean) {
    if (force || !this.profileList) {
      const loading = await this.loadingCtl.create({
        message: 'Please wait...',
        keyboardClose: false,
        spinner: 'circles'
      });
      await loading.present();
      this.profileList = await this.api.getProfileList('role__ne=owner') as Profile[];
      await loading.dismiss();
    }
  }

  ngOnInit() {
    this.loadData(false);
  }
}
