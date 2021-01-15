import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainType = ['短票', '定存（台幣）', '定存（外幣）', '金融債'];
  allHospital = ['花蓮', '台中', '台北', '大林', '斗六', '嘉義', '玉里', '關山'];
  allBank = ['兆豐', '國泰', '中華', '國票']
  allCurrency = ['美元', '人民幣', '新台幣'];
  allDateType = ['日', '周', '月', '年'];

  form = this.formBuilder.group({
    hospital: new FormControl(),
    mainType: new FormControl(),
    bank: new FormControl(),
    accountNumber: new FormControl(),
    depositsTw: new FormControl(),
    currency: new FormControl(),
    depositsUs: new FormControl(),
    dateType: new FormControl(),
    dateRange: new FormControl([]),
    dayCount: new FormControl(),
    percent: new FormControl(),
    calculateMethod: new FormControl(),
    paymentMethod: new FormControl(),
    transferAccount: new FormControl(),
    automaticTransferMark: new FormControl(),
    automaticAccountEntryMark: new FormControl(),
    remarks: new FormControl(),
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.onDateRangeChange();
  }

  onDateRangeChange() {
    this.form.get('dateRange')?.valueChanges.subscribe(data => {
      const { start, end } = data;
      const hasDateRange = start && end;
      if (!hasDateRange) {
        return;
      }
      const dayCount = moment(end).diff(moment(start), 'days');
      this.form.get('dayCount')?.setValue(dayCount);
    });
  }
}
