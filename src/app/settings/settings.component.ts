import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(private auth: AuthService) {  }
    
    ngOnInit(): void { 
      this.auth.userState
        .subscribe(x => this.auth.isLoggedIn = x);
    }

}
