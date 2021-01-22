import { AuthModule } from './@auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbDatepickerModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from './@feature/@Layout/layout.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { zhTW } from 'date-fns/locale';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot(),
    NbDateFnsDateModule.forRoot({
      format: 'yyyy/MM/dd',
    }),
    NbDatepickerModule.forRoot(),
    ChartsModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
