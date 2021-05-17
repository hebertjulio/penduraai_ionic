import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ApiError } from '../api.error';
import { SignUp } from '../api.interface';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  form: FormGroup;
  error: ApiError;

  constructor(
    private api: ApiService,
    private loadingCtl: LoadingController,
    private navCtl: NavController,
    private toastCtl: ToastController,
    private formBuilder: FormBuilder
  ) { }

  async submitForm() {
    const loading = await this.loadingCtl.create({
      message: 'Please wait...',
      keyboardClose: false,
      spinner: 'circles'
    });
    await loading.present();
    try {
      const body = this.form.value as SignUp;
      await this.api.signUp(body);
      this.showMessage('Successful registration');
      this.navCtl.navigateForward('login');
    } catch (error) {
      this.error = error as ApiError;
    }
    await loading.dismiss();
  }

  async showMessage(message: string) {
    const toast = await this.toastCtl.create({
      message, duration: 5000,  // 5s,
      position: 'bottom'
    });
    await toast.present();
  }

  passwordMatched(formCtl: FormControl) {
    const password = this.form ? this.form.value.password : null;
    const passwordConfirm = formCtl.value;
    return password === passwordConfirm ? null : { no_match: true };
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      password_confirm: ['', Validators.compose([
        Validators.required,
        this.passwordMatched.bind(this)
      ])],
      pin: ['', Validators.compose([
        Validators.required,
        Validators.min(1000),
        Validators.max(9999)
      ])]
    });
  }
}
