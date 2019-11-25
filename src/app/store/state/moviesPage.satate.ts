import { RouterReducerState } from '@ngrx/router-store';

import { Movie } from '../../models/movie.interface';

export interface MoviesPageState {
    router?: RouterReducerState;
    items: [Movie, Movie, Movie, Movie, Movie,
        Movie, Movie, Movie, Movie, Movie,
        Movie, Movie, Movie, Movie, Movie,
        Movie, Movie, Movie, Movie, Movie,
        Movie, Movie, Movie, Movie, Movie];
}

export const initialMoviesPageState: MoviesPage = {
    items: new Array<Movie>(20)
};
