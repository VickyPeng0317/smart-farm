import { Component, OnInit } from '@angular/core';
import {ITaskListItem, TaskService} from '@core/services/task.service';

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
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.taskService.getTaskList().subscribe(res => {
      this.taskList = res.data;
    });
  }
}
