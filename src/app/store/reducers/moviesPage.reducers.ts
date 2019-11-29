import { EMoviesPageActions } from '../actions/moviesPage.actions';
import { MoviesPageActions } from '../actions/moviesPage.actions';
import { initialMoviesPageState, MoviesPageState } from '../state/moviesPage.state';


export const moviesPageReducers = (
    state = initialMoviesPageState,
    action: MoviesPageActions
): MoviesPageState => {
    switch (action.type) {
        case EMoviesPageActions.LoadPage:
            return {
                ...state,
                items: null,
                page: action.payload
            };
        case EMoviesPageActions.LoadPageSucces:
            return {
                ...state,
                items: state.items.concat(action.payload),
            };

/*         case EMoviesPageActions.LoadPageFail:
            return {
                items: null,
                page: null
            }; */



        default :
            return null;
    }
};
