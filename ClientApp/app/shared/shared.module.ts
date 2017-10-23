import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbComponent,
    NotFoundComponent
  ],
  providers: [],
  exports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    NotFoundComponent,
    RouterModule
  ]
})
export class SharedModule { }
