import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { DashboardOneComponent } from './components/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './components/dashboard-two/dashboard-two.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AccordionModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardOneComponent,
    DashboardTwoComponent,
    HomeComponent,
  ],
  exports: [AppComponent]
})
export class AppModuleShared {
}
