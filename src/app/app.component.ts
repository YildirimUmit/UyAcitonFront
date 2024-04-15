import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {User} from "./models/User";
import {Router} from "@angular/router";
import {AuthenticationService} from "./demo/service/authentication.service";
import {Role} from "./models/role.enum";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    currentUser: User;
    constructor(private primengConfig: PrimeNGConfig,private router: Router,
                private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    get isAdmin() {
        return this.currentUser && this.currentUser.roles[0] === Role.ADMIN;
    }

    logout() {
        this.authenticationService.logOut();
        this.router.navigate(['/auth/login']);
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
