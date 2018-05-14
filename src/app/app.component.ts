import { Component, ViewChild, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public activePage: string;


  constructor(private auth: AuthService,
    private nav: MenuService,
    private data: DataService) {  }

  ngOnInit(): void { 


    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);

    this.nav.page
      .subscribe(x => {
        this.activePage = x;

      })

  }

}
