import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  
  public ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  
  public ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  public ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  public isLoggedIn : boolean = false;


  constructor(private auth:AuthService){
      this.auth.userState.subscribe( x => this.isLoggedIn = x);

  }
  ngOnInit(): void {

  }
  public doLogin()
  {
    this.auth.login().then((value) => this.auth.setLoginStatus(true), 
    (reason) => this.auth.setLoginStatus(false) );
  }

  public doLogout()
  {
    this.auth.logout().then(
      (value) => {console.log(value); this.auth.setLoginStatus(false);},
      (reason) => this.auth.setLoginStatus(false)
    );
  }
  title = 'Formação Angular 4';
}
