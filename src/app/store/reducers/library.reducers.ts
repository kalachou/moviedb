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
        items: state.items
          .filter(x => JSON.stringify(x) !== JSON.stringify(action.payload))
      };

    case ELibraryActions.ToggleItem:
      console.log('toggle', action.payload);
      return state.items.find(x => x.title === action.payload.title)
        ? {
          ...state,
          items: state.items
            .filter(x => JSON.stringify(x) !== JSON.stringify(action.payload)),
          filteredItems: state.filteredItems
            .filter(x => JSON.stringify(x) !== JSON.stringify(action.payload)),
          unseenItems: state.unseenItems - 1
        }
        : {
          ...state,
          filteredItems: state.filteredItems
            .concat([action.payload]
              .filter(x => x.title === state.filter)),
          items: state.items.concat(action.payload),
          unseenItems: state.unseenItems + 1
        };

    case ELibraryActions.SeeItems:
      return {
        ...state,
        unseenItems: 0
      };

    case ELibraryActions.FilterLibrarySearch:
      return {
        ...state,
        filter: action.payload,
        filteredItems: state.items.filter(x => {
          const regExp = new RegExp(action.payload, 'i');
          return regExp.test(x.title);
        })
      };

    default:
      return state;
  }
};
