import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MenuService {
  private activePage = new BehaviorSubject<string>("./pages");
  public page = this.activePage.asObservable();
  public setPage(pageLink :string)
  {
    this.activePage.next(pageLink);
  }

  constructor() { }
  private menu: Array<{text:string, link:string}> = [
    {text:"Pages", link:"/pages"},
    {text:"Media", link:"/media"},
    {text:"Settings", link:"/settings"}
  ];

  public getMenu()
  {
    return this.menu;
  }

}
