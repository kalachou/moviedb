import { RouterReducerState } from '@ngrx/router-store';

import { TvShow } from '../../models/tvshow.interface';
import { selectSelectedShow } from '../selectors/shows-page.selectors';

export interface ShowsPageState {
  entities: TvShow[];
  currentPage: number;
  selectedShow: TvShow;
  selectedShowID: number;
  router?: RouterReducerState;
}

export const initialShowsPageState: ShowsPageState = {
  currentPage: 0,
  entities: [],
  selectedShow: null,
  selectedShowID: null
};
