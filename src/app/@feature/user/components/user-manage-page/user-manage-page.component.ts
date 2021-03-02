import { ModifyUserDialogComponent } from './../../dialogs/modify-user-dialog/modify-user-dialog.component';
import { UserService, ICreateUserReq, IEditUserReq } from './../../../../@core/services/user.service';
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
  allIdentity = [
    { name: '照護者', value: 1 },
    { name: '受照護者', value: 0 },
  ];
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

  openCreateUserDialog() {
    this.dialogService.open(ModifyUserDialogComponent).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.createUser(res);
    });
  }

  openEditUserDialog(UserId: number) {
    const dialogData = {
      context: { UserId }
    };
    this.dialogService.open(ModifyUserDialogComponent, dialogData).onClose.subscribe(res => {
      if (!res) {
        return;
      }
      this.editUser(res);
    });
  }

  createUser(params: ICreateUserReq) {
    this.userService.createUser(params).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return alert('新增失敗');
      }
      alert('新增成功');
      this.getUserList();
    });
  }

  editUser(params: IEditUserReq) {
    this.userService.editUser(params).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return alert('編輯失敗');
      }
      alert('編輯成功');
      this.getUserList();
    });
  }

  deleteUser(UserId: number) {
    const isDelete = confirm('是刪除此使用者');
    if (!isDelete) {
      return;
    }
    this.userService.deleteUser({ UserId }).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return alert('刪除失敗');
      }
      alert('刪除成功');
      this.getUserList();
    });
  }
}
