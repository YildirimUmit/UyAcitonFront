import {Component, OnInit} from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {AuthenticationService} from "../../../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../../models/User";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit{
    user: User = new User();
    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService,private authenticationService:AuthenticationService,        private route: ActivatedRoute,
                private router: Router,) {

        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }

    }

    ngOnInit(): void {


    }

    logIn(){
        this.authenticationService.login(this.user).subscribe(data=>{
            this.router.navigate(['/']);
        },error => {
            console.log("Username or password is incorrect.")
        })


    }

}
