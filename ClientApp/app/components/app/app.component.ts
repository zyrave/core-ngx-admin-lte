import { Component, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private isControlBarClicked: boolean;

  constructor(private renderer: Renderer2) {
    this.isControlBarClicked = false;
  }

  ngOnInit() {
    // add the the body classes and styles
    this.renderer.addClass(document.body, 'skin-red');
    this.renderer.addClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'pace-done');
    this.renderer.setStyle(document.body, 'height', 'auto');
    this.renderer.setStyle(document.body, 'min-height', '100%');
  }

  ngOnDestroy() {
    // remove the the body classes and styles
    this.renderer.removeClass(document.body, 'skin-red');
    this.renderer.removeClass(document.body, 'sidebar-mini');
    this.renderer.removeClass(document.body, 'pace-done');
    this.renderer.removeStyle(document.body, 'height');
    this.renderer.removeStyle(document.body, 'min-height');
  }

  onControlBarClick() {
    this.isControlBarClicked = !this.isControlBarClicked;
  }

}
