import { UserService } from './../../../../@core/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'modify-user-dialog',
  templateUrl: './modify-user-dialog.component.html',
  styleUrls: ['./modify-user-dialog.component.scss']
})
export class ModifyUserDialogComponent implements OnInit {
  @Input()
  UserId: number;
  isEdit: boolean;
  allIdentity = [
    { name: '照護者', value: 1 },
    { name: '受照護者', value: 0 },
  ];
  form = new FormGroup({
    Account: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    IsDispatched: new FormControl('', Validators.required),
  });
  constructor(
    protected dialogRef: NbDialogRef<ModifyUserDialogComponent>,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.isEdit = !!this.UserId;
    if (!this.isEdit) {
      return;
    }
    this.setEditForm(this.UserId);
  }

  setEditForm(UserId: number) {
    this.userService.getUserInfo({ UserId }).subscribe(res => {
      const isSuccess = res.msg !== 'fail';
      if (!isSuccess) {
        return;
      }
      const userInfo = res.data;
      this.form.patchValue(userInfo);
    });
  }

  send() {
    const res = {
      UserId: this.UserId,
      ...this.form.getRawValue()
    };
    this.dialogRef.close(res);
  }

  close() {
    this.dialogRef.close();
  }

}
