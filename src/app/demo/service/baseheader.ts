import {HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../models/User";

export class BaseHeader {
    private headerDict: Record<string, string>;
    private requestOptions: { headers: Headers };
    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;
    private token:string;
    constructor() {
        let storageUser;
        const storageUserAsStr = localStorage.getItem('currentUser');

        if (storageUserAsStr) {
             storageUser = JSON.parse(storageUserAsStr);
            this.currentUserSubject = new BehaviorSubject<User>(storageUser);
            this.currentUser = this.currentUserSubject.asObservable();
            this.currentUser .subscribe(data=>{
                console.log(this);
                this.token=data.token;
            },error => {
                console.log(error);
                // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Username or password is incorrect.' });

            })
        }


        this.headerDict = {
            'Content-Type': 'application/json',
            'Content-Language': 'TR'
        };

        this.requestOptions = {
            headers: new Headers(this.headerDict),
        };

    }

    getHeaders(){
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Content-Language': 'TR',
            'Authorization':this.token
        })
    }

}
