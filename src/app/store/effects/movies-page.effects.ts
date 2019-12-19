import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { Injectable } from '@angular/core';
import {
  EMoviesPageActions,
  LoadMoviesPage,
  LoadMoviesPageSucces,
  LoadMoviesPageFail,
  LoadMovieInfo,
  LoadMovieInfoSuccess,
  LoadMovieInfoFail
} from '../actions/movies-page.actions';
import { AppState } from '../state/app.state';
import { of } from 'rxjs';
import { Movie } from '../../models/movie.interface';

@Injectable()
export class MoviesPageEffects {
  @Effect()
  getMoviesPage$ = this.actions$.pipe(
    ofType<LoadMoviesPage>(EMoviesPageActions.LoadMoviesPage),
    switchMap((action: LoadMoviesPage) => {
      const pageNumber = action.payload;
      let moviesChunk: Movie[];
      let resultRequest: any;
      return this.moviesService.getMoviesPage(pageNumber).pipe(
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
            title: x.title,
            type: 'movie'
          }));
          return new LoadMoviesPageSucces(moviesChunk);
        }),
        catchError(err => of(new LoadMoviesPageFail(err)))
      );
    })
  );

  @Effect()
  getMovieInfo$ = this.actions$.pipe(
    ofType<LoadMovieInfo>(EMoviesPageActions.LoadMovieInfo),
    switchMap((action: LoadMovieInfo) => {
      const movieID = action.payload;
      let resultRequest;

      return this.moviesService.getMovieInfo(movieID).pipe(
        map(data => {
          resultRequest = [data].map((x: {
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
            title: x.title,
            type: 'movie'
          }));
          return new LoadMovieInfoSuccess(resultRequest);
        }),
        catchError(err => of(new LoadMovieInfoFail(err)))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private _store: Store<AppState>,
    private moviesService: MoviesService
  ) {
  }




}
