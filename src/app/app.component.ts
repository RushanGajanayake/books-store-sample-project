import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  opened: boolean;

  constructor() {
  }

}
