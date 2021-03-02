import { UserManagePageComponent } from './../../user/components/user-manage-page/user-manage-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskManagePageComponent} from '@feature/task/components/task-manage-page/task-manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
