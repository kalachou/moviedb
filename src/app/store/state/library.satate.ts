import { RouterReducerState } from '@ngrx/router-store';

import { Library } from '../../models/library.interface';
import { TvShow } from '../../models/tvshow.interface';
import { Movie } from '../../models/movie.interface';
import { initialAppState } from './app.state';

export interface LibraryState {
    router?: RouterReducerState;
    items: (Movie|TvShow)[];
}

export const initialLibraryState: Library = {
    items: null
};
