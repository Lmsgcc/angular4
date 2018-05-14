import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{
  constructor(
    private auth: AuthService,
    private af: AngularFirestore
  ) {  }

  public settings: {   value1: string, value2: string, value3: string, value4: string} 
  = {  value1: "", value2: "", value3: "", value4: ""};

  public id : string;

  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);
  }

  public saveData():void
  {
    if (this.id != "new") {
      this.af.doc("/settings/" + this.id)
      .update(this.settings)
      .then(x => {
      })
    } else {
      this.af.collection("/settings")
      .add(this.settings)
      .then(x => {
      })
    }
  }
}
