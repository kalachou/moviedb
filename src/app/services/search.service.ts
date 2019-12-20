import { Injectable, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { TvShow } from '../models/tvshow.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { selectMoviesList } from '../store/selectors/movies-page.selectors';
import { selectShowsList } from '../store/selectors/shows-page.selectors';
import { FilterLibrarySearch } from '../store/actions/library.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private loadedMoviesArray: Movie[];
  private loadedShowsArray: TvShow[];
  private filteredItemsArray: (Movie | TvShow)[];
  private showedPage = '';
  showedPageEvent = new EventEmitter();
  private storedSearchInput: string;

  public onQuickFilterSearch: EventEmitter<(Movie | TvShow)[]> = new EventEmitter();
  public onSearchTurnOff: EventEmitter<boolean> = new EventEmitter();

  constructor(private store: Store<AppState>) {
    this.store.select(selectMoviesList).subscribe(x => {
      this.loadedMoviesArray = x;
    });
    this.store.select(selectShowsList).subscribe(x => {
      this.loadedShowsArray = x;
    });
  }

  public quickFilterSearch(searchInput: string) {
    this.storedSearchInput = searchInput;
    const regExp = new RegExp(searchInput, 'i');
    if (this.showedPage === 'movies') {
      this.filteredItemsArray = this.loadedMoviesArray.filter(
        item => regExp.test(item.title)
      );
    }
    if (this.showedPage === 'shows') {
      this.filteredItemsArray = this.loadedShowsArray.filter(
        item => regExp.test(item.title)
      );
    }
    if (this.showedPage === 'library') {
      console.log('library', this.store);
      this.store.dispatch(new FilterLibrarySearch(searchInput));
    }
    if (!searchInput) {
      this.onSearchTurnOff.emit(true);
    } else {
      this.onSearchTurnOff.emit(false);
    }
    this.onQuickFilterSearch.emit(this.filteredItemsArray);
  }

  public getStoredSearchInput() {
    return this.storedSearchInput;
  }

  public advancedSearch() {

  }

  public setShowedPage(page: string) {
    this.showedPage = page;
    this.showedPageEvent.emit(page);
  }

  public getShowedPage() {
    return this.showedPage;
  }
}
