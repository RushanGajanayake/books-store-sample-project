import { Book } from './models/book.model';

export interface AppState {
    bookState: BookState;
}

export interface BookState{
  books: Book[],
  loaded: boolean,
  loading: boolean
}
