import { TvShow } from './tvshow.interface';
export interface ShowsPage {
    items: (TvShow)[];
    page: number;
}