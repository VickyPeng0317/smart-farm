import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '@environments/environment';
import {IApiResult} from '@core/models/api-response';
import {BaseService} from '@core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseService {

  constructor(
    private http: HttpClient
  ) {
    super();
  }
  /**
   * 取得任務清單
   */
  getTaskList(params: IGetTaskListRes) {
    const body = this.dataToFormBody(params);
    const url = environment.apiUrl + '/TaskApi/GetTaskList';
    return this.http.post<IApiResult<ITaskListItem[]>>(url, body, this.POST_OPTION);
  }
}

export interface IGetTaskListRes {
  TaskName: string;
  TaskType: string;
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
