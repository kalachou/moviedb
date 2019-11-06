import { RouterReducerState } from '@ngrx/router-store';

import { ILibrary } from '../../models/library.interface';
import { ITvShow } from '../../models/tvshow.interface';
import { IMovie } from '../../models/movie.interface';

export interface ILibraryState {
    router?: RouterReducerState;
    shows: Array<ITvShow>;
    movies: Array<IMovie>;
}

export const initialLibraryState: ILibrary = {
    shows: null,
    movies: null
};
