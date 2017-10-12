import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-left-sidebar',
    templateUrl: './nav-left-sidebar.component.html',
    styleUrls: ['./nav-left-sidebar.component.css'],
})
export class NavLeftSidebarComponent implements OnInit {

    profilePicture = require('./../../../../assets/img/user2-160x160.jpg');
    private isDashboardMenuOpen: boolean = false;
    private isChartMenuOpen: boolean = false;
    private isUiElementsMenuOpen: boolean = false;
    private isFormsMenuOpen: boolean = false;
    private isTablesMenuOpen: boolean = false;
    private isExamplesMenuOpen: boolean = false;
    private isMultilevelMenuOpen: boolean = false;

    private status: any = {
        isOpen: false
    }

    constructor() { }

    ngOnInit() {
    }

    resetToggle() {
        this.isDashboardMenuOpen = false;
        this.isChartMenuOpen = false;
        this.isUiElementsMenuOpen = false;
        this.isFormsMenuOpen = false;
        this.isTablesMenuOpen = false;
        this.isExamplesMenuOpen = false;
        this.isMultilevelMenuOpen = false;
    }

    onDashboardMenuClick() {
        this.resetToggle();
        this.isDashboardMenuOpen = !this.isDashboardMenuOpen;
    }

    onChartMenuClick() {
        this.resetToggle();
        this.isChartMenuOpen = !this.isChartMenuOpen;
    }

    onUiElementsMenuClick() {
        this.resetToggle();
        this.isUiElementsMenuOpen = !this.isUiElementsMenuOpen;
    }

    onFormsMenuClick() {
        this.resetToggle();
        this.isFormsMenuOpen = !this.isFormsMenuOpen;
    }

    onTablesMenuClick() {
        this.resetToggle();
        this.isTablesMenuOpen = !this.isTablesMenuOpen;
    }

    onExamplesMenuClick() {
        this.resetToggle();
        this.isExamplesMenuOpen = !this.isExamplesMenuOpen;
    }

    onMultilevelMenuClick() {
        this.resetToggle();
        this.isMultilevelMenuOpen = !this.isMultilevelMenuOpen;
    }

}
