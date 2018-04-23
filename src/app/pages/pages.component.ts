import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

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

  private pageList : Array<any>;
  constructor(private auth: AuthService,
  private af : AngularFirestore
  ) {  

  }
    
  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);
      this.af.collection("/pages").valueChanges().subscribe(x => this.pageList = x);
  }

  public criaPagina()
  {
    this.af.collection("/pages").add(this.page).catch( x => {
      this.msgArray.push(x);
    });
  }
}
