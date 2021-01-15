import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'front-header',
  templateUrl: './front-header.component.html',
  styleUrls: ['./front-header.component.scss']
})
export class FrontHeaderComponent implements OnInit {
  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu');
  }
}
