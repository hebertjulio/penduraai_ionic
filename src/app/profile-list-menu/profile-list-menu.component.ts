import { Component, Input } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Profile } from '../api.interface';


@Component({
  selector: 'app-profile-list-menu',
  templateUrl: './profile-list-menu.component.html',
  styleUrls: ['./profile-list-menu.component.scss'],
})
export class ProfileListMenuComponent {

  @Input()
  profile: Profile;

  constructor(
    private popoverCtl: PopoverController,
    private alertCtl: AlertController
  ) { }

  async deleteProfile(profile: Profile) {
    const alert = await this.alertCtl.create({
      header: this.profile.name,
      message: 'Confirm profile delete?',
      buttons: [
        {
          text: 'cancel',
          handler: () => {}
        },
        {
          text: 'Confirm',
          handler: () => {}
        }
      ]
    });
    this.popoverCtl.dismiss();
    await alert.present();
  }

  async alterRoleProfile(profile: Profile) {
    this.popoverCtl.dismiss();
  }
}
