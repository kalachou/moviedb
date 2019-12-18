import { Component, OnInit, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadMoviesPage } from '../../store/actions/movies-page.actions';
import { selectCurrentPage, selectMoviesList } from '../../store/selectors/movies-page.selectors';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ToggleItem } from 'src/app/store/actions/library.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private nextPage: number;
  private searchIsOff = true;
  private subscription: Subscription = new Subscription();
  private id: number;

  constructor(private store: Store<AppState>,
              private search: SearchService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    const moviesSubscription = this.store.select(selectMoviesList)
      .subscribe(x => this.movies = x);
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
    this.subscription.add(activateRoute.params.subscribe(params => this.id = params['id']));
  }
  @Input() movies: Movie[];

  @Output() movieSelected: EventEmitter<number> = new EventEmitter();

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.searchIsOff
      && ((window.screen.height + window.pageYOffset) >= document.body.scrollHeight)) {
      // confirm('you\'re at the bottom of the page, do we download next chunk of movies?');
      this.loadNextPage();
    }
  }

  ngOnInit() {
    if (!this.movies.length) {
      this.store.dispatch(new LoadMoviesPage());
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToMovie(id: number) {
    this.movieSelected.emit(id);
    this.router.navigate(['movies/info', id]);
    console.log('selected');
  }

  loadNextPage() {
    this.store.dispatch(new LoadMoviesPage(this.nextPage));
  }

  toggleLibrary(item: Movie) {
    this.store.dispatch(new ToggleItem(item));
  }

}
