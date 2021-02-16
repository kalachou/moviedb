import { EMoviesPageActions } from '../actions/movies-page.actions';
import { MoviesPageActions } from '../actions/movies-page.actions';
import { initialMoviesPageState, MoviesPageState } from '../state/movies-page.state';


export const moviesPageReducers = (
    state = initialMoviesPageState,
    action: MoviesPageActions
): MoviesPageState => {
    switch (action.type) {
        case EMoviesPageActions.LoadPage:
            return {
                ...state,
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
            return state;
    }
};
