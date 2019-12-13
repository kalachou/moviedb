import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadPage } from '../../store/actions/movies-page.actions';
import { selectCurrentPage, selectMoviesList } from '../../store/selectors/movies-page.selectors';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private nextPage: number;
  private searchIsOff = true;
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>, private search: SearchService) { }
  @Input() movies: Movie[];

  @Output() movieSelected: EventEmitter<number> = new EventEmitter();

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.searchIsOff
      && ((window.screen.height + window.pageYOffset) >= document.body.scrollHeight)) {
      alert('you\'re at the bottom of the page, do we download next chunk of movies?');
      console.log('first', this.nextPage, this.movies, this.store);
      this.loadNextPage();
      console.log('second', this.nextPage, this.movies, this.store);
    }
  }

  ngOnInit() {
    this.store.dispatch(new LoadPage());
    const moviesSubscription = this.store.select(selectMoviesList)
      .subscribe(x => {
        this.movies = x;
      });
    const pageSubscription = this.store.select(selectCurrentPage)
      .subscribe((res: number) => this.nextPage = res + 1);

    this.search.setShowedPage('movies');
    const filterSearchSubscription = this.search.onQuickFilterSearch
      .subscribe((x: Movie[]) => this.movies = x);
    const filterSearchSwitcherSubscription = this.search.onSearchTurnOff
      .subscribe((x: boolean) => this.searchIsOff = x);

    this.subscription.add(moviesSubscription);
    this.subscription.add(pageSubscription);
    this.subscription.add(filterSearchSubscription);
    this.subscription.add(filterSearchSwitcherSubscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToMovie(id: number) {
    this.movieSelected.emit(id);
  }

  loadNextPage() {
    this.store.dispatch(new LoadPage(this.nextPage));
  }

  toggleLibrary(item: Movie) {
    this.store.dispatch(new ToggleItem(item));
  }

}
