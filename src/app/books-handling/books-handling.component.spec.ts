import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksHandlingComponent } from './books-handling.component';

describe('BooksHandlingComponent', () => {
  let component: BooksHandlingComponent;
  let fixture: ComponentFixture<BooksHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
