import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    moduleId: 'module.id',
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {

    constructor(private router: Router) {}

    routeAbout() {
        this.router.navigate(['/about']);
    }

    routeHome() {
        this.router.navigate(['/']);
    }
 }
