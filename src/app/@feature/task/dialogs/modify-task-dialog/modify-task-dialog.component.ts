import { TaskService } from '@core/services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'modify-task-dialog',
  templateUrl: './modify-task-dialog.component.html',
  styleUrls: ['./modify-task-dialog.component.scss']
})
export class ModifyTaskDialogComponent implements OnInit {
  @Input()
  TaskId: number;
  isEdit: boolean;
  allTaskTypeList = ['場域', '魚桶'];
  form = new FormGroup({
    TaskName: new FormControl('', Validators.required),
    TaskType: new FormControl('', Validators.required),
    TaskDetail: new FormControl(''),
  });
  constructor(
    protected dialogRef: NbDialogRef<ModifyTaskDialogComponent>,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.isEdit = !!this.TaskId;
    if (!this.isEdit) {
      return;
    }
    this.setEditForm(this.TaskId);
  }

  setEditForm(TaskId: number) {
    this.taskService.getTaskInfo({ TaskId }).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return;
      }
      const taskInfo = res.data;
      this.form.patchValue(taskInfo);
    });
  }

  send() {
    const res = {
      TaskId: this.TaskId,
      ...this.form.getRawValue()
    };
    this.dialogRef.close(res);
  }

  close() {
    this.dialogRef.close();
  }
}
