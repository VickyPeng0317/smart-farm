import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '@core/core.module';
import { FirstChartComponent } from './components/first-chart/first-chart.component';

@NgModule({
  declarations: [HomeComponent, FirstChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
