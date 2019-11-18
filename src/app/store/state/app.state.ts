import { RouterReducerState } from '@ngrx/router-store';

import { Library } from '../../models/library.interface';
import { TvShow } from '../../models/tvshow.interface';
import { Movie } from '../../models/movie.interface';


export interface AppState {
    router?: RouterReducerState;
    library: Library;
    shows: Array<TvShow>;
    movies: Array<Movie>;
}

export const initialAppState: AppState = {
    library: null,
    shows: null,
    movies: null
};

export function getInitialAppState(): AppState {
    return initialAppState;
}
