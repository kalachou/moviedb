import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ShowsPageState } from '../state/shows-page.state';

const selectShows = (state: AppState) => state.shows;

export const selectShowsList = createSelector(
    selectShows,
    (state: ShowsPageState) => state.items
);

export const selectSelectedShow = createSelector(
    selectShows,
    (state: ShowsPageState) => state.selectedShow
);

export const selectCurrentPage = createSelector(
    selectShows,
    (state: ShowsPageState) => state.page
);
