import { Component, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';
import 'admin-lte';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  isRightSidebarToggled: boolean;
  isRightSidebarOpen: boolean;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    // add the body classes and styles
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'skin-red');
    this.renderer.addClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'pace-done');
    this.renderer.setStyle(document.body, 'height', 'auto');
    this.renderer.setStyle(document.body, 'min-height', '100%');
  }

  ngOnDestroy() {
    // remove the body classes and styles
    this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'skin-red');
    this.renderer.removeClass(document.body, 'sidebar-mini');
    this.renderer.removeClass(document.body, 'pace-done');
    this.renderer.removeStyle(document.body, 'height');
    this.renderer.removeStyle(document.body, 'min-height');
  }

  onRightSidebarClick() {
    this.isRightSidebarToggled ? this.isRightSidebarOpen : !this.isRightSidebarOpen;
    this.isRightSidebarToggled = !this.isRightSidebarToggled;
  }

}
