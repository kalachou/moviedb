import { ELibraryActions } from '../actions/library.actions';
import { LibraryActions } from '../actions/library.actions';
import { initialLibraryState, LibraryState } from '../state/library.satate';


export const libraryReducers = (
    state = initialLibraryState,
    action: LibraryActions
): LibraryState => {
    switch (action.type) {
        case ELibraryActions.AddItem:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };
        case ELibraryActions.DeleteItem:
            return {
                ...state,
                items: state.items.filter(x => JSON.stringify(x) !== JSON.stringify(action.payload))
            };
        default :
            return state;
    }
};
