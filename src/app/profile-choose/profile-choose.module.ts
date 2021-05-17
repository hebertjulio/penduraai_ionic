import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileChoosePageRoutingModule } from './profile-choose-routing.module';
import { ProfileChoosePage } from './profile-choose.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileUnlockPageModule } from '../profile-unlock/profile-unlock.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ProfileChoosePageRoutingModule,
    ProfileUnlockPageModule
  ],
  declarations: [
    ProfileChoosePage
  ]
})
export class ProfileChoosePageModule {}
