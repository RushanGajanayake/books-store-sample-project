import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { AppState } from '../app.state';
import * as BookActions from '../action/book.action';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  books: Observable<Book[]>;

  breakpoint: number;

  constructor(private store:Store<AppState> ) {
    this.books = store.select('book');
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 4;
  }

  removeBook(index){
    this.store.dispatch(new BookActions.RemoveBook(index));
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 4;
  }


}
