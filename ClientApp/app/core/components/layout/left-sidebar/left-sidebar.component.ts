import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent implements OnInit {

  private avatar = require('./../../../../../assets/img/user2-160x160.jpg');
  private isDashboardMenuOpen: boolean = false;
  private isChartMenuOpen: boolean = false;
  private isUiElementsMenuOpen: boolean = false;
  private isFormsMenuOpen: boolean = false;
  private isTablesMenuOpen: boolean = false;
  private isExamplesMenuOpen: boolean = false;
  private isMultilevelMenuOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onDashboardMenuClick() {
    this.isDashboardMenuOpen = !this.isDashboardMenuOpen;
  }

  onChartMenuClick() {
    this.isChartMenuOpen = !this.isChartMenuOpen;
  }

  onUiElementsMenuClick() {
    this.isUiElementsMenuOpen = !this.isUiElementsMenuOpen;
  }

  onFormsMenuClick() {
    this.isFormsMenuOpen = !this.isFormsMenuOpen;
  }

  onTablesMenuClick() {
    this.isTablesMenuOpen = !this.isTablesMenuOpen;
  }

  onExamplesMenuClick() {
    this.isExamplesMenuOpen = !this.isExamplesMenuOpen;
  }

  onMultilevelMenuClick() {
    this.isMultilevelMenuOpen = !this.isMultilevelMenuOpen;
  }

}
