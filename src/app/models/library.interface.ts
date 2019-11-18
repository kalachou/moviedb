import { Movie } from './movie.interface';
import { TvShow } from './tvshow.interface';

export interface Library {
    items: (Movie|TvShow)[];
}
