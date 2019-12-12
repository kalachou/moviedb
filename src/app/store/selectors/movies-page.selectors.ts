import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { MoviesPageState } from '../state/movies-page.state';

const selectMovies = (appState: AppState) => appState.movies;

export const selectMoviesList = createSelector(
    selectMovies,
    (moviesState: MoviesPageState) => moviesState.items
);

export const selectSelectedMovie = createSelector(
    selectMovies,
    (moviesState: MoviesPageState) => moviesState.selectedMovie
);

export const selectCurrentPage = createSelector(
    selectMovies,
    (moviesState: MoviesPageState) => moviesState.page
);
