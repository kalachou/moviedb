import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { Injectable } from '@angular/core';
import { EMoviesPageActions, LoadPage } from '../actions/moviesPage.actions';
import { AppState } from '../state/app.state';

@Injectable()
export class MoviesPageEffects {
    constructor(
      private _actions$: Actions,
      private _store: Store<AppState>,
      private _moviesService: MoviesService
    ) {

}

@Effect()
 getMoviesPage$ = this._actions$.pipe(
    ofType<LoadPage>(EMoviesPageActions.LoadPage),
    switchMap((action: LoadPage) => {
      const pageNumber = action.payload;
      return this._moviesService.getMoviesPage(pageNumber);
    })
);

}
