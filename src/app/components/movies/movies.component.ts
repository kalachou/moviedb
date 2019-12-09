import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadPage } from '../../store/actions/movies-page.actions';
import { selectCurrentPage, selectMoviesList } from '../../store/selectors/movies-page.selectors';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  private nextPage: number;
  private searchIsOff = true;

  constructor(private store: Store<AppState>, private search: SearchService) { }
  @Input() movies: Movie[];

  @Output() movieSelected: EventEmitter<number> = new EventEmitter();

  @HostListener('window:scroll', [])
  onScroll(): void {
    // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
    if (this.searchIsOff
      && ((window.screen.height + window.pageYOffset) >= document.body.scrollHeight - 2)) {
      alert('you\'re at the bottom of the page');
      this.loadNextPage();
    }
  }

  ngOnInit() {
    this.store.dispatch(new LoadPage());
    this.store.select(selectMoviesList).subscribe(x => {
      this.movies = x;
    });
    this.search.setShowedPage('movies');
    this.search.onQuickFilterSearch.subscribe((x: Movie[]) => this.movies =  x);
    this.search.onSearchTurnOff.subscribe((x: boolean) => this.searchIsOff =  x);
  }

  navigateToMovie(id: number) {
    this.movieSelected.emit(id);
  }

  loadNextPage() {
    this.store.select(selectCurrentPage).subscribe(res => this.nextPage = res + 1);
    this.store.dispatch(new LoadPage(this.nextPage));
  }


}
