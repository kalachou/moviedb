import { RouterReducerState } from '@ngrx/router-store';

import { LibraryState } from './library.satate';
import { MoviesPageState } from './movies-page.state';


export interface AppState {
    router?: RouterReducerState;
    library: LibraryState;
    shows?: ShowsPageState;
    movies: MoviesPageState;
}

export const initialAppState: AppState = {
    library: null,
    shows: null,
    movies: null
};

export function getInitialAppState(): AppState {
    return initialAppState;
}
