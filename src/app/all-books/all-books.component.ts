import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { AppState } from '../app.state';
import * as BookActions from '../action/book.action';
import { DataServiceService } from '../data-service/data-service.service';
import * as BookReducers from '../reducer/book.reducer';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  books: Observable<Book[]>;
  isLoading: Observable<any>;

  breakpoint: number;

  constructor(private store:Store<AppState>,  private _dataService: DataServiceService ) {
    this.books = store.select(BookReducers.getBooks);
  }

  ngOnInit() {
    this.store.dispatch(new BookActions.LoadBook());
  }


}
