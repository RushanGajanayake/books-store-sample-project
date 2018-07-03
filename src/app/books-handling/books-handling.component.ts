import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { AppState } from '../app.state';
import * as BookActions from '../action/book.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-books-handling',
  templateUrl: './books-handling.component.html',
  styleUrls: ['./books-handling.component.scss']
})
export class BooksHandlingComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = store.select('book');
  }

  ngOnInit() {
  }

  addNewBook(name,author,disc){
    this.store.dispatch(new BookActions.AddBook({name:name, author:author, discription:disc}))
  }

}
