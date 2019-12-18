import { RouterReducerState } from '@ngrx/router-store';

import { Movie } from '../../models/movie.interface';
import { MoviesPage } from '../../models/movies-page.interface';

export interface MoviesPageState {
    selectedMovie: Movie;
    selectedMovieID: number;
    router?: RouterReducerState;
    page: number;
    items: Movie[];
}

export const initialMoviesPageState: MoviesPage = {
    page: 0,
    items: [],
    selectedMovie: null
};
