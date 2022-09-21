import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadmenuComponent } from './headmenu/headmenu.component';



@NgModule({
  declarations: [HeadmenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeadmenuComponent

  ]
})
export class ComponentesModule { }
