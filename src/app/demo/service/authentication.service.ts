import { Injectable } from '@angular/core';

import {BehaviorSubject, Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../../models/User";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

const API_URL = `${environment.API_URL}/api/auth/`

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient,private router:Router) {
        let storageUser;
        const storageUserAsStr = localStorage.getItem('currentUser');
        if (storageUserAsStr) {
            storageUser = JSON.parse(storageUserAsStr);
        }

        this.currentUserSubject = new BehaviorSubject<User>(storageUser);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(user: User): Observable<any> {
        return this.http.post<any>(API_URL + 'signin', user).pipe(
            map(response => {
                if (response) {
                    localStorage.setItem('currentUser', JSON.stringify(response));
                    this.currentUserSubject.next(response);
                }
                return response;
            })
        );
    }

    register(user: User): Observable<any> {
        return this.http.post(API_URL + 'sign-up', user);
    }

    logOut() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/dashboard'])
    }

}
