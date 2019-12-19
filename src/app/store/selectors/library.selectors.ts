import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { LibraryState } from '../state/library.state';


const selectLibrary = (state: AppState) => state.library;

export const selectLibraryList = createSelector(
  selectLibrary,
    (state: LibraryState) => state.items
);

export const selectLibraryListLength = createSelector(
  selectLibrary,
    (state: LibraryState) => state.items.length
);

export const selectLibraryFilteredList = createSelector(
  selectLibrary,
    (state: LibraryState) => state.filteredItems
);

export const selectLibraryUnseenCount = createSelector(
  selectLibrary,
    (state: LibraryState) => state.unseenItems
);
