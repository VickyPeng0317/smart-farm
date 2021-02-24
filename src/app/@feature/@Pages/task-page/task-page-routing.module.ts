import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskManagePageComponent} from '@feature/task/components/task-manage-page/task-manage-page.component';

const routes: Routes = [
  {
    path: '',
    component: TaskManagePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskPageRoutingModule { }
