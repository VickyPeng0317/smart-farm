import { Component, OnInit } from '@angular/core';
import {ITaskListItem, TaskService} from '@core/services/task.service';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

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
    private taskService: TaskService
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
}
