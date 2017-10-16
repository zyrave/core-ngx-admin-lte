import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html'
})
export class DashboardTwoComponent implements OnInit {

  private pageTitle: string;
  private subPageTitle: string;
  private avatar1 = require('./../../../assets/img/user1-128x128.jpg');
  private avatar2 = require('./../../../assets/img/user2-160x160.jpg');
  private avatar3 = require('./../../../assets/img/user3-128x128.jpg');
  private avatar4 = require('./../../../assets/img/user4-128x128.jpg');
  private avatar5 = require('./../../../assets/img/user5-128x128.jpg');
  private avatar6 = require('./../../../assets/img/user6-128x128.jpg');
  private avatar7 = require('./../../../assets/img/user7-128x128.jpg');
  private avatar8 = require('./../../../assets/img/user8-128x128.jpg');
  private productImage = require('./../../../assets/img/default-50x50.gif');

  constructor() {
    this.pageTitle = "Dashboard";
    this.subPageTitle = "Version 2.0";
  }

  ngOnInit() {
  }

}
