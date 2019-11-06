import { ELibraryActions } from '../actions/library.actions';
import { initialLibraryState } from '../state/library.satate';

export const libraryReducers = (
    state = initialLibraryState,
    action: ELibraryActions
): LibraryState => {
    switch(action.type):
    case ELibraryActions.AddItem:
        return {
            ...state,

        }
}