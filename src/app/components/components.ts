import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SidenavComponent } from './sidenav/sidenav.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';


export const COMPONENTS = [
  // SidenavComponent,
  // ToolbarComponent
];


@NgModule({
  imports: [
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
