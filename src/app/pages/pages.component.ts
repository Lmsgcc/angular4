import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

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
    var novos_dados = {
      "slug": "insert_automatico",
      "body": "um body",
      "title":"custom title",
      "subject":"Aqui está um subject",
      "published_data": ""
    };
    this.af.collection("/pages").add(novos_dados);
  }
}
