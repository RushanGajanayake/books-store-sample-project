import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
    sidenav: any;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(event) {
    // this.sidenav.mode = 'over';
    this.sidenav.open();
    console.log("fuck");
  }

}
