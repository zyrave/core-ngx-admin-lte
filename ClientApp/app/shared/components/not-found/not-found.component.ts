import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  private pageTitle: string;
  private subPageTitle: string;

  constructor() {
    this.pageTitle = "404 Error Page";
    this.subPageTitle = "";
  }

  ngOnInit() {
  }

}
