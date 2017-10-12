import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavHeaderComponent } from './components/nav/nav-header/nav-header.component';
import { NavLeftSidebarComponent } from './components/nav/nav-left-sidebar/nav-left-sidebar.component';
import { NavControlSidebarComponent } from './components/nav/nav-control-sidebar/nav-control-sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavHeaderComponent,
        NavLeftSidebarComponent,
        NavControlSidebarComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AccordionModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: '**', redirectTo: 'dashboard' }
        ])
    ]
})
export class AppModuleShared {
}
