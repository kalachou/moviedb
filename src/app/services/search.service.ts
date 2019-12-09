import { Injectable, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { TvShow } from '../models/tvshow.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { selectMoviesList } from '../store/selectors/movies-page.selectors';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private filteredMovieArray: (Movie | TvShow)[];
  private showedPage = 'movies';

  public onQuickFilterSearch: EventEmitter<(Movie | TvShow)[]> = new EventEmitter();
  public onSearchTurnOff: EventEmitter<boolean> = new EventEmitter();

  constructor(private store: Store<AppState>) { }

  public quickFilterSearch(searchInput: string) {
    const regExp = new RegExp(searchInput, 'i');
    if (this.showedPage === 'movies') {
      this.store.select(selectMoviesList).subscribe(x => {
        this.filteredMovieArray = x.filter(item => regExp.test(item.title));
      });
      this.onQuickFilterSearch.emit(this.filteredMovieArray);

    }
    if (!searchInput) {
      this.onSearchTurnOff.emit(true);
    } else {
      this.onSearchTurnOff.emit(false);
    }

  }

  public advancedSearch() {

  }

  public setShowedPage(page: string) {
    this.showedPage = page;
  }
}
