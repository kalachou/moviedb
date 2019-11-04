import { IMovie } from './movie.interface';
import { ITvShow } from './tvshow.interface';

export interface ILibrary {
    movies: Array<IMovie>;
    shows: Array<ITvShow>;
}
