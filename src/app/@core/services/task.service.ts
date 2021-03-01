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
  /**
   * 取得任務詳細
   */
  getTaskInfo(params: IGetTaskInfoReq) {
    const body = this.dataToFormBody(params);
    const url = environment.apiUrl + '/TaskApi/GetTaskDetail';
    return this.http.post<IApiResult<ITaskInfo>>(url, body, this.POST_OPTION);
  }
  /**
   * 新增任務
   */
  createTask(params: ICreateTaskReq) {
    const body = this.dataToFormBody(params);
    const url = environment.apiUrl + '/TaskApi/AddTask';
    return this.http.post<IApiResult<{}>>(url, body, this.POST_OPTION);
  }
  /**
   * 編輯任務
   */
  editTask(params: IEditTaskReq) {
    const body = this.dataToFormBody(params);
    const url = environment.apiUrl + '/TaskApi/EditTask';
    return this.http.post<IApiResult<{}>>(url, body, this.POST_OPTION);
  }
  /**
   * 刪除任務
   */
  deleteTask(params: IDeleteTaskReq) {
    const body = this.dataToFormBody(params);
    const url = environment.apiUrl + '/TaskApi/DeleteTask';
    return this.http.post<IApiResult<{}>>(url, body, this.POST_OPTION);
  }
}

export interface ITaskInfo {
  TaskId: number;
  TaskName: string;
  TaskStatus: number;
  TaskType: string;
  TaskDetail: string;
  CreateTime: Date;
  UpdateTime: Date;
}

export interface IDeleteTaskReq {
  TaskId: number;
}

export interface IGetTaskInfoReq {
  TaskId: number;
}

export interface ICreateTaskReq {
  TaskName: string;
  TaskType: string;
  TaskDetail: string;
}

export interface IEditTaskReq extends ICreateTaskReq {
  TaskId: number;
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
