import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements OnInit {
// charts.component.ts
barChartOptions = {
  responsive: true
};
barChartType = 'bar';
barChartLegend = true;

barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
barChartData = [
  {data: [65, 59, 80, 81, 56, 55, 400], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
