import {Action} from '@ngrx/store';

import { Movie } from '../../models/movie.interface';

export enum EMoviesPageActions {
    LoadPage = 'Load page',
}

export class LoadPage implements Action {
    public readonly type = EMoviesPageActions.LoadPage;
    constructor(public payload: number = 1) {}
}

export type MoviesPageActions = LoadPage;
