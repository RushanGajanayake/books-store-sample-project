import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';

export const ADD_BOOK = '[Book] Add';
export const ADD_BOOK_SUCCESS = '[Book] Add Success';
export const ADD_BOOK_FAILED = '[Book] Add Failed';
export const LOAD_BOOK =  '[Book] Load';
export const LOAD_BOOK_SUCCESS =  '[Book] Load Success';
export const LOAD_BOOK_FAILED =  '[Book] Load Failed';
export const REMOVE_BOOK =  '[Book] Remove';
export const REMOVE_BOOK_SUCCESS =  '[Book] Remove Success';
export const REMOVE_BOOK_FAILED =  '[Book] Remove Failed';
export const SEARCH_BOOK = '[Book] Search';
export const SEARCH_BOOK_COMPLETED = '[Book] Search Completed';


export class AddBook implements Action{
  readonly type = ADD_BOOK;

  constructor (public payload: Book) {}
}

export class AddBookSuccess implements Action{
  readonly type = ADD_BOOK_SUCCESS;

  constructor (public payload: Book) {}
}

export class AddBookFailed implements Action{
  readonly type = ADD_BOOK_FAILED;

  constructor (public payload: any) {}
}

export class RemoveBook implements Action{
  readonly type = REMOVE_BOOK;

  constructor (public payload: Book) {}
}

export class RemoveBookSuccess implements Action{
  readonly type = REMOVE_BOOK_SUCCESS;

  constructor (public payload: Book) {}
}

export class RemoveBookFailed implements Action{
  readonly type = REMOVE_BOOK_FAILED;

  constructor (public payload: any) {}
}

export class LoadBook implements Action{
  readonly type = LOAD_BOOK;

  constructor () {}
}

export class LoadSuccessBook implements Action{
  readonly type = LOAD_BOOK_SUCCESS;

  constructor (public payload: Book[]) {}
}

export class LoadFailedBook implements Action{
  readonly type = LOAD_BOOK_FAILED;

}

export class SearchBook implements Action{
  readonly type = SEARCH_BOOK;

  constructor (public payload: string) {}
}

export class SearchBookCompleted implements Action{
  readonly type = SEARCH_BOOK_COMPLETED;

  constructor (public payload: Book[]) {}
}

export type Actions = AddBook | AddBookSuccess | AddBookFailed | 
                      RemoveBook | RemoveBookSuccess | RemoveBookFailed | 
                      LoadBook | LoadSuccessBook | LoadFailedBook |
                      SearchBook | SearchBookCompleted;
