import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadPage } from '../../store/actions/movies-page.actions';
import { selectCurrentPage, selectMoviesList } from '../../store/selectors/movies-page.selectors';

@Component({
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.sass']
})
export class MoviesContainerComponent implements OnInit {
  private _nextPage;
  @Input()
  movies;
  @Output()
  movies$;

  constructor(private _store: Store<AppState>) { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
      // alert("you're at the bottom of the page");
      this.loadNextPage();
    }
  }

  ngOnInit() {
    this._store.dispatch(new LoadPage());
    this.movies$ = this._store.select(selectMoviesList);
  }

  navigateToMovie(id: number) {
    // this.movieSelected.emit(id);
  }

  loadNextPage() {
    this._store.select(selectCurrentPage).subscribe(res => this._nextPage = res + 1);
    this._store.dispatch(new LoadPage(this._nextPage));
  }


}
