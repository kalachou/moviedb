import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { Injectable } from '@angular/core';
import { EMoviesPageActions, LoadMoviesPage, LoadMoviesPageSucces, LoadMoviesPageFail } from '../actions/movies-page.actions';
import { AppState } from '../state/app.state';
import { of } from 'rxjs';
import { Movie } from '../../models/movie.interface';

@Injectable()
export class MoviesPageEffects {
  @Effect()
  getMoviesPage$ = this._actions$.pipe(
    ofType<LoadMoviesPage>(EMoviesPageActions.LoadMoviesPage),
    switchMap((action: LoadMoviesPage) => {
      const pageNumber = action.payload;
      let moviesChunk;
      let resultRequest: any;
      return this._moviesService.getMoviesPage(pageNumber).pipe(
        map(data => {
          resultRequest = data[0]['results'];
          moviesChunk = resultRequest.map((x: {
            id: number;
            vote_average: number;
            poster_path: string;
            overview: string;
            title: string;
          }) => ({
            id: x.id,
            voteAverage: x.vote_average,
            posterPath: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${x.poster_path}`,
            overview: x.overview,
            title: x.title
          }));
          return new LoadMoviesPageSucces(moviesChunk);
        }),
        catchError(err => of(new LoadMoviesPageFail(err)))
      );
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _moviesService: MoviesService
  ) {
  }




}
