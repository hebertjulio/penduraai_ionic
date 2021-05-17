import { Component, OnInit } from '@angular/core';
import { LoadingController, PopoverController } from '@ionic/angular';
import { Profile } from '../api.interface';
import { ApiService } from '../api.service';
import { ProfileUnlockPage } from '../profile-unlock/profile-unlock.page';


@Component({
  selector: 'app-profile-choose',
  templateUrl: './profile-choose.page.html',
  styleUrls: ['./profile-choose.page.scss'],
})
export class ProfileChoosePage implements OnInit {

  profileList: Profile[];

  constructor(
    private loadingCtl: LoadingController,
    private popoverCtl: PopoverController,
    private api: ApiService
  ) { }

  async refreshData(event: any) {
    this.profileList = await this.api.getProfileList() as Profile[];
    event.target.complete();
  }

  async unlock(profile: Profile) {
    const popover = await this.popoverCtl.create({
      component: ProfileUnlockPage,
      componentProps: { profile }
    });
    await popover.present();
  }

  async loadData() {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    await loading.present();
    this.profileList = await this.api.getProfileList() as Profile[];
    await loading.dismiss();
  }

  ngOnInit() {
    this.loadData();
  }
}
