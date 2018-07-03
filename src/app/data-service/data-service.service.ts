import { Injectable } from '@angular/core';
import { RouteDetailsService } from './route-details.service';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataServiceService {

  apiUrl: string ;

  constructor(private _routeDetails: RouteDetailsService, private http: Http) { }
}
