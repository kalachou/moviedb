import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { MoviesPageState } from '../state/movies-page.state';

const selectMovies = (state: AppState) => state.movies;

export const selectMoviesList = createSelector(
    selectMovies,
    (state: MoviesPageState) => state.items
);

export const selectSelectedMovie = createSelector(
    selectMovies,
    (state: MoviesPageState) => state.selectedMovie
);

export const selectCurrentPage = createSelector(
    selectMovies,
    (state: MoviesPageState) => state.page
);
