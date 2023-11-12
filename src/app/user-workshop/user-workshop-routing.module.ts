import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./list-user/list-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";

const routes: Routes = [
  {
    path:'',
    component:ListUserComponent
  } ,
  {
    path:'modifier/:id',
    component:UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserWorkshopRoutingModule { }
