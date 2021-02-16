import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Input() searchInput: string;
  @Output() searchInputChange = new EventEmitter<string>();

  constructor(private search: SearchService) { }

  ngOnInit() {
  }

  onSearchInputChange(model: string) {
    this.searchInput = model;
    this.search.quickFilterSearch(this.searchInput);
  }
}
