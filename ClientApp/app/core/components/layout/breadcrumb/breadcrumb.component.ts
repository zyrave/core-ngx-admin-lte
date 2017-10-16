import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  @Input('pageTitle') pageTitle: string;
  @Input('subPageTitle') subPageTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
