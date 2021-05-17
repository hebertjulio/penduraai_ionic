import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileListPageRoutingModule } from './profile-list-routing.module';
import { ProfileListPage } from './profile-list.page';
import { ProfileListMenuComponent } from '../profile-list-menu/profile-list-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileCreatePageModule } from '../profile-create/profile-create.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfileListPageRoutingModule,
    ReactiveFormsModule,
    ProfileCreatePageModule
  ],
  declarations: [
    ProfileListPage,
    ProfileListMenuComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProfileListPageModule {}
