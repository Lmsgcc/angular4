import { Component, ViewChild, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'left-bar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftBarComponent implements OnInit{
  
  public menuArray: Array<any> = [];
  constructor(public menu: MenuService) { }
  
  ngOnInit(): void { 
    this.menuArray = this.menu.getMenu();
  }

  showComponent(link: string){
    this.menu.setPage(link);
  }

}
