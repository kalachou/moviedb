import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { LoadMovieInfo } from '../../store/actions/movies-page.actions';
import { Movie } from '../../models/movie.interface';
import { selectSelectedMovie } from '../../store/selectors/movies-page.selectors';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.sass']
})
export class MovieInfoComponent implements OnInit {
  id: number;
  @Input() movie$ = this.store.select(selectSelectedMovie);
  constructor(private activateRoute: ActivatedRoute,
              private store: Store<AppState>) {
    this.id = activateRoute.snapshot.params.id;

  }

  ngOnInit() {
    this.store.dispatch(new LoadMovieInfo(this.id));
  }

}
