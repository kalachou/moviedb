import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { MoviesService } from '../../servises/movies.servise';
import { Injectable } from '@angular/core';
import { EMoviesPageActions, LoadPage } from '../actions/moviesPage.actions';
import { AppState } from '../state/app.state';

@Injectable()
export class MoviesPageEffects {
    constructor() {
    private _actions$: Actions;
    private _store: Store<AppState>;
    private _moviesService: MoviesService;
}

@Effect()
const getMoviesPage$ = this._actions$.pipe(
    ofType<LoadPage>(EMoviesPageActions.LoadPage),
    switchMap(() => this._moviesService.getMoviesPage())
);

}
