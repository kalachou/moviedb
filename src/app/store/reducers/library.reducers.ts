import { ELibraryActions } from '../actions/library.actions';
import { LibraryActions } from '../actions/library.actions';
import { initialLibraryState, LibraryState } from '../state/library.state';


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
    case ELibraryActions.ToggleItem:
      console.log('toggle', action.payload);
      return state.items.find(x => x.title === action.payload.title)
        ? {
          ...state,
          items: state.items
            .filter(x => JSON.stringify(x) !== JSON.stringify(action.payload)),
          filteredItems: state.filteredItems
            .filter(x => JSON.stringify(x) !== JSON.stringify(action.payload))
        }
        : {
          ...state,
          filteredItems: state.filteredItems
            .concat([action.payload]
              .filter(x => x.title === state.filter)),
          items: state.items.concat(action.payload)
        };
    case ELibraryActions.FilterLibrarySearch:
            };
        default :
            return state;
    }
};
