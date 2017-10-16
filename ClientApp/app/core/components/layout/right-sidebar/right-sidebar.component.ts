import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {

  @Input('isRightSidebarOpen') isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
