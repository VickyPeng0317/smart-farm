import { UserService } from './../../../../@core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUserListItem } from '@core/services/user.service';
import { NbDialogService } from '@nebular/theme';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'user-manage-page',
  templateUrl: './user-manage-page.component.html',
  styleUrls: ['./user-manage-page.component.scss']
})
export class UserManagePageComponent implements OnInit {
  columnList = [
    {
      key: 'Account',
      name: '帳號'
    },
    {
      key: 'IsDispatched',
      name: '身分'
    },
    {
      key: 'CreateTime',
      name: '建立時間'
    },
    {
      key: 'UpdateTime',
      name: '更新時間'
    }
  ];
  searchForm = new FormGroup({
    Account: new FormControl(''),
    IsDispatched: new FormControl(''),
  });
  userList: IUserListItem[] = [];

  constructor(
    private dialogService: NbDialogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList();
    this.onSearch();
  }

  onSearch() {
    this.searchForm.valueChanges.pipe(
     debounceTime(300)
    ).subscribe(() => this.getUserList());
  }

  getUserList() {
    this.userList = [];
    const params = this.searchForm.getRawValue();
    this.userService.getUserList(params).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return;
      }
      this.userList = res.data;
    });
  }

}
