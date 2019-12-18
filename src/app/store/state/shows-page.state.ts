import { RouterReducerState } from '@ngrx/router-store';

import { TvShow } from '../../models/tvshow.interface';

export interface ShowsPageState {
  entities: TvShow[];
  currentPage: number;
  selectedShow: TvShow;
  router?: RouterReducerState;
}

export const initialShowsPageState: ShowsPageState = {
  currentPage: 0,
  entities: [],
  selectedShow: null
};
