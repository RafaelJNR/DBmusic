import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headmenu',
  templateUrl: './headmenu.component.html',
  styleUrls: ['./headmenu.component.scss'],
})
export class HeadmenuComponent implements OnInit {


  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
