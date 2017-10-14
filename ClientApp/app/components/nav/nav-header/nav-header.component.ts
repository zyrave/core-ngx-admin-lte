import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isToggled: boolean;
  isClicked: boolean;
  @Output() controlBarClick = new EventEmitter();

  private profilePicture = require('./../../../../assets/img/user2-160x160.jpg');
  private profilePicture3 = require('./../../../../assets/img/user3-128x128.jpg');
  private profilePicture4 = require('./../../../../assets/img/user4-128x128.jpg');

  constructor(private renderer: Renderer2) {
    this.isToggled = false;
  }

  ngOnInit() {
  }

  onToggleMenuClick() {
    this.isToggled = !this.isToggled;

    if (this.isToggled)
      this.renderer.addClass(document.body, 'sidebar-collapse');
    else
      this.renderer.removeClass(document.body, 'sidebar-collapse');
  }

  onControlBarClick() {
    this.controlBarClick.emit();
  }

}
