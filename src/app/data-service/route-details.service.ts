import { Injectable } from '@angular/core';

@Injectable()
export class RouteDetailsService {

  hostUrl: string = "http://localhost:3000";

  booksRoute: string = "/books";

  constructor() { }

  getRoute(){
    return this.hostUrl.concat(this.booksRoute);
  }

}
