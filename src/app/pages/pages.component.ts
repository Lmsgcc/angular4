import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';




@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public showNew : boolean = false;
  private pageList : Array<any>;
  constructor(private auth: AuthService,
  private af : AngularFirestore,
  private router : Router
  ) {  

  }
    
  ngOnInit(): void { 
    this.auth.userState
      .subscribe(x => this.auth.isLoggedIn = x);
      this.af.collection("/pages").snapshotChanges().subscribe(x => {
        let documentArray: Array<any> = [];
        x.forEach(element => {
          this.af.doc<any>('/pages/' + element.payload.doc.id)
          .valueChanges()
          .subscribe(x => documentArray.push({id: element.payload.doc.id, doc: x }));
        })
        this.pageList = documentArray;
      });
      //.valueChanges().subscribe(x => this.pageList = x);

  }

  public hideEvent(event: {type: string, text: string})
  {
    if(event.type == "success")
    {
        this.showNew = false;
    }
  }

  public goToNew()
  {
    this.router.navigate(["/pages","new"]);
  }
}
