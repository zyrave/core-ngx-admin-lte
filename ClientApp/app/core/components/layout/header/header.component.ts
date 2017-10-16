import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isSidebarCollapse: boolean;
  @Output() controlSidebarClick = new EventEmitter();

  private avatar2 = require('./../../../../../assets/img/user2-160x160.jpg');
  private avatar3 = require('./../../../../../assets/img/user3-128x128.jpg');
  private avatar4 = require('./../../../../../assets/img/user4-128x128.jpg');

  constructor(private renderer: Renderer2) {
    this.isSidebarCollapse = false;
  }

  ngOnInit() {
  }

  onToggleMenuClick() {
    this.isSidebarCollapse = !this.isSidebarCollapse;

    if (this.isSidebarCollapse)
      this.renderer.addClass(document.body, 'sidebar-collapse');
    else
      this.renderer.removeClass(document.body, 'sidebar-collapse');
  }

  onControlSidebarClicked() {
    this.controlSidebarClick.emit();
  }

}
