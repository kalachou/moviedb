import { RouterReducerState } from '@ngrx/router-store';

import { Movie } from '../../models/movie.interface';
import { MoviesPage } from 'src/app/models/moviesPage.interface';

export interface MoviesPageState {
    router?: RouterReducerState;
    page: number;
    items: Movie[];
}

export const initialMoviesPageState: MoviesPage = {
    page: 1,
    items: new Array<Movie>(20)
};
