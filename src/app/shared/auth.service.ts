import { Injectable } from "@angular/core";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthService {
    public isLoggedIn: boolean = false;

    private isLogin = new BehaviorSubject<boolean>(false);
    
    constructor(private afAuth: AngularFireAuth) {
        this.afAuth.authState
            .subscribe(user => {
                if (user) this.setLoginStatus(true);
            });
    }

    public userState = this.isLogin.asObservable();
    public setLoginStatus(loginData: boolean) {
        
        this.isLogin.next(loginData)
    }

    public login(): Promise<any> {
        return this.afAuth
            .auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout(): Promise<any>  {
        return this.afAuth.auth.signOut();
    }


}