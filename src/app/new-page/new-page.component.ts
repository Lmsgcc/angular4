import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  @Output() InsertPageDone :  EventEmitter<{type:string, text: string}> = new EventEmitter();

  constructor( private auth: AuthService,
    private af : AngularFirestore
  ) { }

  public  msgArray : Array<string> = new Array();

  
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
      this.msgArray.push(x);
      this.InsertPageDone.emit({type: "failure", text:"Error ocurred"});
    }).then(x => {
      this.msgArray.push("The page was created");
      this.InsertPageDone.emit({type: "success", text:"Page Done!!"});
      
    });
  }
}
