import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.open > .dropdown-menu {display:block}']})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
