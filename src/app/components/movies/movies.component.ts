import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadPage } from '../../store/actions/moviesPage.actions';
import { selectCurrentPage } from '../../store/selectors/moviesPage.selectors';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  private _nextPage;

  constructor(private _store: Store<AppState>) { }
  @Input()
  movies: Movie[];
  @Output()
  movieSelected: EventEmitter<number> = new EventEmitter();

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
      // alert("you're at the bottom of the page");
      this.loadNextPage();
    }
  }

  ngOnInit() {
    this._store.dispatch(new LoadPage());
  }

  navigateToMovie(id: number) {
    this.movieSelected.emit(id);
  }

  loadNextPage() {
    this._store.select(selectCurrentPage).subscribe(res => this._nextPage = res + 1);
    this._store.dispatch(new LoadPage(this._nextPage));
  }


}
