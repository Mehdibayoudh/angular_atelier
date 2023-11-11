import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWorkshopRoutingModule } from './user-workshop-routing.module';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
  declarations: [
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserWorkshopRoutingModule
  ]
})
export class UserWorkshopModule { }
