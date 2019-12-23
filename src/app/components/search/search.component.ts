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

  placeholder$ = this.search.showedPlaceholder;

  constructor(private search: SearchService) {
    this.search.showedPageEvent.subscribe(x => {
      //console.log(`changed to ${x}`, this.search.quickFilterSearch(this.searchInput));
      this.search.quickFilterSearch(this.searchInput);
    });
   }

  ngOnInit() {
    this.searchInput = this.search.getStoredSearchInput();

    this.search.showedPlaceholder.emit('Type title');
  }

  onSearchInputChange(model: string) {
    this.searchInput = model;
    this.search.quickFilterSearch(this.searchInput);
  }
}
