import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/combineLatest';
import { DataSource } from '@angular/cdk/collections';
import { Store } from '@ngrx/store';
import { Book } from '../models/book.model';
import { AppState } from '../app.state';
import * as BookActions from '../action/book.action';
import { DataServiceService } from '../data-service/data-service.service';
import * as BookReducers from '../reducer/book.reducer';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private store:Store<AppState>,  private _dataService: DataServiceService, public dialog: MatDialog ) {
    this.books = store.select(BookReducers.getBooks);
  }

  ngOnInit() {
    this.store.dispatch(new BookActions.LoadBook());
  }

  moreInfo(book){
    let dialogRef = this.dialog.open(MoreInfoComponent, {
            width: '700px',
            data: { book }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
  }

  applyFilter(name: string) {
    if(name !== ""){
      this.store.dispatch(new BookActions.SearchBook(name));
    }
    else{
      this.store.dispatch(new BookActions.LoadBook());
    }
  }


}
