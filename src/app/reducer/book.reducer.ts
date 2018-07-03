import { Action } from '@ngrx/store';
import { Book } from '../models/book.model';
import * as BookActions from '../action/book.action';

const initialState: Book = {
  name: 'Harry Potter',
  author: 'J. K. Rowling',
  discription: 'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley'
}

export function reducer( state: Book[] = [initialState], action: BookActions.Actions){
  switch(action.type){
      case BookActions.ADD_BOOK:
          return [...state, action.payload];
      case BookActions.REMOVE_BOOK:
          state.splice(action.payload,1);
          return state;
      default:
          return state;
  }
}
