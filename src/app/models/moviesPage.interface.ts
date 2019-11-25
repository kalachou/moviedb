import { Movie } from './movie.interface';

export interface MoviePage {
    items: (Movie)[];
    page: number;
}
