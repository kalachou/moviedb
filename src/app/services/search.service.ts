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
  private storedSearchInput: string;
  private placeholder = 'Type title';

  public showedPageEvent = new EventEmitter();
  public showedPlaceholder = new EventEmitter();

  public onQuickFilterSearch: EventEmitter<(Movie | TvShow)[]> = new EventEmitter();
  public onSearchTurnOff: EventEmitter<boolean> = new EventEmitter();

  constructor(private store: Store<AppState>) {
    this.store.select(selectMoviesList).subscribe(x => {
      this.loadedMoviesArray = x;
    });
    this.store.select(selectShowsList).subscribe(x => {
      this.loadedShowsArray = x;
    });
    this.showedPlaceholder.emit(this.placeholder);
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

    switch (page) {
      case 'movies': this.placeholder = 'Type movie title';
                     break;
      case 'shows': this.placeholder = 'Type show title';
                    break;
      case 'library': this.placeholder = 'Type movie or show title';
                      break;
      default: this.placeholder = 'Type title';
        }


    this.showedPlaceholder.emit(this.placeholder);
  }

  public getShowedPage() {
    return this.showedPage;
  }
}
