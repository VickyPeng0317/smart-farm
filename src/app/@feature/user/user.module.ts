import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagePageComponent } from './components/user-manage-page/user-manage-page.component';

@NgModule({
  declarations: [UserManagePageComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ]
})
export class UserModule { }
