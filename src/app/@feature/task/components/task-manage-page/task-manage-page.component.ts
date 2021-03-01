import { IEditTaskReq } from './../../../../@core/services/task.service';
import { ViewTaskInfoDialogComponent } from './../../dialogs/view-task-info-dialog/view-task-info-dialog.component';
import { ModifyTaskDialogComponent } from './../../dialogs/modify-task-dialog/modify-task-dialog.component';
import { Component, OnInit } from '@angular/core';
import {ICreateTaskReq, ITaskListItem, TaskService} from '@core/services/task.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'task-manage-page',
  templateUrl: './task-manage-page.component.html',
  styleUrls: ['./task-manage-page.component.scss']
})
export class TaskManagePageComponent implements OnInit {
  columnList = [
    {
      key: 'TaskName',
      name: '名稱'
    },
    {
      key: 'TaskStatus',
      name: '狀態'
    },
    {
      key: 'TaskType',
      name: '類別'
    },
    {
      key: 'TaskDetail',
      name: '說明'
    },
    {
      key: 'CreateTime',
      name: '新增時間'
    },
    {
      key: 'UpdateTime',
      name: '更新時間'
    }
  ];
  taskList: ITaskListItem[] = [];
  searchForm = new FormGroup({
    TaskName: new FormControl(''),
    TaskType: new FormControl(''),
  });
  constructor(
    private taskService: TaskService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.getTaskList();
    this.onSearch();
  }

  onSearch() {
    this.searchForm.valueChanges.pipe(
     debounceTime(300)
    ).subscribe(() => this.getTaskList());
  }

  getTaskList() {
    this.taskList = [];
    const params = this.searchForm.getRawValue();
    this.taskService.getTaskList(params).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return;
      }
      this.taskList = res.data;
    });
  }

  openViewTaskInfoDialog(TaskId: number) {
    const dialogData = {
      context: { TaskId }
    };
    this.dialogService.open(ViewTaskInfoDialogComponent, dialogData);
  }

  openCreateTaskDialog() {
    this.dialogService.open(ModifyTaskDialogComponent).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.createTask(res);
    });
  }

  openEditTaskDialog(TaskId: number) {
    const dialogData = {
      context: { TaskId }
    };
    this.dialogService.open(ModifyTaskDialogComponent, dialogData).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.editTask(res);
    });
  }

  createTask(params: ICreateTaskReq) {
    this.taskService.createTask(params).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return alert('新增失敗');
      }
      alert('新增成功');
      this.getTaskList();
    });
  }

  editTask(params: IEditTaskReq) {
    this.taskService.editTask(params).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return alert('編輯失敗');
      }
      alert('編輯成功');
      this.getTaskList();
    });
  }

  deleteTask(TaskId: number) {
    const isDelete = confirm('是刪除此任務');
    if (!isDelete) {
      return;
    }
    this.taskService.deleteTask({ TaskId }).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return alert('刪除失敗');
      }
      alert('刪除成功');
      this.getTaskList();
    });
  }
}
