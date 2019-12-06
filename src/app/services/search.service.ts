import { Injectable, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { TvShow } from '../models/tvshow.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  filteredArray: (Movie | TvShow)[];
  showedPage = 'movies';

  public onQuickFilterSearch: EventEmitter<(Movie | TvShow)[]> = new EventEmitter();

  constructor() { }

  public quickFilterSearch(searchInput: string) {
    // this.filteredArray =  
  }

  public advancedSearch() {

  }
}
