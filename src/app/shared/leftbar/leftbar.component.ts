import { Component, OnInit } from '@angular/core';
import { MenuService } from "../menu.service";

@Component({
  selector: 'leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  public menuArray = new Array();

  constructor(private menu : MenuService) 
  {
  }

  ngOnInit() {
    this.menuArray = this.menu.getMenu();
  }

  public showComponent(link:string)
  {
    this.menu.setPage(link);
  }


}
