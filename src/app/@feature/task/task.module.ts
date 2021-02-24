import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagePageComponent } from './components/task-manage-page/task-manage-page.component';
import {SharedModule} from '@shared/shared.module';
import {CoreModule} from '@core/core.module';



@NgModule({
  declarations: [TaskManagePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class TaskModule { }
