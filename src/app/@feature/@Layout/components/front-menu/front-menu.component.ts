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
      title: '首頁',
      icon: 'home',
      link: 'home'
    },
    {
      title: '任務',
      icon: 'briefcase',
      link: 'task'
    },
    {
      title: '使用者',
      icon: 'person',
      link: 'user'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
