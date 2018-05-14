import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class DataService {


    constructor(public http: HttpClient) {

    }

    getHackerNews(): Observable<any> {

        return this.http
            .get('https://hacker-news.firebaseio.com/v0/item/8863.json')
    }

}