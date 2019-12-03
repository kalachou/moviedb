import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { Injectable } from '@angular/core';
import { EMoviesPageActions, LoadPage, LoadPageSucces, LoadPageFail } from '../actions/movies-page.actions';
import { AppState } from '../state/app.state';
import { of } from 'rxjs';

@Injectable()
export class MoviesPageEffects {
  @Effect()
  getMoviesPage$ = this._actions$.pipe(
    ofType<LoadPage>(EMoviesPageActions.LoadPage),
    switchMap((action: LoadPage) => {
      const pageNumber = action.payload;
      let moviesChunk;
      let resultRequest: any;
      return this._moviesService.getMoviesPage(pageNumber).pipe(
        map(data => {
          resultRequest = data;
          // convert into camelcased and remove unnesessary proprties
          moviesChunk = resultRequest.map((x: { vote_average: any; poster_path: any; overview: any; title: any; }) => ({
            voteAverage: x.vote_average,
            posterPath: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${x.poster_path}`,
            overview: x.overview,
            title: x.title
          }));
          return new LoadPageSucces(moviesChunk);
        }),
        // catchError(err => new LoadPageFail())
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
