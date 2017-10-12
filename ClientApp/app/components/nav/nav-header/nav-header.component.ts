import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  private profilePicture = require('./../../../../assets/img/user2-160x160.jpg');
  private profilePicture3 = require('./../../../../assets/img/user3-128x128.jpg');
  private profilePicture4 = require('./../../../../assets/img/user4-128x128.jpg');

  constructor() { }

  ngOnInit() {
  }

}
