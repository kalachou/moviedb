import {Action} from '@ngrx/store';

import { Movie } from '../../models/movie.interface';

export enum EMoviesPageActions {
    LoadPage = 'Load page',
    LoadPageSucces = 'Loading page is succesful',
    LoadPageFail = 'Loading page is failed',
}

export class LoadPage implements Action {
    public readonly type = EMoviesPageActions.LoadPage;
    constructor(public payload: number = 1) {}
}

export class LoadPageSucces implements Action {
    public readonly type = EMoviesPageActions.LoadPageSucces;
    constructor(public payload: Movie[]) {}
}

export class LoadPageFail implements Action {
    public readonly type = EMoviesPageActions.LoadPageFail;
}

export type MoviesPageActions = LoadPage | LoadPageSucces | LoadPageFail;
