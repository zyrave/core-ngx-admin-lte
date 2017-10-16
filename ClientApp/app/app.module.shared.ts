import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './core/components/layout/header/header.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';
import { LeftSidebarComponent } from './core/components/layout/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './core/components/layout/right-sidebar/right-sidebar.component';
import { DashboardOneComponent } from './components/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './components/dashboard-two/dashboard-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    DashboardOneComponent,
    DashboardTwoComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    AccordionModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardOneComponent },
      { path: 'dashboard2', component: DashboardTwoComponent },
      { path: '**', redirectTo: 'dashboard' }
    ])
  ]
})
export class AppModuleShared {
}
