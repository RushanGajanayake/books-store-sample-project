import { Injectable } from '@angular/core';
import { RouteDetailsService } from './route-details.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataServiceService {

  apiUrl: string ;

  constructor(private _routeDetails: RouteDetailsService, private http: HttpClient) { }

  getAllBooksData():Observable<Book[]>{
    this.apiUrl = this._routeDetails.getRoute();

    let url = `${this.apiUrl}`;
    return this.http.get<Book[]>(url);

  }

  createNewBookData(book: Book):Observable<Book>{
    this.apiUrl = this._routeDetails.getRoute();

    let url = `${this.apiUrl}`;
    return this.http.post<Book>(url, book);
  }

  deleteBookData(id: number):Observable<Book>{
    console.log(id);
    this.apiUrl = this._routeDetails.getRoute();

    let url = `${this.apiUrl}`;
    return this.http.delete<Book>(url + "/" + id);
  }
}
