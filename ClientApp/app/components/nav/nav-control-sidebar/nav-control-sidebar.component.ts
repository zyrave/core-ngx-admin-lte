import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-control-sidebar',
  templateUrl: './nav-control-sidebar.component.html',
  styleUrls: ['./nav-control-sidebar.component.css']
})
export class NavControlSidebarComponent implements OnInit {

  @Input('isControlSidebarOpen') isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
