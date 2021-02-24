import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {IApiResult} from '@core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }
  /**
   * 取得任務清單
   */
  getTaskList() {
    const url = environment.apiUrl + '';
    return this.http.get<IApiResult<ITaskListItem[]>>(url);
  }
}

export interface ITaskListItem {
  TaskId: number;
  TaskName: string;
  TaskStatus: number;
  TaskType: string;
  TaskDetail: string;
  CreateTime: Date;
  UpdateTime: Date;
}
