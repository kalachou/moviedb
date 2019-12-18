import { RouterReducerState } from '@ngrx/router-store';

import { TvShow } from '../../models/tvshow.interface';
import { Movie } from '../../models/movie.interface';

export interface LibraryState {
    router?: RouterReducerState;
    items: (Movie|TvShow)[];
    filter: string;
    filteredItems: (Movie|TvShow)[];
    unseenItems: number;
}

export const initialLibraryState: LibraryState = {
    items: [],
    filter: '',
    filteredItems: [],
    unseenItems: 0
};
