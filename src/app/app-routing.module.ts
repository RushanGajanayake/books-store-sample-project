import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { BooksHandlingComponent } from './books-handling/books-handling.component';

const routes: Routes = [
  {path: '', component: AllBooksComponent, pathMatch: 'full'},
  {path: 'books-handling', component: BooksHandlingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
