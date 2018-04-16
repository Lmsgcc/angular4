import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { promise } from 'protractor';
import {BehaviorSubject } from "rxjs";


@Injectable()
export class AuthService
{
    public isLogin = new BehaviorSubject<boolean>(true);
    public userState = this.isLogin.asObservable();
    public setLoginStatus(loginData: boolean)
    {
        this.isLogin.next(loginData);
    }
    constructor(private afAuth: AngularFireAuth){
        this.afAuth.authState.subscribe(user => {
            this.setLoginStatus(true);
        });
    }
    public login(): Promise<any>
    {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout(): Promise<any>
    {
        return this.afAuth.auth.signOut();
    }
}