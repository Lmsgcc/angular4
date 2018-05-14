import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
  
  @Output() InsertPageDone: EventEmitter<{ type: string, text: string }> 
    = new EventEmitter();

  public msgArray: Array<{type: string, text: string}> = [];

  public page: { title: string, subject: string, slug: string, publishedDate: Date, body: string} 
    = { title: "", subject: "", slug: "", publishedDate: new Date(), body: "" };


  public id: string = "";

  constructor(private auth: AuthService,
    private af: AngularFirestore,
    private activatedRoute: ActivatedRoute) {  

      activatedRoute.params
        .subscribe(x => {
          this.id = x["id"];
          this.af.doc("/pages/" + this.id)
            .valueChanges()
            .subscribe(fbDoc => {
              if (fbDoc) this.page = <any>fbDoc;
            });
        });
    }
  
  ngOnInit(): void { 
    

  }

  saveObject() {

    if (this.id != "new") {
      this.af.doc("/pages/" + this.id)
      .update(this.page)
      .then(x => {
        this.InsertPageDone.emit({ type: "success", text: "The page was created!" });
      })
    } else {
      this.af.collection("/pages")
      .add(this.page)
      .then(x => {
        this.InsertPageDone.emit({ type: "success", text: "The page was created!" });
        
      })
    }
    
  }

}
