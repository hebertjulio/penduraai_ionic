import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../api.interface';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  @Input()
  user: User;

  form: FormGroup;

  constructor(
    private modalCtl: ModalController,
    private formBuilder: FormBuilder
  ) { }

  async closeModal() {
    this.modalCtl.dismiss();
  }

  async submitForm() {

  }

  loadForm() {
    this.form = this.formBuilder.group({
      name: [this.user.name, Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])],
      email: [this.user.email, Validators.compose([
        Validators.required,
        Validators.email
      ])]
    });
  }

  ngOnInit() {
    this.loadForm();
  }
}
