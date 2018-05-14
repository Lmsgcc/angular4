import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent implements OnInit{
  
  ngOnInit(): void { }
  
  constructor(private auth: AuthService) { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);
  }

  public doLogin() {
    this.auth.login()
      .then(
        (value) => this.auth.setLoginStatus(true), 
        (reason) => this.auth.setLoginStatus(false));
  }

  public doLogout() {
    this.auth.logout()
    .then(
      (value) => this.auth.setLoginStatus(false), 
      (reason) => this.auth.setLoginStatus(false));
  }

}
