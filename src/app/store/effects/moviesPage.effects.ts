import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { Injectable } from '@angular/core';
import { EMoviesPageActions, LoadPage, LoadPageSucces } from '../actions/moviesPage.actions';
import { AppState } from '../state/app.state';
import { of } from 'rxjs';

@Injectable()
export class MoviesPageEffects {
  @Effect()
  getMoviesPage$ = this._actions$.pipe(
    ofType<LoadPage>(EMoviesPageActions.LoadPage),
    switchMap((action: LoadPage) => {
      const pageNumber = action.payload;
      const moviesChunk =  this._moviesService.getMoviesPage(pageNumber);
      return of(new LoadPageSucces(moviesChunk));
    })
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _moviesService: MoviesService
  ) {
  }




}
