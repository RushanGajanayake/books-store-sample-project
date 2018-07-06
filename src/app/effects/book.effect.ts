import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {filter, map, switchMap} from "rxjs/operators";

import { DataServiceService } from '../data-service/data-service.service';
import * as BookActions from '../action/book.action';


@Injectable()
export class BooksEffects {


    constructor(
      private actions$: Actions,
      private _dataService: DataServiceService
    ) { }

    @Effect()
    loadBooks$:Observable<Action> = this.actions$
    .ofType(BookActions.LOAD_BOOK)
    .switchMap(() =>
       this._dataService.getAllBooksData()
       .map(data =>{
         return new  BookActions.LoadSuccessBook(data)})
    );

    @Effect()
    createBook$: Observable<Action> = this.actions$
      .ofType<BookActions.AddBook>(BookActions.ADD_BOOK)
      .map(action => action.payload)
      .mergeMap(book =>{
         return this._dataService.createNewBookData(book)
         .map(res => new BookActions.AddBookSuccess(res))
      }
      );

    @Effect()
    deleteBook$: Observable<Action> = this.actions$
      .ofType<BookActions.RemoveBook>(BookActions.REMOVE_BOOK)
      .map(action => action.payload)
      .mergeMap(book =>{
         return this._dataService.deleteBookData(book.id)
         .map(res =>{
           return new BookActions.RemoveBookSuccess(book)})}
      );

    @Effect()
    searchBooks$:Observable<Action> = this.actions$
    .ofType<BookActions.SearchBook>(BookActions.SEARCH_BOOK)
    .debounceTime(300)
    .switchMap( query =>
       this._dataService.getAllBooksData()
       .map(data =>{
         var filteredBooks = data.filter(book=> book.name.includes(query.payload)  || book.author.includes(query.payload));
         return new  BookActions.SearchBookCompleted(filteredBooks)})
    );

}
