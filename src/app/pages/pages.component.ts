import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private auth: AuthService) {  }
    
    ngOnInit(): void { 
      this.auth.userState
        .subscribe(x => this.auth.isLoggedIn = x);
    }
}
