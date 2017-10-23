import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../../shared/shared.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LeftSidebarComponent,
    RightSidebarComponent
  ]
})
export class LayoutModule { }
