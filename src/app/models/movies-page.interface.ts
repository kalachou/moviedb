import { Movie } from './movie.interface';

export interface MoviesPage {
    items: (Movie)[];
    page: number;
    selectedMovieID: number;
    selectedMovie: Movie;
}
