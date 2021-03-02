import { IApiResult } from '@core/models/api-response';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserList(params?: IGetUserListReq) {
    return of<IApiResult<IUserListItem[]>>({
      status: '1',
      msg: 'success',
      data: [
        {
          UserId: 1,
          Account: 'test01',
          Password: 'test',
          IsDispatched: 1,
          CreateTime: '2020-02-02',
          UpdateTime: '2021-03-02'
        },
        {
          UserId: 2,
          Account: 'test02',
          Password: 'test',
          IsDispatched: 1,
          CreateTime: '2021-02-17',
          UpdateTime: '2021-02-22'
        },
        {
          UserId: 3,
          Account: 'test03',
          Password: 'test',
          IsDispatched: 1,
          CreateTime: '2021-02-20',
          UpdateTime: '2021-03-01'
        },
        {
          UserId: 5,
          Account: 'test04',
          Password: 'test',
          IsDispatched: 1,
          CreateTime: '2021-03-02',
          UpdateTime: '2021-03-02'
        }
      ]
    });
  }
}

interface IGetUserListReq {
  Account?: string;
  IsDispatched?: number;
}

export interface IUserListItem {
  UserId: number;
  Account: string;
  Password: string;
  IsDispatched: number;
  CreateTime: string;
  UpdateTime: string;
}
