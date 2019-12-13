import { RouterReducerState } from '@ngrx/router-store';

import { LibraryState } from './library.state';
import { MoviesPageState } from './movies-page.state';
import { ShowsPageState } from './shows-page.state';


export interface AppState {
    router?: RouterReducerState;
    library: LibraryState;
    shows: ShowsPageState;
    movies: MoviesPageState;
}

export const initialAppState: AppState = {
    library: null,
    shows: null,
    movies: null
};
