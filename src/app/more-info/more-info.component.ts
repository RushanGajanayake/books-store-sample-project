import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AllBooksComponent } from '../all-books/all-books.component';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  book: Book;

  constructor(
  	public dialogRef: MatDialogRef<AllBooksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
  	console.log(this.data);
  	this.book = this.data.book;
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
