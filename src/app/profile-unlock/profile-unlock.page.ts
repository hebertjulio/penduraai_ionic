import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, PopoverController } from '@ionic/angular';
import { ApiError } from '../api.error';
import { Profile, Token } from '../api.interface';
import { ApiService } from '../api.service';
import { LockService } from '../lock.service';


@Component({
  selector: 'app-profile-unlock',
  templateUrl: './profile-unlock.page.html',
  styleUrls: ['./profile-unlock.page.scss'],
})
export class ProfileUnlockPage implements OnInit {

  @Input()
  profile: Profile;

  form: FormGroup;
  error: ApiError;

  constructor(
    private lock: LockService,
    private api: ApiService,
    private popoverCtl: PopoverController,
    private navCtl: NavController,
    private loadingCtl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  async doUnlock() {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    try {
      await loading.present();
      const { pin } = this.form.value;
      const token = await this.api.unlockProfile(this.profile.id, pin) as Token;
      this.api.setToken(token);
      this.lock.setUnlocked(true);
      this.navCtl.navigateRoot('');
      this.popoverCtl.dismiss();
    } catch (error) {
      this.error = error as ApiError;
    } finally {
      await loading.dismiss();
    }
  }

  loadForm() {
    this.form = this.formBuilder.group({
      pin: ['', Validators.compose([
        Validators.required,
        Validators.min(1000),
        Validators.max(9999)
      ])]
    });
  }

  ngOnInit() {
    this.loadForm();
  }
}
