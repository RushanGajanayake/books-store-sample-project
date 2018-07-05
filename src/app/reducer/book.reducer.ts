import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';
import * as BookActions from '../action/book.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BookState } from '../app.state';


export const initialState: BookState = {
  books:[],
  loaded:false,
  loading:false
}


export function reducer( state = initialState , action: BookActions.Actions): BookState{
  switch(action.type){
    case BookActions.LOAD_BOOK:
        return {
          ...state,
          loading:true,
          loaded:false
        };

    case BookActions.LOAD_BOOK_SUCCESS:
        return{
          ...state,
          loading:false,
          loaded: true,
          books: action.payload
        };

    case BookActions.LOAD_BOOK_FAILED:
        return{
          ...state,
          loading:false,
          loaded: false,
          books: []
        };

    case BookActions.ADD_BOOK:
        //console.log(action.payload)
        return  Object.assign({
          ...state,
          loading:false,
          loaded: true,
          books: [action.payload, ...state.books]
        });

    case BookActions.ADD_BOOK_FAILED:
        return{
          ...state,
          loading:false,
          loaded: false,
          books: []
        };

    case BookActions.REMOVE_BOOK:
        // state.splice(action.payload,1);
        return{
          ...state,
          loading:false,
          loaded: false,
          books: [ ...state.books.splice(state.books.indexOf(action.payload),1), ...state.books]
        };

    case BookActions.REMOVE_BOOK_SUCCESS:
        state.books.splice(state.books.indexOf(action.payload),1);
        return state;

    default:
        return state;
  }
}

export const getBookState = createFeatureSelector<BookState>('book');

export const getBooks = createSelector(
  getBookState,
  (state: BookState) => {
    return state.books;
  }
);
