import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';

@Component({
    selector: 'app-dashboard-one',
    templateUrl: './dashboard-one.component.html',
    styleUrls: ['./dashboard-one.component.css']
})
export class DashboardOneComponent implements OnInit {

    private avatar2 = require('./../../../assets/img/user2-160x160.jpg');
    private avatar3 = require('./../../../assets/img/user3-128x128.jpg');
    private avatar4 = require('./../../../assets/img/user4-128x128.jpg');

    linechart: morris.GridChart;
    areaChart: morris.GridChart;
    donutChart: morris.DonutChart;
    knob: JQuery;
    calendar: JQuery;

    constructor() { }

    ngOnInit() {
    }

}
