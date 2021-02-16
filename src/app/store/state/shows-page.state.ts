import { RouterReducerState } from '@ngrx/router-store';

import { ShowsPage } from '../../models/shows-page.interface';
import { TvShow } from '../../models/tvshow.interface';

export interface ShowsPageState {
    router?: RouterReducerState;
    page: number;
    items: TvShow[];
}

export const initialShowsPageState: ShowsPage = {
    page: 1,
    items: new Array<TvShow>(20)
};
