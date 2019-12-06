import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Input() searchInput: string;
  @Output() searchInputChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchInputChange(model: string) {
    this.searchInput = model;
    this.searchInputChange.emit(this.searchInput);
  }
}
