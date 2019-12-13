import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { LibraryState } from '../state/library.state';


const selectLibrary = (state: AppState) => state.library;

export const selectLibraryList = createSelector(
  selectLibrary,
    (state: LibraryState) => state.items
);
