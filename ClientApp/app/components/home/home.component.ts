import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private pageTitle: string;
  private subPageTitle: string;

  constructor() {
    this.pageTitle = "Home";
    this.subPageTitle = "";
  }

}
