import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import { MaterialModule} from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components';
import { HttpModule } from '@angular/http';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { BooksHandlingComponent } from './books-handling/books-handling.component';

import { DataServiceService } from './data-service/data-service.service';
import { RouteDetailsService } from './data-service/route-details.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducer/book.reducer';
import { BooksEffects } from './effects/book.effect';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


@NgModule({
  entryComponents: [
    MoreInfoComponent, 
    ConfirmationDialogComponent
  ],
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    AllBooksComponent,
    BooksHandlingComponent,
    MoreInfoComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FlexLayoutModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({book: reducer}),
    EffectsModule.forRoot([
        BooksEffects
    ])
  ],
  providers: [DataServiceService, RouteDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
