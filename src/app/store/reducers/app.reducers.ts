import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';
import { moviesPageReducers } from './moviesPage.reducers';
import { showsPageReducers } from './showsPage.reducers';
import { libraryReducers } from './library.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  movies: moviesPageReducers,
  shows: showsPageReducers,
  library: libraryReducers
};
