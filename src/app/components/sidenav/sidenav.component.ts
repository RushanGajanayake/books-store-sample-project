import {  Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()
    sidenav: any;


  constructor() { }

  ngOnInit() {
  }

  closeSidenav(event) {
    this.sidenav.close();
  }

}
