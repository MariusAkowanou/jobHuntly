import { Component, OnInit } from '@angular/core';
import { SIDEBAR_MENU } from './sidebarMenu';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-adminUiLayout',
  templateUrl: './adminUiLayout.component.html',
  styleUrls: ['./adminUiLayout.component.css'],
  animations: [
    trigger('listAnimation', [
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-10px)'
      })),
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ]),
    trigger('sidebarAnimation', [
      state('closed', style({
        transform: 'translateX(-100%)'
      })),
      state('open', style({
        transform: 'translateX(0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('200ms ease-out'))
    ]),
  ]
})
export class AdminUiLayoutComponent implements OnInit {
  sidebarMenus = SIDEBAR_MENU;
  showList = false;
  isSidebarOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggleList() {
    this.showList = !this.showList;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
