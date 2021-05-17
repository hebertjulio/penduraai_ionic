import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiError } from '../api.error';
import { Token } from '../api.interface';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  error: ApiError;

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private navCtl: NavController,
    private loadingCtl: LoadingController,
    private formBuilder: FormBuilder
  ) { }

  async doLogin() {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    try {
      await loading.present();
      const { email, password } = this.form.value;
      const token = await this.api.login(email, password) as Token;
      this.api.setToken(token);
      this.auth.setAuthenticated(true);
      this.navCtl.navigateForward('profile-choose');
    } catch (error) {
      this.error = error as ApiError;
    } finally {
      await loading.dismiss();
    }
  }

  loadForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  ngOnInit() {
    this.loadForm();
  }
}
