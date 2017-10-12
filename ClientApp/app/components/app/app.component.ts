import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    bodyClasses = 'hold-transition skin-red sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];

    constructor() { }

    ngOnInit() {
        // add the the body classes
        this.body.classList.add('skin-red');
        this.body.classList.add('sidebar-mini');

        let ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        } else {
            let event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }

        // this.userService.currentUser.subscribe((user: User) => {
        //     this.mylinks = this.baseService.getMenus(user.menu, '');
        // });
    }

    protected detectIE(): any {
        let ua = window.navigator.userAgent;
        let msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        let trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            let rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        let edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-red');
        this.body.classList.remove('sidebar-mini');
    }

}
