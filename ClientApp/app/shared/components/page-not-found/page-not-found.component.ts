import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

  private pageTitle: string;
  private subPageTitle: string;

  constructor() {
    this.pageTitle = "404 Error Page";
    this.subPageTitle = "";
  }

  ngOnInit() {
  }

}
