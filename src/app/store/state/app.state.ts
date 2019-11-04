import { RouterReducerState } from '@ngrx/router-store';

import { ILibrary } from '../../models/library.interface';
import { ITvShow } from '../../models/tvshow.interface';
import { IMovie } from '../../models/movie.interface';


export interface IAppState {
    router?: RouterReducerState;
    library: ILibrary;
    shows: Array<ITvShow>;
    movies: Array<IMovie>;
}

export const initialAppState: IAppState = {
    library: null,
    shows: null,
    movies: null
};

export function getInitialAppState(): IAppState {
    return initialAppState;
}
