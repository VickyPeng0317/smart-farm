import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'front-menu',
  templateUrl: './front-menu.component.html',
  styleUrls: ['./front-menu.component.scss']
})
export class FrontMenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: '投資項目-新增',
      icon: 'file-add',
      children: [
        {
          title: '短票',
        },
        {
          title: '金融債',
        },
        {
          title: '定存（台幣）',
        },
        {
          title: '定存（外幣）',
        },
        {
          title: '國泰投信',
        },
        {
          title: '玉山銀行',
        },
        {
          title: '國泰銀行',
        },
        {
          title: '台股',
        },
      ]
    },
    {
      title: '投資項目-明細報表',
      icon: 'list-outline',
      children: [
        {
          title: '彙整總表',
        },
        {
          title: '短票',
        },
        {
          title: '金融債',
        },
        {
          title: '定存（台幣）',
        },
        {
          title: '定存（外幣）',
        },
        {
          title: '國泰投信',
        },
        {
          title: '玉山銀行',
        },
        {
          title: '國泰銀行',
        },
        {
          title: '台股',
        },
        {
          title: '二期差異',
        },
        {
          title: '處分投資明細',
        },
        {
          title: '非固定收益之受益憑證',
        },
        {
          title: '投資報告',
        }
      ],
    },
    {
      title: '利率兌換率查詢',
      icon: 'swap-outline',
      children: [
        {
          title: '利率查詢',
        },
        {
          title: '即時/歷史匯率查詢',
        },
        {
          title: '到期通知',
        },
      ]
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
