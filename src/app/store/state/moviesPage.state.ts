import { RouterReducerState } from '@ngrx/router-store';

import { Movie } from '../../models/movie.interface';
import { MoviesPage } from '../../models/moviesPage.interface';

export interface MoviesPageState {
    selectedMovie: Movie;
    router?: RouterReducerState;
    page: number;
    items: Movie[];
}

export const initialMoviesPageState: MoviesPage = {
    page: 1,
    items: new Array<Movie>(20),
    selectedMovie: null
};
