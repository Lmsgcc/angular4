import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, SimpleChanges } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  
  public ngOnDestroy(): void {
    
  }
  
  public ngAfterViewInit(): void {
    
  }

  public ngOnChanges(changes: SimpleChanges): void {
    
  }
  public isLoggedIn : boolean = false;


  constructor(private auth:AuthService, private nav : MenuService){
      this.auth.userState.subscribe( x => this.isLoggedIn = x);

  }
  public ngOnInit(): void {

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
