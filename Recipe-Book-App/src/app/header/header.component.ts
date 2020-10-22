import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.open > .dropdown-menu {display:block}']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelcted = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string): void {
    this.featureSelcted.emit(feature);
  }
}
