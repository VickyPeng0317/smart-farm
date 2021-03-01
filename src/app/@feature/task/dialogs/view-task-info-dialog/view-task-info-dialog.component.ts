import { Component, Input, OnInit } from '@angular/core';
import { ITaskInfo, TaskService } from '@core/services/task.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'view-task-info-dialog',
  templateUrl: './view-task-info-dialog.component.html',
  styleUrls: ['./view-task-info-dialog.component.scss']
})
export class ViewTaskInfoDialogComponent implements OnInit {
  @Input()
  TaskId: number;
  taskInfo: ITaskInfo = <ITaskInfo>{};
  constructor(
    private taskService: TaskService,
    private dialogRef: NbDialogRef<ViewTaskInfoDialogComponent>
  ) { }

  ngOnInit(): void {
    const TaskId = this.TaskId;
    this.taskService.getTaskInfo({TaskId}).subscribe(res => {
      const isSuccess = res.msg !== 'file';
      if (!isSuccess) {
        alert('取得失敗');
        this.dialogRef.close();
        return;
      }
      this.taskInfo = res.data;
    });
  }

  close() {
    this.dialogRef.close();
  }

}
