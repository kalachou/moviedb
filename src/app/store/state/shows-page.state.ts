import { RouterReducerState } from '@ngrx/router-store';

import { ShowsPage } from '../../models/shows-page.interface';
import { TvShow } from '../../models/tvshow.interface';

export interface MoviesPageState {
    router?: RouterReducerState;
    page: number;
    items: TvShow[];
}

export const initialMoviesPageState: ShowsPage = {
    page: 1,
    items: new Array<TvShow>(20)
};
