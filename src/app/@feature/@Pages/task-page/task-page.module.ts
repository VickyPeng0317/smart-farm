import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskModule} from '@feature/task/task.module';
import {TaskPageRoutingModule} from '@feature/@Pages/task-page/task-page-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskPageRoutingModule,
    TaskModule
  ]
})
export class TaskPageModule { }
