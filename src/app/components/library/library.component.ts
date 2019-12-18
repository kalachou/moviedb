import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { SearchService } from 'src/app/services/search.service';
import { Movie } from 'src/app/models/movie.interface';
import { TvShow } from 'src/app/models/tvshow.interface';
import { selectLibraryFilteredList } from 'src/app/store/selectors/library.selectors';
import { ToggleItem, FilterLibrarySearch } from 'src/app/store/actions/library.actions';
import { SeeItems } from '../../store/actions/library.actions';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.sass']
})
export class LibraryComponent implements OnInit {
  constructor(private store: Store<AppState>, private search: SearchService) {
    this.search.setShowedPage('library');
    this.store.dispatch(new FilterLibrarySearch(this.search.getStoredSearchInput()));
   }
  @Input() library$ = this.store.select(selectLibraryFilteredList);

  @Output() selectedItem: EventEmitter<number> = new EventEmitter();
  ngOnInit() {
    this.store.dispatch(new SeeItems());
  }

  toggleLibrary(item: TvShow|Movie) {
    this.store.dispatch(new ToggleItem(item));
  }

}
