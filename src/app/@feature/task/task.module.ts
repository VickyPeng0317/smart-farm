import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagePageComponent } from './components/task-manage-page/task-manage-page.component';
import {SharedModule} from '@shared/shared.module';
import {CoreModule} from '@core/core.module';
import { ModifyTaskDialogComponent } from './dialogs/modify-task-dialog/modify-task-dialog.component';
import { ViewTaskInfoDialogComponent } from './dialogs/view-task-info-dialog/view-task-info-dialog.component';



@NgModule({
  declarations: [TaskManagePageComponent, ModifyTaskDialogComponent, ViewTaskInfoDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class TaskModule { }
