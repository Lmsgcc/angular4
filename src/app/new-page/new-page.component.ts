import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  constructor( private auth: AuthService,
    private af : AngularFirestore
  ) { }

  public  msgArray : Array<string>;

  
  public page : {
    title:string,
    subject: string,
    slug: string,
    body: string,
    published_data: Date
  } = {
    title:"",
    subject: "",
    slug: "",
    body: "",
    published_data: new Date()
  };


  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);
  }
  public criaPagina()
  {
    this.af.collection("/pages").add(this.page).catch( x => {
      //this.msgArray.push(x);
    }).then(x => {
      this.msgArray.push("The page was created");
    });
  }
}
