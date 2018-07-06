import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { AppState } from '../app.state';
import * as BookActions from '../action/book.action';
import { Observable } from 'rxjs/Observable';
import * as BookReducers from '../reducer/book.reducer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormControl, NgForm, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-books-handling',
  templateUrl: './books-handling.component.html',
  styleUrls: ['./books-handling.component.scss']
})
export class BooksHandlingComponent implements OnInit {

  books: Observable<Book[]>;
  book:  Book;

  formGroup: FormGroup;

  constructor(private store: Store<AppState>, private _formBuilder: FormBuilder, public dialog: MatDialog) {
    this.books = store.select(BookReducers.getBooks);
    this.book = {
      id:null,
      name:"",
      author:"",
      discription:""
    };
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({});
    this.store.dispatch(new BookActions.LoadBook());
  }

  addNewBook(){
    this.store.dispatch(new BookActions.AddBook(this.book))
  }

  removeBook(book){
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '500px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result){
              this.store.dispatch(new BookActions.RemoveBook(book));
            }
        });
  }

}
